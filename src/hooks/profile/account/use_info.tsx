import { ApolloError, ApolloQueryResult, gql, useMutation, useQuery } from "@apollo/client";
import { AccountInfo, AccountInfoUpdateInput, MutationUpdateAccountInfoArgs } from "../../../gql/graphql";
import { isEmpty } from "lodash";
import { useSnackbar } from "notistack";
import { handleGraphqlErrors } from "../../../utils/apolo.util";
import UserStore from "../../../store/user.store";

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

type UseUpdateAccountInfoProps = {
  input: AccountInfoUpdateInput;
  onCompleted?: (data: any) => void;
};

export function useUpdateAccountInfo({ input, onCompleted }: UseUpdateAccountInfoProps): {
  updateAccountInfo: () => Promise<any>;
  accountInfoUpdating: boolean;
  dataUpdateAccountInfo: any;
  errorUpdateAccountInfo: ApolloError | undefined;
} {
  const { enqueueSnackbar } = useSnackbar();

  const [
    updateAccountInfo,
    { loading: accountInfoUpdating, data: dataUpdateAccountInfo, error: errorUpdateAccountInfo },
  ] = useMutation(UPDATE_ACCOUNT_INFO, {
    onCompleted: onCompleted,
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
    fetchPolicy: "no-cache",
  });

  return {
    updateAccountInfo,
    accountInfoUpdating,
    dataUpdateAccountInfo,
    errorUpdateAccountInfo,
  };
}
