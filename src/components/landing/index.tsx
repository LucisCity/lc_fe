import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

import React from "react";
import { IntroSection } from "./intro_section";

const MainStyled = styled("main")(({ theme }) => ({
  // height: `calc(100vh - ${headerHeight}px)`,
  width: "100%",
  backdropFilter: "blur(12px)",
}));

const extendHeaderHeight = 410;
const ExtendHeader = styled("div")(({ theme }) => ({
  minHeight: extendHeaderHeight,
  width: "100%",
  background: "rgba(255, 255, 255, 0.2);",
  backdropFilter: "blur(12px)",
  display: "flex",
  alignItems: "center",
  zIndex: 1,
}));

export const LandingPage = () => {
  const introSectionRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <ExtendHeader>
        <Container>
          <Grid container>
            <Grid item xs={3} />
            <Grid item xs={6}>
              <Typography variant="h3">Established reader distracted</Typography>
              <Typography>
                Fact that a reader will be distracted by the readable content of a page when looking at its layout.
              </Typography>
              <Button>Learn more {`---->`}</Button>
            </Grid>
            <Grid item xs={3} />
          </Grid>
        </Container>
      </ExtendHeader>
      <MainStyled>
        <Box ref={introSectionRef} height="100%" width="100%">
          <IntroSection />
          <IntroSection />
          <IntroSection />
          <IntroSection />
        </Box>
      </MainStyled>
    </>
  );
};
