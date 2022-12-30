import { gql, useLazyQuery, useMutation } from "@apollo/client";
import { useAccount, useSignMessage } from "wagmi";
import { handleGraphqlErrors } from "../../utils/apolo.util";
import { useSnackbar } from "notistack";
import { TransactionLog } from "../../gql/graphql";
import { GET_BALANCE } from "./account/use_info";
import UserStore from "../../store/user.store";
import React from "react";

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
  const [activeStep, setActiveStep] = React.useState(0);
  const [getOtp] = useLazyQuery<{ getOneTimePassword: string }>(GET_OTP);
  const [getBalance] = useLazyQuery(GET_BALANCE, {
    onCompleted: (res) => {
      UserStore.updateWallet(res?.getBalance);
    },
  });
  const [withdrawMutation, { loading }] = useMutation<{ withdrawBalance: TransactionLog }>(WITHDRAW_BALANCE, {
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
  const { isLoading: isLoadingSignMessage, signMessageAsync: signMessageMetamask } = useSignMessage();

  const withdraw = async (amount: number) => {
    setActiveStep(1);
    const getOtpRes = await getOtp({ variables: { address: address } });
    if (getOtpRes.data?.getOneTimePassword) {
      let signature = "";
      try {
        signature = await signMessageMetamask({ message: getOtpRes.data?.getOneTimePassword });
      } catch (e) {
        enqueueSnackbar("Giao dịch cần chữ ký của bạn!", { variant: "error" });
      }
      if (!signature) {
        throw new Error("sign message failed");
      }
      setActiveStep(2);
      const withdrawRes = await withdrawMutation({
        variables: {
          address,
          amount: `${amount}`,
          signatureOTP: signature,
        },
      });
      await getBalance();
      return {
        transactionLog: withdrawRes.data?.withdrawBalance,
      };
    }
  };
  return {
    withdraw,
    activeStep,
    isLoading: isLoadingSignMessage || loading,
  };
};
