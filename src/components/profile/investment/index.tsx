/* eslint-disable */
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";
import ProfileTabs from "../components/tabs";
import InvestmentInvested from "./invested";
import InvestmentFavorite from "./favorite";
import InvestmentRecommended from "./recommended";
import InvestmentHot from "./hot";


const subTabs = [
  {
    label: "Đã đầu tư",
    value: "invested",
  },
  {
    label: "Yêu thích",
    value: "favorite",
  },
  {
    label: "Gợi ý",
    value: "recommended",
  },
  {
    label: "Sản phẩm hot",
    value: "hot",
  },
];

export const ProfileInvestment = () => {
  return (
    <Box mx={{sm: 10, xs: 3}} my={7}>
      <Typography
        fontWeight={700}
        fontSize={{sm: 32, xs: 25}}
        textAlign={{sm: "left", xs: "center"}}
      >
        Sản phẩm đầu tư
      </Typography>
      <ProfileTabs sectionHref={"/profile/investment"} tabs={subTabs}>
        <InvestmentInvested/>
        <InvestmentFavorite/>
        <InvestmentRecommended/>
        <InvestmentHot/>
      </ProfileTabs>
    </Box>
  )
}
