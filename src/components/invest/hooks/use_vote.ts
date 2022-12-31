import { useApolloClient, useLazyQuery, useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { PROJECT_CHECK_VOTE_QUERY, PROJECT_VOTE_MUT } from "../../../config/api/invest.config";
import useMenu from "../../../hooks/use_menu";
import projectStore from "../../../store/project.store";
import userStore from "../../../store/user.store";
import { handleGraphqlErrors } from "../../../utils/apolo.util";

// isVoted
export default function useVote() {
  const menu = useMenu();
  const { enqueueSnackbar } = useSnackbar();
  const [value, setValue] = useState(3);
  const client = useApolloClient();

  const [fetchIsVoted] = useLazyQuery<{ isVoted: boolean }>(PROJECT_CHECK_VOTE_QUERY, {
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
    onCompleted(data) {
      projectStore.setProjectDetail({
        ...(projectStore.projectDetail as any),
        isVoted: true,
      });
    },
  });

  const [voteProject, { loading }] = useMutation(PROJECT_VOTE_MUT, {
    onCompleted: () => {
      enqueueSnackbar("Request successfully!", {
        variant: "success",
      });
      client.refetchQueries({
        include: ["getProject"],
      });
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  useEffect(() => {
    if (!userStore.isLoggedIn || !projectStore.projectDetail || projectStore.projectDetail.isVoted != null) {
      return;
    }
    fetchIsVoted({
      variables: {
        projectId: projectStore.projectDetail.id,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userStore.isLoggedIn, projectStore.projectDetail]);

  function onVote() {
    if (!projectStore.projectDetail) {
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
    menu.onClose();
  }

  function onOpenVoteMenu(event: React.MouseEvent<HTMLElement>) {
    if (!userStore.isLoggedIn || projectStore.projectDetail?.isVoted) {
      return;
    }
    menu.onOpen(event);
  }

  return {
    menu,
    onOpenVoteMenu,
    onVote,
    value,
    setValue,
  };
}
