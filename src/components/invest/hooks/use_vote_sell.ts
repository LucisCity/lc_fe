import { useApolloClient, useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { VOTE_SELLPROJECT_MUT } from "../../../config/api/invest.config";
import useMenu from "../../../hooks/use_menu";
import projectStore from "../../../store/project.store";
import { handleGraphqlErrors } from "../../../utils/apolo.util";

export default function useVoteSell() {
  const menu = useMenu();
  const { enqueueSnackbar } = useSnackbar();
  const client = useApolloClient();

  const [voteProject, { loading }] = useMutation(VOTE_SELLPROJECT_MUT, {
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
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  function onVote(isSell: boolean) {
    if (!projectStore.projectDetail) {
      return;
    }
    if (loading) {
      return;
    }

    voteProject({
      variables: {
        projectId: projectStore.projectDetail.id,
        isSell,
      },
    });
  }

  return {
    menu,
    voting: loading,
    onVote,
  };
}
