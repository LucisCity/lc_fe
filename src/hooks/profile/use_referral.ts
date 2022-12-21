import { gql, useQuery } from "@apollo/client";
import { handleGraphqlErrors } from "../../utils/apolo.util";
import { useSnackbar } from "notistack";
import { User } from "../../gql/graphql";

const GET_LIST_REFERRAL_USER = gql`
  query getListReferralUser {
    getListReferralUser {
      id
      email
      profile {
        user_id
        avatar
        display_name
      }
      referral_log {
        isClaim
        type
        created_at
      }
    }
  }
`;

export default function useReferral() {
  const { enqueueSnackbar } = useSnackbar();
  const { loading, data } = useQuery<{ getListReferralUser: User[] }>(GET_LIST_REFERRAL_USER, {
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });

  return {
    loading,
    listReferralUser: data?.getListReferralUser,
  };
}
