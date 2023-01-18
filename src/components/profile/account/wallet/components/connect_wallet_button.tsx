import { Web3Button } from "@web3modal/react";
import { Box, GlobalStyles } from "@mui/material";

export default function ConnectWalletButton() {
  return (
    <Box>
      {/* <GlobalStyles styles={{ button: { background: "grey" } }} /> */}
      <Web3Button balance="show" label="Connect wallet" />
    </Box>
  );
}
