import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import anime from "animejs";
import React from "react";
import { headerHeight } from "../layout/header";
import { IntroSection } from "./intro_section";
import { extendHeaderHeight } from "../layout/header/landing_header";

const MainStyled = styled("main")(({ theme }) => ({
  // height: `calc(100vh - ${headerHeight}px)`,
  width: "100%",
  backdropFilter: "blur(12px)",
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
        return window.innerHeight;
      }

      return (activeSection - 1) * window.innerHeight;
    }

    return 0;
  }, [activeSection]);

  React.useEffect(() => {
    document.addEventListener("wheel", onScroll, { passive: false });
    document.body.style.overflow = "hidden";
    return () => document.removeEventListener("wheel", onScroll);
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
  }, [scrollPosition]);

  return (
    <>
      <MainStyled>
        <Box height="100%" width="100%">
          <IntroSection activeSection={activeSection} />
          <IntroSection />
          <IntroSection />
          <IntroSection />
          <IntroSection />
          <IntroSection />
          <IntroSection />
          <IntroSection />
        </Box>
      </MainStyled>
    </>
  );
};
