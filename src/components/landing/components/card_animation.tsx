import React from "react";
import { Box } from "@mui/material";
import { motion, Transition, useAnimation, Variants } from "framer-motion";
import { styled, useTheme } from "@mui/system";
import AnimWhenVisible from "../../anim";
import { usePaging } from "../../anim/swip_visible_anim";
const ImageAnimation = styled(motion.img)(({ theme }) => ({
  position: "absolute",
  height: 300,
  width: "auto",
  bottom: 0,

  [theme.breakpoints.down("md")]: {
    height: 250,
  },
}));

const Wrapper = styled(motion.div)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",

  // [theme.breakpoints.between("md", "lg")]: {
  //   justifyContent: "flex-end",
  // },
  // [theme.breakpoints.down("md")]: {
  //   paddingLeft: 50,
  // },
}));

interface IProps {
  animationIndex?: number;
  enable?: boolean;
}

export const CardAnimation = (props: IProps) => {
  return (
    <Box position="relative" width={"100%"} height={380} mt={{ xs: 20, sm: 30, md: 40 }}>
      <AnimWhenVisible
        // variants={{
        //   visible: { opacity: 1, y: -50 },
        //   hidden: { opacity: 0, y: 0, transition: { delay: 0 } },
        // }}
        // transition={{ delay: item.delay, duration: 0.6 }}
        index={props.animationIndex}
        style={{ width: "100%", height: "100%" }}
        // enable={props?.enable ?? true}
        enable={false}
      >
        <Wrapper
          animate={
            {
              // y: [0, -20, 0],
            }
          }
          // transition={{ ease: "linear", duration: 2, repeat: Infinity }}
        >
          <>
            <ImageAnimation
              src="/assets/imgs/landing/card2.png"
              style={{
                zIndex: 1,
              }}
            ></ImageAnimation>
            <ImageAnimation
              src="/assets/imgs/landing/card2.png"
              style={{
                zIndex: 2,
              }}
              animate={{
                // x: [0, -30],
                // rotate: [0, -10],
                y: [0, -75],
              }}
              transition={{ ease: "linear", duration: 1 }}
            ></ImageAnimation>
            <ImageAnimation
              src="/assets/imgs/landing/card3.png"
              style={{
                zIndex: 3,
              }}
              animate={{
                // x: [0, -60],
                // rotate: [0, -20],
                y: [0, -150],
              }}
              transition={{ ease: "linear", duration: 1 }}
            ></ImageAnimation>
          </>
        </Wrapper>
      </AnimWhenVisible>
    </Box>
  );
};
