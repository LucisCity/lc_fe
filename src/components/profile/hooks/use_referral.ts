import { gql, useMutation, useQuery } from "@apollo/client";
import { handleGraphqlErrors } from "../../../utils/apolo.util";
import { useSnackbar } from "notistack";
import { ErrorCode, ReferralDataResponse } from "../../../gql/graphql";
import UserStore from "../../../store/user.store";
import { useState } from "react";

const GET_LIST_REFERRAL_USER = gql`
  query getListReferralUser {
    getListReferralUser {
      id
      email
      reward
      profile {
        user_id
        avatar
        display_name
      }
      referral_log {
        user_id
        is_claim
        type
        created_at
      }
    }
  }
`;

const CLAIM_REFERRAL = gql`
  mutation claimReferral($inviteeId: String!) {
    claimReferral(inviteeId: $inviteeId) {
      balance
    }
  }
`;

export default function useReferral() {
  const { enqueueSnackbar } = useSnackbar();
  const [listReferralUser, setListReferralUser] = useState<ReferralDataResponse[]>([]);
  const { loading } = useQuery<{ getListReferralUser: ReferralDataResponse[] }>(GET_LIST_REFERRAL_USER, {
    onCompleted: (res) => {
      setListReferralUser(res?.getListReferralUser);
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  const [claimReferral, { loading: claimReferralLoading }] = useMutation(CLAIM_REFERRAL, {
    onCompleted: (res) => {
      UserStore.updateWallet(res.claimReferral);
      enqueueSnackbar("Claim thành công!", { variant: "success" });
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => {
        switch (err.code) {
          case ErrorCode.InviteeNotExist:
            enqueueSnackbar("Người mời không tồn tại", { variant: "error" });
            break;
          case ErrorCode.ReferralClaimed:
            enqueueSnackbar("Referral này đã được claim", { variant: "error" });
            break;
          default:
            enqueueSnackbar("Lỗi server, vui lòng liên hệ với chúng tôi để được hỗ trợ", { variant: "error" });
        }
      });
    },
  });

  return {
    loading,
    listReferralUser,
    setListReferralUser,
    claimReferralLoading,
    claimReferral,
  };
}
