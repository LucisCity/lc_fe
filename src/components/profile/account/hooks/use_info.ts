import { ApolloError, gql, useMutation, useQuery } from "@apollo/client";
import { AccountInfo, ErrorCode } from "../../../../gql/graphql";
import { useSnackbar } from "notistack";
import { handleGraphqlErrors } from "../../../../utils/apolo.util";
import UserStore from "../../../../store/user.store";
import * as React from "react";

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

export const UPDATE_WALLET_ADDRESS = gql`
  mutation updateWalletAddress($walletAddress: String!) {
    updateWalletAddress(walletAddress: $walletAddress)
  }
`;

export function useWalletAddress(props?: { errorCallback?: () => void }) {
  const { enqueueSnackbar } = useSnackbar();
  const { data: walletAddressRes } = useQuery<{ getWalletAddress: string }>(GET_WALLET_ADDRESS, {
    onCompleted: (data) => {
      UserStore.updateWalletAddress(data.getWalletAddress);
    },

    skip: !!UserStore.user?.wallet_address,
  });

  const [updateWalletAddress, { loading }] = useMutation<{ updateWalletAddress: string }>(UPDATE_WALLET_ADDRESS, {
    onCompleted: (res) => {
      UserStore.updateWalletAddress(res?.updateWalletAddress);
      enqueueSnackbar("Cập nhật địa chỉ ví thông tin thành công", { variant: "success" });
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => {
        switch (err.code) {
          case ErrorCode.DuplicateWalletAddress:
            enqueueSnackbar(
              "Địa chỉ ví này đã được sử dụng bởi tài khoản khác, vui lòng kết nối với một địa chỉ khác",
              {
                variant: "error",
              },
            );
            break;
          case ErrorCode.UserConnectedWallet:
            enqueueSnackbar("Tài khoản của bạn đã liên kết với địa chỉ ví khác", {
              variant: "error",
            });
            break;
          default:
            enqueueSnackbar("Lỗi server, vui lòng liên hệ với chúng tôi để được hỗ trợ", { variant: "error" });
        }
      });
      // disconnect wallet
      if (props?.errorCallback) {
        props.errorCallback();
      }
    },
  });

  return {
    walletAddress: walletAddressRes?.getWalletAddress ?? UserStore.user?.wallet_address,
    updateWalletAddress,
  };
}

export function useGetAccountInfo() {
  const [compareData, setCompareData] = React.useState<any>();
  const { loading, data } = useQuery(GET_ACCOUNT_INFO, {
    onCompleted: (res) => {
      setCompareData(res?.getAccountInfo);
    },
  });

  return {
    loadingAccountInfo: loading,
    dataAccountInfo: data?.getAccountInfo,
    compareData,
    setCompareData,
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
          case ErrorCode.UsernameDuplicated:
            enqueueSnackbar("Username này đã tồn tại, vui lòng chọn username khác", { variant: "error" });
            break;
          default:
            enqueueSnackbar("Lỗi server, vui lòng liên hệ với chúng tôi để được hỗ trợ", { variant: "error" });
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
