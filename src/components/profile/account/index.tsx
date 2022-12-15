import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";
import ProfileSubTabs from "../components/tabs";
import InfoForm from "../account/info";
import Security from "../account/security";
import ConnectBank from "../account/connect_bank";
import ConnectWallet from "../account/connect_wallet";
import Verification from "../account/verification";


const labels = ["Hồ sơ", "Bảo mật", "Liên kết ngân hàng", "Liên kết ví điện tử", "Xác minh danh tính"];

export const ProfileAccount = () => {

  return (
    <Box mx={{sm: 10, xs: 3}} my={7}>
      <Typography
        fontWeight={700}
        fontSize={{sm: 32, xs: 25}}
        textAlign={{sm: "left", xs: "center"}}
      >
        Tài khoản
      </Typography>
      <ProfileSubTabs labels={labels}>
        <InfoForm/>
        <Security/>
        <ConnectBank/>
        <ConnectWallet/>
        <Verification/>
      </ProfileSubTabs>
    </Box>
  )
}