import { ethers } from "ethers";
import { erc20Abi } from "./abi/TokenErc20Abi";
import Erc721Abi from "./abi/Erc721Abi.json";
import BigNumber from "bignumber.js";
import { makeError } from "../utils/error";
/*
Usage:
import EthersService from 'service/blockchain/Ethers'
import { nonReactive as ConnectWalletStore_NonReactiveData } from "components/Auth/ConnectWalletStore";
if (!ConnectWalletStore_NonReactiveData.web3Provider) {
  throw makeError("Need to connect your wallet first");
}
const ethersService = new EthersService(ConnectWalletStore_NonReactiveData.web3Provider);
const address = await ethersService.getMyAddress();
 */

type ResultTranferFT = {
  txHash: string;
  blockNumber?: number;
  error: null;
};

export default class BlockchainService {
  static ErrorCode = {
    NotInitialized: "NotInitialized",
  };

  private _web3Provider?: ethers.providers.Web3Provider;

  constructor(web3Provider: ethers.providers.Web3Provider) {
    this.web3Provider = web3Provider;
  }

  get web3Provider(): ethers.providers.Web3Provider | undefined {
    return this._web3Provider;
  }

  set web3Provider(value: ethers.providers.Web3Provider | undefined) {
    this._web3Provider = value;
  }

  protected getSigner(): ethers.providers.JsonRpcSigner {
    if (!this._web3Provider) {
      throw makeError(BlockchainService.ErrorCode.NotInitialized, "Contract._web3Provider was not set");
    }

    return this._web3Provider.getSigner();
  }

  private getContractWithSignerErc20(contractAddress: string): ethers.Contract {
    return new ethers.Contract(contractAddress, erc20Abi.abi, this.getSigner());
  }

  private getContractWithSignerErc721(contractAddress: string): ethers.Contract {
    return new ethers.Contract(contractAddress, Erc721Abi, this.getSigner());
  }

  async signMessage(message: string): Promise<string> {
    const signer = this.getSigner();
    return await signer.signMessage(message);
  }

  getAddressFromSignature(message: string, signature: string): string {
    return ethers.utils.verifyMessage(message, signature);
  }

  async getBalanceOf(address: string, erc20ContractAddress: string): Promise<number> {
    const contract = await this.getContractWithSignerErc20(erc20ContractAddress);
    return contract.balanceOf(address);
  }

  /**
   * If connect with ETH will get BUSD
   * BSC get BNB
   * Poligon get Matic
   * ...
   */
  async getNativeBalance(address: string) {
    const r = await this._web3Provider?.getBalance(address);
    // const balance = ethers.utils.formatEther(r)

    let balance;
    if (r) {
      balance = ethers.utils.formatEther(r);
    }

    return balance;
  }

  async getMyAddress() {
    return this.getSigner().getAddress();
  }

  /**
   * Check allowance for the process of:
   * erc20 contract give permission for the address/contract to spend money from
   *
   * @param address NFT boxes, event boxes, the spender
   * @param erc20Address The currency that address spend
   * @return number|null amount in Wei
   */
  async getMyAllowanceOf(address: string, erc20Address: string): Promise<number | null> {
    const myAddress = await this.getMyAddress();
    const contract = await this.getContractWithSignerErc20(erc20Address);

    const res = await contract.allowance(myAddress, address).catch((e: any) => {
      console.error("{getAllowance} catch e: ", e);
      return null;
    });

    return res === null ? res : ethers.utils.formatEther(res);
  }

  /**
   * erc20 contract give permission for the address/contract to spend money from
   *
   * @param address NFT boxes, event boxes, the spender
   * @param erc20Address The currency that address spend
   */
  async requestApproval(address: string, erc20Address: string): Promise<boolean> {
    const contract = await this.getContractWithSignerErc20(erc20Address);
    return contract.approve(address, ethers.constants.MaxUint256).then((r: any) => {
      console.log("{EtherContract.requestApproval} r: ", r);
      if (r.hash) {
        console.log("{EtherContract.requestApproval} r.hash", r.hash);
        return true;
      } else {
        return true;
      }
    });
  }

  async transferNft(toAddress: string, nftBoxContractAddress: string, nftTokenId: number): Promise<any | false> {
    try {
      const myAddress = await this.getMyAddress();
      const boxContractSigner = this.getContractWithSignerErc721(nftBoxContractAddress);

      const transaction = await boxContractSigner.transferFrom(myAddress, toAddress, nftTokenId);
      return transaction.wait();
    } catch (error) {
      console.log("{EtherContract.transferNft} error: ", error);
      return false;
    }
  }
  fmt = {
    decimalSeparator: ",",
    groupSeparator: ".",
    groupSize: 3,
    secondaryGroupSize: 2,
  };

  async transferFT(toAddress: string, tokenAddress: string, amount: number): Promise<ResultTranferFT> {
    const result: ResultTranferFT = {
      txHash: "",
      error: null,
    };
    try {
      const contract = await this.getContractWithSignerErc20(tokenAddress);
      const decimal = await contract.decimals();

      const totalAmount = new BigNumber(amount).multipliedBy(Math.pow(10, decimal)).toFormat({ groupSeparator: "" });

      const transaction = await contract.transfer(toAddress, totalAmount);
      const txHash = transaction.hash;
      result.blockNumber = transaction.blockNumber;
      result.txHash = txHash;
    } catch (error) {
      console.log("{EtherContract.transferNft} error: ", error);

      //@ts-ignore
      result.error = error;
    }
    return result;
  }
}
