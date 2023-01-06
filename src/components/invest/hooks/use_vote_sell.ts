import { useApolloClient, useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { VOTE_SELLPROJECT_MUT } from "../../../config/api/invest.config";
import projectStore from "../../../store/project.store";
import { handleGraphqlErrors } from "../../../utils/apolo.util";

type VoteType = "accept" | "deny";

export default function useVoteSell() {
  const { enqueueSnackbar } = useSnackbar();
  const client = useApolloClient();
  const [voteType, setVoteType] = useState<VoteType>("accept");

  const [voteProject, { loading }] = useMutation(VOTE_SELLPROJECT_MUT, {
    onCompleted: () => {
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
    voting: loading,
    voteType,
    setVoteType,
    onVote,
  };
}
