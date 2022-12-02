import { Box } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const size = 387;
const Main = styled(Box)(({ theme }) => ({
  height: `100vh`,
  width: "100%",
  position: "relative",
}));

const DotBlue1 = styled(Box)(({ theme }) => ({
  height: size,
  width: size,
  position: "absolute",
  borderRadius: "50%",
  backgroundColor: "#6CCAFF",
  filter: "blur(232px)",
  // @ts-ignore
  animation: `moveAround 8s linear infinite`,
  "@keyframes moveAround": {
    "0%": { top: 0, left: 0 },
    "25%": { top: 0, left: `calc(100vw - ${size + 50}px)` },
    "50%": { top: `calc(100vh - ${size + 50}px)`, left: `calc(100vw - ${size + 50}px)` },
    "75%": { top: `calc(100vh - ${size + 50}px)`, left: 0 },
    "100%": { top: 0, left: 0 },
  },
}));
const DotBlue2 = styled(Box)(({ theme }) => ({
  height: size,
  width: size,
  position: "absolute",
  borderRadius: "50%",
  backgroundColor: "#6CCAFF",
  filter: "blur(232px)",
  animation: `moveAround1 8s linear infinite`,
  "@keyframes moveAround1": {
    "100%": { bottom: 0, left: 200 },
    "75%": { bottom: 0, left: `calc(100vw - ${size + 50 + 200}px)` },
    "50%": { bottom: `calc(100vh - ${size + 50}px)`, left: `calc(100vw - ${size + 50 + 200}px)` },
    "25%": { bottom: `calc(100vh - ${size + 50}px)`, left: 200 },
    "0%": { bottom: 0, left: 200 },
  },
}));
const DotBlue3 = styled(Box)(({ theme }) => ({
  height: 387,
  width: 387,
  position: "absolute",
  borderRadius: "50%",
  backgroundColor: "#6CCAFF",
  filter: "blur(232px)",
  animation: `moveAround2 8s linear infinite`,
  "@keyframes moveAround2": {
    "100%": { bottom: 0, left: 600 },
    "75%": { bottom: 0, left: `calc(100vw - ${size + 50 + 600}px)` },
    "50%": { bottom: `calc(100vh - ${size + 50}px)`, left: `calc(100vw - ${size + 50 + 600}px)` },
    "25%": { bottom: `calc(100vh - ${size + 50}px)`, left: 600 },
    "0%": { bottom: 0, left: 600 },
  },
}));

const DotViolet1 = styled(Box)(({ theme }) => ({
  height: 387,
  width: 387,
  position: "absolute",
  borderRadius: "50%",
  backgroundColor: "#7B6EE8",
  filter: "blur(232px)",
  animation: `moveAround4 8s linear infinite`,
  "@keyframes moveAround4": {
    "100%": { top: 0, right: 500 },
    "75%": { top: 0, right: `calc(100vw - ${size + 50 + 500}px)` },
    "50%": { top: `calc(100vh - ${size + 50}px)`, right: `calc(100vw - ${size + 50 + 500}px)` },
    "25%": { top: `calc(100vh - ${size + 50}px)`, right: 500 },
    "0%": { top: 0, right: 500 },
  },
}));
const DotViolet2 = styled(Box)(({ theme }) => ({
  height: 387,
  width: 387,
  position: "absolute",
  borderRadius: "50%",
  backgroundColor: "#7B6EE8",
  filter: "blur(232px)",
  animation: `moveAround5 8s linear infinite`,
  "@keyframes moveAround5": {
    "100%": { top: 0, right: 0 },
    "75%": { top: 0, right: `calc(100vw - ${size + 50}px)` },
    "50%": { top: `calc(100vh - ${size + 50}px)`, right: `calc(100vw - ${size + 50}px)` },
    "25%": { top: `calc(100vh - ${size + 50}px)`, right: 0 },
    "0%": { top: 0, right: 0 },
  },
}));

export const Background = () => {
  return (
    <Main>
      <DotBlue1 />
      <DotBlue2 />
      <DotBlue3 />
      <DotViolet1 />
      <DotViolet2 />
    </Main>
  );
};
