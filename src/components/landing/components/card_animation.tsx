import React from "react";
import { Box } from "@mui/material";
import { motion, Transition, useAnimation, Variants } from "framer-motion";
import { styled, useTheme } from "@mui/system";
import AnimWhenVisible from "../../anim";
import { usePaging } from "../../anim/swip_visible_anim";
const ImageAnimation = styled(motion.img)(({ theme }) => ({
  position: "absolute",
  height: 380,
  [theme.breakpoints.down("md")]: {
    height: 300,
  },
}));

const Coin = styled("img")(() => ({
  position: "absolute",
  left: -30,
  bottom: 0,
}));
const Wrapper = styled(motion.div)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",

  [theme.breakpoints.between("md", "lg")]: {
    justifyContent: "flex-end",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: 50,
  },
}));

interface IProps {
  animationIndex?: number;
}

export const CardAnimation = (props: IProps) => {
  const theme = useTheme();
  return (
    <Box
      position="relative"
      width={"100%"}
      height={380}
      sx={(theme) => ({
        [theme.breakpoints.between("sm", "md")]: {
          marginTop: theme.spacing(32),
        },
        [theme.breakpoints.down("sm")]: {
          marginTop: theme.spacing(16),
        },
      })}
    >
      <AnimWhenVisible
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50, transition: { delay: 0 } },
        }}
        // transition={{ delay: item.delay, duration: 0.6 }}
        index={props.animationIndex}
        style={{ width: "100%", height: "100%" }}
      >
        <Wrapper
          animate={{
            y: [0, -20, 0],
          }}
          transition={{ ease: "linear", duration: 2, repeat: Infinity }}
        >
          <>
            <ImageAnimation
              src="/card.png"
              style={{
                zIndex: 3,
              }}
            ></ImageAnimation>
            <ImageAnimation
              src="/card.png"
              style={{
                zIndex: 2,
              }}
              animate={{
                x: [0, -30],
                rotate: [0, -10],
              }}
              transition={{ ease: "linear", duration: 1 }}
            ></ImageAnimation>
            <ImageAnimation
              src="/card.png"
              style={{
                zIndex: 1,
              }}
              animate={{
                x: [0, -60],
                rotate: [0, -20],
              }}
              transition={{ ease: "linear", duration: 1 }}
            ></ImageAnimation>
          </>
        </Wrapper>
      </AnimWhenVisible>
      <Coin src="/star2.png" alt="" />
    </Box>
  );
};
