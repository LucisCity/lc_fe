import { ApolloError, gql, useMutation, useQuery } from "@apollo/client";
import { AccountInfo } from "../../../gql/graphql";
import { useSnackbar } from "notistack";
import { handleGraphqlErrors } from "../../../utils/apolo.util";

export const GET_BALANCE = gql`
  query getBalance {
    getBalance {
      balance
      user_id
    }
  }
`;
export const GET_ACCOUNT_INFO = gql`
  query {
    getAccountInfo {
      user_id
      user_name
      display_name
      given_name
      family_name
      date_of_birth
      email
    }
  }
`;

export function useGetAccountInfo(): {
  loadingAccountInfo: boolean;
  errorAccountInfo: ApolloError | undefined;
  dataAccountInfo: AccountInfo;
} {
  const { loading, error, data } = useQuery(GET_ACCOUNT_INFO, {});

  return {
    loadingAccountInfo: loading,
    errorAccountInfo: error,
    dataAccountInfo: data?.getAccountInfo,
  };
}

export const UPDATE_ACCOUNT_INFO = gql`
  mutation ($input: AccountInfoUpdateInput!) {
    updateAccountInfo(input: $input)
  }
`;

// type UseUpdateAccountInfoProps = {
//   onCompleted?: (data: any) => void;
// };
//
export function useUpdateAccountInfo(): {
  updateAccountInfo: any;
  accountInfoUpdating: boolean;
} {
  const { enqueueSnackbar } = useSnackbar();

  const [updateAccountInfo, { loading: accountInfoUpdating }] = useMutation(UPDATE_ACCOUNT_INFO, {
    onCompleted: (res) => {
      enqueueSnackbar("Success", { variant: "success" });
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
    fetchPolicy: "no-cache",
  });

  return {
    updateAccountInfo,
    accountInfoUpdating,
  };
}
