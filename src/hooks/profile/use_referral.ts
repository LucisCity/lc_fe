import { gql, useMutation, useQuery } from "@apollo/client";
import { handleGraphqlErrors } from "../../utils/apolo.util";
import { useSnackbar } from "notistack";
import { ReferralDataResponse } from "../../gql/graphql";
import UserStore from "../../store/user.store";
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
        isClaim
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
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
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
