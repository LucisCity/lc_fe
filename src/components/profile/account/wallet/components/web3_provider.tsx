import { EthereumClient, modalConnectors } from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";
import { publicProvider } from "@wagmi/core/providers/public";
import React from "react";

const chains = process.env.NEXT_PUBLIC_IS_TESTNET === "true" ? [bscTestnet] : [bsc];

// Wagmi client
const { provider } = configureChains(chains, [
  publicProvider(),
  // walletConnectProvider({ projectId: "<YOUR_PROJECT_ID>" }),
]);
const wagmiClient = createClient({
  autoConnect: false,
  connectors: modalConnectors({ appName: "web3Modal", chains }),
  provider,
});
// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function Web3Provider(props: React.PropsWithChildren) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>{props.children}</WagmiConfig>
      <Web3Modal
        ethereumClient={ethereumClient}
        mobileWallets={[
          {
            id: "trust",
            name: "Trust Wallet",
            links: { native: "trust://", universal: "https://link.trustwallet.com" },
          },
          {
            id: "rainbow",
            name: "Rainbow",
            links: { native: "rainbow://", universal: "https://rainbow.me" },
          },
          {
            id: "zerion",
            name: "Zerion",
            links: { native: "zerion://", universal: "https://wallet.zerion.io" },
          },
          {
            id: "tokenary",
            name: "Tokenary",
            links: { native: "tokenary://", universal: "https://tokenary.io" },
          },
        ]}
        // Custom Linking Desktop Wallets
        desktopWallets={[
          {
            id: "ledger",
            name: "Ledger Live",
            links: { native: "ledgerlive://", universal: "https://www.ledger.com" },
          },
          {
            id: "zerion",
            name: "Zerion",
            links: { native: "zerion://", universal: "https://wallet.zerion.io" },
          },
          {
            id: "tokenary",
            name: "Tokenary",
            links: { native: "tokenary://", universal: "https://tokenary.io" },
          },
          {
            id: "oreid",
            name: "OREID",
            links: {
              native: "",
              universal: "https://www.oreid.io/",
            },
          },
        ]}
        // Custom Wallet Images
        walletImages={{
          metaMask: "/assets/imgs/wallet/wallet_metamask.webp",
          brave: "/assets/imgs/wallet/wallet_brave.webp",
          ledger: "/assets/imgs/wallet/wallet_ledger.webp",
          coinbaseWallet: "/assets/imgs/wallet/wallet_coinbase.webp",
          zerion: "/assets/imgs/wallet/wallet_zerion.webp",
          trust: "/assets/imgs/wallet/wallet_trust.webp",
          rainbow: "/assets/imgs/wallet/wallet_rainbow.webp",
          oreid: "/assets/imgs/wallet/wallet_oreid.svg",
        }}
        // Custom Chain Images
        chainImages={{
          137: "/assets/imgs/wallet/chain_polygon.webp",
          10: "/assets/imgs/wallet/chain_optimism.webp",
          42161: "/assets/imgs/wallet/chain_arbitrum.webp",
          1: "/assets/imgs/wallet/ethereum.webp",
          4: "/assets/imgs/wallet/ethereum.webp",
          // 97: "https://chainlist.org/_next/image?url=https%3A%2F%2Ficons.llamao.fi%2Ficons%2Fchains%2Frsz_binance.jpg&w=64&q=75",
        }}
      />
    </>
  );
}
