import { Box } from "@mui/material";
import type { NextPage } from "next";
import ConnectWalletButton from "../components/profile/account/wallet/components/connect_wallet_button";

const Member: NextPage = () => {
  return (
    <Box minHeight="100vh" pt="120px">
      <ConnectWalletButton />
    </Box>
  );
};

export default Member;
