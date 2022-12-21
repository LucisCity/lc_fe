import { ApolloError, ApolloQueryResult, gql, useQuery } from "@apollo/client";
import { AccountInfo } from "../../../gql/graphql";

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
`

export function useAccountInfo(): {
  loadingAccountInfo: boolean,
  errorAccountInfo: ApolloError | undefined,
  AccountInfo: () => Promise<ApolloQueryResult<any>>;
  dataAccountInfo: AccountInfo,
} {
  const {loading, error, data, refetch} = useQuery(GET_ACCOUNT_INFO, {});

  return {
    loadingAccountInfo: loading,
    errorAccountInfo: error,
    AccountInfo: refetch,
    dataAccountInfo: data?.getAccountInfo,
  };
}
