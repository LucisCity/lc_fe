import { Box } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Main = styled(Box)(({ theme }) => ({
  height: `300vh`,
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

const Waves = styled("img")(({ theme }) => ({
  mixBlendMode: "overlay",
  width: "inherit",
  height: "inherit",
  objectFit: "cover",
}));

export const Background = () => {
  return (
    <Main>
      <Box
        bgcolor={"rgba(255,255,255,0.5)"}
        top={0}
        left={0}
        position={"absolute"}
        width={"inherit"}
        height={"inherit"}
        zIndex={2}
      />
      <DotBlue top={0} />
      <DotBlue top={"0"} left={400} />
      <DotViolet bottom={"200vh"} right={"400px"} />
      <DotViolet bottom={"160vh"} right={"400px"} />
      <DotBlue bottom={"90vh"} right={"400px"} />
      <DotViolet bottom={"130vh"} right={"0"} />
      <DotViolet bottom={"50vh"} left={"0"} />
      <DotViolet bottom={0} left={0} />
      <DotBlue bottom={"100vh"} left={0} />
      <DotBlue bottom={"100vh"} left={0} />
      <DotBlue bottom={"50vh"} right={0} />
      <DotViolet bottom={0} right={200} />
      <DotBlue top={0} right={0} />

      <Waves src="/assets/imgs/landing/img_bg_section.svg" alt="" />
    </Main>
  );
};
