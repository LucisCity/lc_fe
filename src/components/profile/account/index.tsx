import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";
import CustomizedTabs from "../components/tabs";

export const ProfileAccount = () => {

  return (
    <Box mx={{md: 10, xs: 3}} my={{md: 7, xs: 3}}>
      <Typography
        fontWeight={700}
        fontSize={{md: 32, xs: 25}}
        textAlign={{md: "left", xs: "center"}}
      >
        Tài khoản
      </Typography>
      <CustomizedTabs/>
    </Box>
  )
}