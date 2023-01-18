import { useApolloClient, useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { PROJECT_VOTE_MUT } from "../../../config/api/invest.config";
import useMenu from "../../../hooks/use_menu";
import projectStore from "../../../store/project.store";
import userStore from "../../../store/user.store";
import { handleGraphqlErrors } from "../../../utils/apolo.util";
import { ErrorCode } from "../../../gql/graphql";

export default function useVote() {
  const menu = useMenu();
  const { enqueueSnackbar } = useSnackbar();
  const [value, setValue] = useState(5);
  const client = useApolloClient();
  const [voteProject, { loading }] = useMutation(PROJECT_VOTE_MUT, {
    onCompleted: () => {
      menu.onClose();
      enqueueSnackbar("Request successfully!", {
        variant: "success",
      });
      client.refetchQueries({
        include: ["getProject", "projectExtraQuery"],
      });
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => {
        switch (err.code) {
          case "INVALID_INPUT":
            enqueueSnackbar("Input không hợp lệ", { variant: "error" });
            break;
          case "NOT_FOUND":
            enqueueSnackbar("Không tìm thấy project", { variant: "error" });
            break;
          default:
            enqueueSnackbar("Lỗi server, vui lòng liên hệ với chúng tôi để được hỗ trợ", { variant: "error" });
        }
      });
    },
  });

  useEffect(() => {
    if (!userStore.isLoggedIn || !projectStore.projectDetail?.profile) {
      return;
    }
    setValue(Number(projectStore.projectDetail.profile.vote));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userStore.isLoggedIn, projectStore.projectDetail]);

  function onVote() {
    if (!projectStore.projectDetail) {
      return;
    }
    if (loading) {
      return;
    }

    voteProject({
      variables: {
        input: {
          projectId: projectStore.projectDetail.id,
          value,
        },
      },
    });
  }

  function onOpenVoteMenu(event: React.MouseEvent<HTMLElement>) {
    if (!userStore.isLoggedIn || projectStore.projectDetail?.isVoted) {
      return;
    }
    menu.onOpen(event);
  }

  return {
    menu,
    voting: loading,
    onOpenVoteMenu,
    onVote,
    value,
    setValue,
  };
}
