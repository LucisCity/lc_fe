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
`;

export function useAccountInfo(): {
  loadingAccountInfo: boolean;
  errorAccountInfo: ApolloError | undefined;
  dataAccountInfo: AccountInfo;
} {
  const { loading, error, data } = useQuery(GET_ACCOUNT_INFO, {
    pollInterval: 500,
  });

  return {
    loadingAccountInfo: loading,
    errorAccountInfo: error,
    dataAccountInfo: data?.getAccountInfo,
  };
}
