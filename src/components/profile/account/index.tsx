import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import CustomPaginationActionsTable from "../components/table";
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