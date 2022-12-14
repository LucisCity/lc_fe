import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";
import CustomizedTabs from "../components/tabs";

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
      <CustomizedTabs/>
    </Box>
  )
}