import React from "react";
import { Box, styled } from "@mui/system";
import { CardSection } from "../landing/card_section";
import { Avatar, Container, Grid, Paper, Typography } from "@mui/material";

const Main = styled("main")(({ theme }) => ({
  background: "",
}));
export const AccountPage = () => {
  return (
    <Main
      sx={{
        background: `url(${"assets/imgs/member/background.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
        width: "100%",
      }}
    >
    </Main>
  );
};
