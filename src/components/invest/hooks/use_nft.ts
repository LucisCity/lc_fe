import { useContractReads, useContractWrite, usePrepareContractWrite, useBalance } from "wagmi";

import React from "react";
import ProjectStore from "../../../store/project.store";
import UserStore from "../../../store/user.store";
import { erc20Abi } from "../../../services/abi/TokenErc20Abi";
import { BigNumber, ethers } from "ethers";
import { useSnackbar } from "notistack";

export const useNft = () => {
  const contract = ProjectStore.projectDetail?.contract;
  const address = UserStore.user?.wallet_address;
  const contractConfig = {
    address: contract?.address ?? "",
    abi: JSON.parse(contract?.abi ?? "{}"),
  };

  const { data, refetch: refetchContractData } = useContractReads({
    contracts: [
      {
        ...contractConfig,
        functionName: "floorPrice",
      },
      {
        ...contractConfig,
        functionName: "totalSupply",
      },
      {
        ...contractConfig,
        functionName: "totalSold",
      },

      {
        ...contractConfig,
        functionName: "balanceOf",
        args: [address],
      },
    ],
  });
  return {
    data: data as any,
    contract,
    refetchContractData,
  };
};

export const useBuyNft = () => {
  const { enqueueSnackbar } = useSnackbar();
  const USDTAddress = "0xa9Ee5E11f26E9F6F9A1952AEbd5A91C138380B82";
  const contract = ProjectStore.projectDetail?.contract;
  const address = UserStore.user?.wallet_address;

  const { data: balance } = useBalance({
    address: address as `0x${string}`,
  });
  const { data, refetch: refetchAllowance } = useContractReads({
    contracts: [
      {
        address: USDTAddress,
        abi: erc20Abi.abi,
        functionName: "allowance",
        args: [address, contract?.address],
      },
      {
        address: USDTAddress,
        abi: erc20Abi.abi,
        functionName: "balanceOf",
        args: [address],
      },
    ],
  });
  const { config: configStableCoin } = usePrepareContractWrite({
    address: USDTAddress,
    abi: erc20Abi.abi,
    functionName: "approve",
    args: [contract?.address, ethers.constants.MaxUint256],
    onSuccess: async () => {
      await refetchAllowance();
    },
  });
  const {
    isSuccess,
    writeAsync: mintNft,
    isLoading: isLoadingMintNft,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: contract?.address,
    abi: JSON.parse(contract?.abi ?? "{}"),
    functionName: "mint",
    onSuccess: async (res) => {
      enqueueSnackbar("Bạn mua NFT thành công, đợi 1, 2 phút để giao dịch hoàn thành!", {
        variant: "success",
      });
    },
    onError: async (res) => {
      enqueueSnackbar("Lỗi giao dịch, thực hiện lại sau vài phút!", {
        variant: "error",
      });
    },
  });
  const {
    isSuccess: isSuccessApprove,
    writeAsync: approve,
    isLoading: isLoadingApprove,
  } = useContractWrite(configStableCoin);
  return {
    mintNft,
    isSuccess,
    isLoadingMintNft,
    contract,
    approve,
    isSuccessApprove,
    isLoadingApprove,
    userAddress: address,
    allowance: data?.[0],
    balanceOfUsdt: data?.[1] as BigNumber,
    balance: balance?.value,
    coinSymbol: balance?.symbol,
  };
};
