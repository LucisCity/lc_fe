import { Box } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Main = styled(Box)(({ theme }) => ({
  height: `100vh`,
  width: "100%",
  position: "relative",
  backgroundColor: "#F1F5FF",
}));

const DotBlue = styled(Box)(({ theme }) => ({
  height: 400,
  width: 400,
  position: "absolute",
  borderRadius: "50%",
  backgroundColor: "#6CCAFF",
  filter: "blur(232px)",
}));

const DotViolet = styled(Box)(({ theme }) => ({
  height: 400,
  width: 400,
  position: "absolute",
  borderRadius: "50%",
  backgroundColor: "#7B6EE8",
  filter: "blur(232px)",
}));

export const Background = () => {
  return (
    <Main>
      <DotBlue top={0} />
      <DotBlue top={"0"} left={400} />
    </Main>
  );
};
