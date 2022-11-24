import { motion, Transition, useAnimation, Variants } from "framer-motion";
import { createContext, useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export type ScrollDirection = "up" | "down";

type ScrollContextType = {
  onChangeDirection?: (direction: ScrollDirection) => void;
  direction: ScrollDirection;
};
export const ScrollDirectionCtx = createContext<ScrollContextType>({
  direction: "down",
});
export const useScrollDirection = () => useContext(ScrollDirectionCtx);

interface Props {
  children: any;
  variants?: Variants;
  transition?: Transition;
  enable?: boolean;
  style?: any;
}
export default function AnimWhenVisible(props: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    if (props.enable === false) {
      return;
    }
    console.log("scrollDirection: ", scrollDirection.direction);
    if (inView) {
      controls.start("visible");
    } else if (scrollDirection.direction === "up") {
      controls.start("hidden");
    }
  }, [controls, inView, scrollDirection, props.enable]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={props.enable === false ? "visible" : "hidden"}
      viewport={{ once: true }}
      transition={props.transition ?? { duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
        ...props.variants,
      }}
      style={props.style}
    >
      {props.children}
    </motion.div>
  );
}
