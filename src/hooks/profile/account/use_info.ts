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

export const UPDATE_WALLET_ADDRESS = gql`
  mutation updateWalletAddress($walletAddress: String!) {
    updateWalletAddress(walletAddress: $walletAddress)
  }
`;

export function useWalletAddress() {
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
          case "DUPLICATE_ADDRESS":
            enqueueSnackbar("Địa chỉ ví này đã có người khác dùng, làm ơn kết nối địa chỉ khác. ", {
              variant: "error",
            });
            break;
          case "USER_CONNECTED":
            enqueueSnackbar("Tài khoản của bạn đã liên kết với địa chỉ ví khác.", {
              variant: "error",
            });
            break;
        }
      });
    },
  });

  return {
    walletAddress: walletAddressRes?.getWalletAddress ?? UserStore.user?.wallet_address,
    updateWalletAddress,
  };
}

export function useGetAccountInfo(): {
  loadingAccountInfo: boolean;
  dataAccountInfo: AccountInfo;
} {
  const { enqueueSnackbar } = useSnackbar();

  const { loading, data } = useQuery(GET_ACCOUNT_INFO, {
    // onError: (e) => {
    //   enqueueSnackbar("Error", {
    //     variant: "error",
    //   });
    // },
  });

  return {
    loadingAccountInfo: loading,
    dataAccountInfo: data?.getAccountInfo,
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
