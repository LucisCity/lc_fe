import { Box } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const MainItemComponent = styled(Box)(({ theme }) => ({
  height: `100vh`,
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    height: "50vh",
  },
}));

export const TopSection = () => {
  return (
    <MainItemComponent
      sx={{
        background: `url(${"assets/imgs/landing/background-intro-real.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left",
        width: "100%",
      }}
    />
  );
};
