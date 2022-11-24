import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import anime from "animejs";
import React from "react";
import { headerHeight } from "../layout/header";
import { EcosystemSection } from "./ecosystem_section";
import { CompanySection } from "./company_section";
import { OperationSection } from "./operation_section";
import { ReasonChooseSection } from "./reason_choose_section";
import LandingHeader, { extendHeaderHeight } from "../layout/header/landing_header";
import { ScrollView } from "./scroll_view";
import { CardSection } from "./card_section";
import { TopSection } from "./top_section";

const MainStyled = styled("main")(({ theme }) => ({
  // height: `calc(100vh - ${headerHeight}px)`,
  width: "100%",
  backdropFilter: "blur(12px)",
}));

const durationScroll = 500;

export enum Section {
  OnTop, // start
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
  /**
   * Mobile only
   */
  const [initialY, setInitialY] = React.useState<number | null>(null);
  const initialYRef = React.useRef(initialY);
  const setInitialYRef = (data: number | null) => {
    initialYRef.current = data;
    setInitialY(data);
  };

  // const scrollPosition = React.useMemo(() => {
  //   if (typeof window !== "undefined") {
  //     // introduction company and card in the same section view
  //     return activeSection * window.innerHeight;
  //   }

  //   return 0;
  // }, [activeSection]);

  React.useEffect(() => {
    document.addEventListener("wheel", onScroll, { passive: false });
    document.addEventListener(
      "touchstart",
      (e) => {
        setInitialYRef(e.touches[0].clientY);
      },
      false,
    );

    document.addEventListener("touchmove", onTouchMove, { passive: false });
    document.body.style.overflow = "hidden";
    return () => document.removeEventListener("wheel", onScroll);
  }, []);

  /**
   * Mobile only
   */
  const onTouchMove = (event: TouchEvent) => {
    console.log(2);
    event.preventDefault();
    if (initialYRef.current === null) {
      return;
    }
    const currentY = event.touches[0].clientY;
    const diffY = initialYRef.current - currentY;
    console.log(diffY);
    if (!isPendingRef.current) {
      setIsPendingRef(true);
      setTimeout(() => {
        setIsPendingRef(false);
      }, durationScroll);
      if (diffY > 0) {
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
    setInitialYRef(null);
  };
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

  // React.useEffect(() => {
  //   anime({
  //     targets: window.document.documentElement,
  //     scrollTop: scrollPosition,
  //     easing: "linear",
  //     duration: durationScroll,
  //   });
  // }, [scrollPosition]);

  return (
    <>
      <LandingHeader activeSection={activeSection} />
      <MainStyled>
        <ScrollView activeSection={activeSection}>
          <TopSection activeSection={activeSection} />
          <CompanySection activeSection={activeSection} />
          <CardSection activeSection={activeSection} />
          <EcosystemSection activeSection={activeSection} />
          <ReasonChooseSection activeSection={activeSection} />
          <OperationSection activeSection={activeSection} />
        </ScrollView>
      </MainStyled>
    </>
  );
};
