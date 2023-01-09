import { useContractReads, useContractWrite, usePrepareContractWrite, useBalance } from "wagmi";

import React, { useCallback, useState } from "react";
import ProjectStore from "../../../store/project.store";
import UserStore from "../../../store/user.store";
import { erc20Abi } from "../../../services/abi/TokenErc20Abi";
import { BigNumber, ethers } from "ethers";
import { useSnackbar } from "notistack";
import { lucisCity721Abi } from "../../../services/abi/lucisCity721Abi";

export const useNft = () => {
  const contract = ProjectStore.projectDetail?.contract;
  const address = UserStore.user?.wallet_address;
  const contractConfig = {
    address: contract?.address ?? "",
    abi: lucisCity721Abi,
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
    ],
  });
  return {
    data: data as any,
    contract,
    refetchContractData,
  };
};

export const useBuyNft = ({ callBack }: { callBack?: () => void }) => {
  const { enqueueSnackbar } = useSnackbar();
  const USDTAddress = "0xa9Ee5E11f26E9F6F9A1952AEbd5A91C138380B82";
  const contract = ProjectStore.projectDetail?.contract;
  const address = UserStore.user?.wallet_address;
  const [loadingBuyNFT, setLoadingBuyNFT] = useState(false);
  const [loadingApprove, setLoadingApprove] = useState(false);
  const {
    data: balance,
    isLoading: loadingFetchBalance,
    refetch: refetchCoinBalance,
  } = useBalance({
    address: address as `0x${string}`,
  });
  const {
    data,
    isLoading: loadingFetchErc20Contract,
    refetch: refetchErc20Contract,
  } = useContractReads({
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

  const loadingFetchData = loadingFetchBalance && loadingFetchErc20Contract;
  const refetchDataContract = useCallback(async () => {
    await refetchErc20Contract();
    await refetchCoinBalance();
  }, []);
  const { config: configStableCoin } = usePrepareContractWrite({
    address: USDTAddress,
    abi: erc20Abi.abi,
    functionName: "approve",
    args: [contract?.address, ethers.constants.MaxUint256],
  });

  const {
    isSuccess,
    writeAsync: mintNft,
    isLoading: isLoadingMintNft,
  } = useContractWrite({
    mode: "recklesslyUnprepared",
    address: contract?.address,
    abi: lucisCity721Abi,
    functionName: "mint",
    onSuccess: async (res) => {
      setLoadingBuyNFT(false);
      enqueueSnackbar("Bạn mua NFT thành công, đợi 1, 2 phút để giao dịch hoàn thành!", {
        variant: "success",
      });
      // enqueueSnackbar("Bạn mua NFT thành công!", {
      //   variant: "success",
      // });
      // close popup
      if (callBack) {
        callBack();
      }
    },
    onError: async (res) => {
      if (res.name === "UserRejectedRequestError") {
        enqueueSnackbar("Bạn cần ký để thực hiện giao dịch!", {
          variant: "error",
        });
        return;
      }
      enqueueSnackbar("Lỗi giao dịch, thực hiện lại sau vài phút!", {
        variant: "error",
      });
    },
  });
  const {
    isSuccess: isSuccessApprove,
    writeAsync: approve,
    isLoading: isLoadingApprove,
  } = useContractWrite({
    ...configStableCoin,
    onSuccess: async (res) => {
      enqueueSnackbar("Đang thực hiện giao dịch ...", {
        variant: "info",
      });
      await res.wait(1);
      setLoadingApprove(false);
      enqueueSnackbar("Bạn chấp thuận USDT thành công!", {
        variant: "success",
      });
      await refetchDataContract();
    },
  });
  return {
    mintNft,
    isSuccess,
    contract,
    approve,
    isSuccessApprove,
    isLoadingApprove,
    userAddress: address,
    allowance: data?.[0],
    balanceOfUsdt: data?.[1] as BigNumber,
    balance: balance?.value,
    coinSymbol: balance?.symbol,
    setLoadingApprove,
    loadingApprove: isLoadingApprove && loadingApprove,
    setLoadingBuyNFT,
    loadingBuyNFT: loadingBuyNFT && isLoadingMintNft,
    loadingFetchData,
  };
};
