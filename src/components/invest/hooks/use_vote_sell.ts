import { useApolloClient, useMutation } from "@apollo/client";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { VOTE_SELLPROJECT_MUT } from "../../../config/api/invest.config";
import projectStore from "../../../store/project.store";
import { handleGraphqlErrors } from "../../../utils/apolo.util";
import { ErrorCode } from "../../../gql/graphql";

type VoteType = "accept" | "deny";

export default function useVoteSell() {
  const { enqueueSnackbar } = useSnackbar();
  const client = useApolloClient();
  const [voteType, setVoteType] = useState<VoteType>("accept");
  const [voted, setVoted] = useState(false);

  const [voteProject, { loading }] = useMutation(VOTE_SELLPROJECT_MUT, {
    onCompleted: () => {
      setVoted(true);
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
          case ErrorCode.NotEnoughNft:
            enqueueSnackbar("Bạn chưa mua đủ nft để vote", { variant: "error" });
            break;
          case ErrorCode.InvalidTimeVoteSell:
            enqueueSnackbar("Hiện tại không phải thời điểm vote", { variant: "error" });
            break;
          case ErrorCode.SellVoted:
            enqueueSnackbar("Mỗi user chỉ được vote một lần", { variant: "error" });
            break;
          default:
            enqueueSnackbar("Lỗi server, vui lòng liên hệ với chúng tôi để được hỗ trợ", { variant: "error" });
        }
      });
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
    voted,
  };
}
