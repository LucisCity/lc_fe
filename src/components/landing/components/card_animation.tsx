import React from "react";
import { Box } from "@mui/material";
import { motion, Transition, useAnimation, Variants } from "framer-motion";
import { styled } from "@mui/system";
import AnimWhenVisible from "../../anim";
import { usePaging } from "../../anim/swip_visible_anim";
const Card = styled("img")(({ theme }) => ({
  position: "absolute",
  zIndex: 3,
}));

const Coin = styled("img")(() => ({
  position: "absolute",
  left: -30,
  bottom: -120,
}));

interface IProps {
  animationIndex?: number;
}

export const CardAnimation = (props: IProps) => {
  const paging = usePaging();
  return (
    <Box position="relative" width={"100%"} height={380}>
      <AnimWhenVisible
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50, transition: { delay: 0 } },
        }}
        // transition={{ delay: item.delay, duration: 0.6 }}
        index={props.animationIndex}
      >
        {paging.activeIndex === props.animationIndex && (
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          >
            <>
              <Card src="/card.png" />
              <motion.img
                src="/card.png"
                style={{
                  position: "absolute",
                  zIndex: 2,
                }}
                animate={{
                  x: [0, -30],
                  rotate: [0, -10],
                }}
                transition={{ ease: "linear", duration: 1 }}
              ></motion.img>
              <motion.img
                src="/card.png"
                style={{
                  position: "absolute",
                  zIndex: 1,
                }}
                animate={{
                  x: [0, -60],
                  rotate: [0, -20],
                }}
                transition={{ ease: "linear", duration: 1 }}
              ></motion.img>
            </>
          </motion.div>
        )}
      </AnimWhenVisible>
      <Coin src="/star2.png" alt="" />
    </Box>
  );
};
