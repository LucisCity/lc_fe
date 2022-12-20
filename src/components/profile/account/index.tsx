import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";
import ProfileTabs from "../components/tabs";
import InfoForm from "./info";
import Security from "./security";
import ConnectBank from "./connect_bank";
import ConnectWallet from "./connect_wallet";
import Verification from "./verification";


const tabs = [
  {
    label: "Hồ sơ",
    value: "info",
  },
  {
    label: "Bảo mật",
    value: "security",
  },
  {
    label: "Liên kết ngân hàng",
    value: "connect_bank",
  },
  {
    label: "Liên kết ví điện tử",
    value: "connect_wallet",
  },
  {
    label: "Xác minh danh tính",
    value: "verification",
  },
];

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
      <ProfileTabs sectionHref={"/profile/account"} tabs={tabs}>
        <InfoForm/>
        <Security/>
        <ConnectBank/>
        <ConnectWallet/>
        <Verification/>
      </ProfileTabs>
    </Box>
  )
}