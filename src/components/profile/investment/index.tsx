/* eslint-disable */
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";
import ProfileSubTabs from "../components/tabs";
import InvestmentInvested from "./invested";
import InvestmentFavorite from "./favorite";
import InvestmentRecommendation from "./recommendation";
import InvestmentHot from "./hot";

const labels = ["Đã đầu tư", "Yêu thích", "Gợi ý", "Sản phẩm hot"];


export const ProfileInvestment = () => {
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
        <InvestmentInvested/>
        <InvestmentFavorite/>
        <InvestmentRecommendation/>
        <InvestmentHot/>
      </ProfileSubTabs>
    </Box>
  )
}
