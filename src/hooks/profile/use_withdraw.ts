import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { useAccount, useSignMessage } from "wagmi";
import { handleGraphqlErrors } from "../../utils/apolo.util";
import { useSnackbar } from "notistack";

const GET_OTP = gql`
  query getOneTimePassword($address: String!) {
    getOneTimePassword(address: $address)
  }
`;

const WITHDRAW_BALANCE = gql`
  mutation withdrawBalance($address: String!, $amount: String!, $signatureOTP: String!) {
    withdrawBalance(address: $address, amount: $amount, signatureOTP: $signatureOTP) {
      id
      type
      user_id
      wallet {
        balance
      }
      amount
      blockchain_transaction {
        status
        tx_hash
      }
    }
  }
`;

export const useWithdraw = () => {
  const { enqueueSnackbar } = useSnackbar();
  const { address } = useAccount();

  const [getOtp] = useLazyQuery<{ getOneTimePassword: string }>(GET_OTP);

  const [withdrawMutation, { loading }] = useMutation(WITHDRAW_BALANCE, {
    onCompleted: (res) => {
      if (res?.withdrawBalance?.id) {
        enqueueSnackbar("Tiền của bạn đang được hệ thống xử lý. Đợi 1 - 2 phút để giao dịch được hoàn thành.", {
          variant: "success",
        });
      } else {
        enqueueSnackbar("Có lỗi xảy ra vui liên hệ với chúng tôi để nhận được giúp đỡ!", { variant: "error" });
      }
    },
    onError: (e) => {
      const errors = handleGraphqlErrors(e);
      errors.forEach((err) => enqueueSnackbar(err.message, { variant: "error" }));
    },
  });
  const { isLoading: isLoadingSignMessage, signMessageAsync: signMessageMetamask } = useSignMessage({
    onError: () => {
      enqueueSnackbar("Giao dịch cần chữ ký của bạn!", { variant: "error" });
    },
  });

  const withdraw = async (amount: number) => {
    const getOtpRes = await getOtp({ variables: { address: address } });
    if (getOtpRes.data?.getOneTimePassword) {
      const signature = await signMessageMetamask({ message: getOtpRes.data?.getOneTimePassword });
      await withdrawMutation({
        variables: {
          address,
          amount: `${amount}`,
          signatureOTP: signature,
        },
      });
    }
  };
  return {
    withdraw,
    isLoading: isLoadingSignMessage || loading,
  };
};
