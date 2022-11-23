import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import anime from "animejs";
import React from "react";
import { headerHeight } from "../layout/header";
import { EcosystemSection } from "./ecosystem_section";
import { IntroSection } from "./intro_section";
import { OperationSection } from "./operation_section";
import { ReasonChooseSection } from "./reason_choose_section";

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

const durationScroll = 500;

export enum Section {
  None, // start
  IntroductionCompany,
  IntroductionCard,
  Ecosystem,
  ReasonChoose,
  Operation,
  Demo,
  RoadMap,
  Partner,
  Community,
}

const totalSection = Object.keys(Section).length / 2;
export const LandingPage = () => {
  const [activeSection, setActiveSection] = React.useState(0);
  const [isPending, setIsPending] = React.useState(false);
  const isPendingRef = React.useRef(isPending);
  const setIsPendingRef = (data: boolean) => {
    isPendingRef.current = data;
    setIsPending(data);
  };

  const scrollPosition = React.useMemo(() => {
    if (typeof window !== "undefined") {
      // introduction company and card in the same section view
      if (activeSection === Section.IntroductionCompany || activeSection === Section.IntroductionCard) {
        return window.innerHeight - (window.innerHeight - headerHeight - extendHeaderHeight);
      }

      return (activeSection - 1) * window.innerHeight - (window.innerHeight - headerHeight - extendHeaderHeight);
    }

    return 0;
  }, [activeSection]);

  React.useEffect(() => {
    document.addEventListener("wheel", onScroll, { passive: false });
  }, []);

  const onScroll = (event: WheelEvent) => {
    event.preventDefault();
    const scrollDown = (-event.deltaY || -event.detail) < 0;
    if (!isPendingRef.current) {
      setIsPendingRef(true);
      setTimeout(() => {
        setIsPendingRef(false);
      }, durationScroll);
      if (scrollDown) {
        setActiveSection((pre) => {
          if (pre > totalSection) {
            return pre;
          }
          return pre + 1;
        });
      } else {
        setActiveSection((pre) => {
          if (pre === 0) {
            return pre;
          }
          return pre - 1;
        });
      }
    }
  };

  React.useEffect(() => {
    anime({
      targets: window.document.documentElement,
      scrollTop: scrollPosition,
      easing: "linear",
      duration: durationScroll,
    });
  }, [activeSection]);

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
        <Box height="100%" width="100%">
          {/* <IntroSection activeSection={activeSection} />
          <IntroSection />
          <IntroSection /> */}
          <EcosystemSection activeSection={activeSection} />
          <ReasonChooseSection activeSection={activeSection} />
          <OperationSection activeSection={activeSection} />
          {/* <IntroSection /> */}
          {/* <IntroSection /> */}
        </Box>
      </MainStyled>
    </>
  );
};
