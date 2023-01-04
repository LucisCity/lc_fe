import { ApolloError, gql, useMutation, useQuery } from "@apollo/client";
import { AccountInfo } from "../../../gql/graphql";
import { useSnackbar } from "notistack";
import { handleGraphqlErrors } from "../../../utils/apolo.util";
import UserStore from "../../../store/user.store";

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
      user_name
      given_name
      family_name
      date_of_birth
      email
    }
  }
`;

export const GET_WALLET_ADDRESS = gql`
  query {
    getWalletAddress
  }
`;

export function useGetAccountInfo(): {
  loadingAccountInfo: boolean;
  dataAccountInfo: AccountInfo;
  walletAddress: string | null | undefined;
} {
  const { enqueueSnackbar } = useSnackbar();

  const { loading, data } = useQuery(GET_ACCOUNT_INFO, {
    onError: (e) => {
      enqueueSnackbar("Hệ thống đang gặp trục trặc, chúng tôi sẽ cố gắng khắc phục sớm nhất có thể", {
        variant: "error",
      });
    },
  });

  const { data: walletAddressRes } = useQuery<{ getWalletAddress: string }>(GET_WALLET_ADDRESS, {
    onError: (e) => {
      enqueueSnackbar("Hệ thống đang gặp trục trặc, chúng tôi sẽ cố gắng khắc phục sớm nhất có thể", {
        variant: "error",
      });
    },
    skip: !!UserStore.user?.wallet_address,
  });

  return {
    loadingAccountInfo: loading,
    dataAccountInfo: data?.getAccountInfo,
    walletAddress: walletAddressRes?.getWalletAddress,
  };
}

export const UPDATE_ACCOUNT_INFO = gql`
  mutation ($input: AccountInfoUpdateInput!) {
    updateAccountInfo(input: $input) {
      display_name
      user_name
    }
  }
`;

export function useUpdateAccountInfo(): {
  updateAccountInfo: any;
  accountInfoUpdating: boolean;
} {
  const { enqueueSnackbar } = useSnackbar();

  const [updateAccountInfo, { loading: accountInfoUpdating }] = useMutation(UPDATE_ACCOUNT_INFO, {
    onCompleted: (res) => {
      UserStore.updateDisplayName(res?.updateAccountInfo.display_name);
      enqueueSnackbar("Cập nhật thông tin thành công", { variant: "success" });
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => {
        switch (err.code) {
          case "USERNAME_DUPLICATED":
            enqueueSnackbar("Username này đã tồn tại, vui lòng chọn username khác", { variant: "error" });
            break;
          default:
            enqueueSnackbar("Server error", { variant: "error" });
        }
      });
    },
    fetchPolicy: "no-cache",
  });

  return {
    updateAccountInfo,
    accountInfoUpdating,
  };
}
