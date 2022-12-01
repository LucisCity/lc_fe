import React from "react";
import { Box, styled } from "@mui/system";

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
