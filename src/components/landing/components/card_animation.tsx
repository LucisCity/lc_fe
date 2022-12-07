import React, { useEffect } from "react";
import { Box } from "@mui/material";
import {AnimationControls, motion, Transition, useAnimation, Variants} from "framer-motion";
import { styled, useTheme } from "@mui/system";
// import AnimWhenVisible from "../../anim";
// import { usePaging } from "../../anim/swip_visible_anim";
const ImageAnimation = styled(motion.img)(({ theme }) => ({
  position: "absolute",
  height: 300,
  width: "auto",
  bottom: 0,

  [theme.breakpoints.down("md")]: {
    height: 250,
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

  // const paging = usePaging();
  // useEffect(() => {
  //   if (props.enable === false) {
  //     return;
  //   }
  //   if (props.animationIndex && paging.activeIndex) {
  //     if (props.animationIndex === paging.activeIndex) {
  //       controls.start("visible");
  //     } else if (paging.activeIndex === props.animationIndex! - 1 && props.animationIndex === paging.preIndex) {
  //       controls.start("hidden");
  //     }
  //     return;
  //   }
  //   controls.start("visible");
  // }, [paging, props.enable]);

  async function startSequence(controls: AnimationControls, firstYOffset: number, repeatOffset: number) {
    await controls.start({
      y: firstYOffset,
      transition: {ease: "linear", duration: 1},
    });
    await controls.start({
      y: repeatOffset,
      transition: {ease: "linear", duration: 3, repeat: Infinity, repeatType: "reverse"},
    });
  }

  useEffect(() => {
    startSequence(controls, -75, -50)
    startSequence(controls2, -150, -100)
  }, []);

  return (
    <Box position="relative" width={"100%"} height={380} mt={{ xs: 20, sm: 30, md: 40 }}>
      {/*<AnimWhenVisible*/}
      {/*  index={props.animationIndex}*/}
      {/*  style={{ width: "100%", height: "100%" }}*/}
      {/*  // variants={{ visible: { scale: 1, y: [0, 0] }, hidden: { scale: 2, y: [-100, 0] } }}*/}
      {/*>*/}
      {/*  <Wrapper animate={{ y: [0, -10, 0] }} transition={{ ease: "linear", duration: 2, repeat: Infinity }}>*/}
      <div>
          <ImageAnimation src="/assets/imgs/landing/card2.png" style={{ zIndex: 1 }}></ImageAnimation>
          <ImageAnimation
            src="/assets/imgs/landing/card2.png"
            style={{ zIndex: 2 }}
            animate={controls}
            // variants={{ visible: { y: [0, -75] }, hidden: { y: [0, 0] } }}
            // transition={{ ease: "linear", duration: 1 }}
          ></ImageAnimation>
          <ImageAnimation
            src="/assets/imgs/landing/card3.png"
            style={{ zIndex: 3 }}
            animate={controls2}
            // variants={{ visible: { y: [0, -150] }, hidden: { y: [0, 0] } }}
            // transition={{ ease: "linear", duration: 1 }}
          ></ImageAnimation>
      </div>
    </Box>
  );
};
