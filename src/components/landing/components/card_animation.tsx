import React, { useCallback, useEffect } from "react";
import { Box } from "@mui/material";
import { AnimationControls, motion, Transition, useAnimation, Variants } from "framer-motion";
import { styled, useTheme } from "@mui/system";
import AnimWhenVisible from "../../anim";
import { usePaging } from "../../anim/swip_visible_anim";
import { isClientDevMode } from "../../../utils/env";
const ImageAnimation = styled(motion.img)(({ theme }) => ({
  position: "absolute",
  height: 300,
  width: "auto",
  bottom: 0,

  [theme.breakpoints.down("md")]: {
    height: 240,
  },
}));

// const Wrapper = styled(motion.div)(({ theme }) => ({
//   width: "100%",
//   height: "100%",
//   display: "flex",
//   justifyContent: "center",
//
//   // [theme.breakpoints.between("md", "lg")]: {
//   //   justifyContent: "flex-end",
//   // },
//   // [theme.breakpoints.down("md")]: {
//   //   paddingLeft: 50,
//   // },
// }));

interface IProps {
  animationIndex?: number;
  enable?: boolean;
}

export const CardAnimation = (props: IProps) => {
  const controls = useAnimation();
  const controls2 = useAnimation();
  const paging = usePaging();

  const start = useCallback(() => {
    startSequence(controls, -75, -50);
    startSequence(controls2, -150, -100);
  }, [controls, controls2]);
  const stop = useCallback(() => {
    stopSequence(controls);
    stopSequence(controls2);
  }, [controls, controls2]);

  useEffect(() => {
    if (props.enable === false) return;

    // Handle swiper slide change in landing page
    if (props.animationIndex && paging.activeIndex) {
      // scroll into page
      if (props.animationIndex === paging.activeIndex) start();
      // scroll out of page
      else if (props.animationIndex === paging.preIndex) stop();
    }
    // in membership page
    else start();

    return () => stop();
  }, [start, stop, paging, props.animationIndex, props.enable]);

  async function stopSequence(controls: AnimationControls) {
    await controls.start({
      y: 0,
      transition: { ease: "linear", duration: 1 },
    });
    await controls.stop();
  }

  async function startSequence(controls: AnimationControls, firstYOffset: number, repeatOffset: number) {
    await controls.start({
      y: firstYOffset,
      transition: { ease: "linear", duration: 1 },
    });
    await controls.start({
      y: repeatOffset,
      transition: { ease: "linear", duration: 3, repeat: Infinity, repeatType: "reverse" },
    });
  }

  // Debug only
  if (isClientDevMode) {
    // @ts-ignore
    // eslint-disable-next-line camelcase
    window.tmp_stopSequence = stop;
    // @ts-ignore
    // eslint-disable-next-line camelcase
    window.tmp_startSequence = start;
  }

  return (
    <Box position="relative" width={"100%"} height={380} mt={{ xs: 18, sm: 26, md: 36 }}>
      <AnimWhenVisible
        index={props.animationIndex}
        style={{ height: "100%", display: "flex", justifyContent: "center" }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100, transition: { delay: 0 } },
        }}
      >
        <ImageAnimation src="/assets/imgs/landing/card2.png" style={{ zIndex: 1 }} />
        <ImageAnimation src="/assets/imgs/landing/card2.png" style={{ zIndex: 2 }} animate={controls} />
        <ImageAnimation src="/assets/imgs/landing/card3.png" style={{ zIndex: 3 }} animate={controls2} />
      </AnimWhenVisible>
    </Box>
  );
};
