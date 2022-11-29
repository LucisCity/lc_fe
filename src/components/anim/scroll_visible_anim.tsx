import { motion, Transition, useAnimation, Variants } from "framer-motion";
import { createContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useScrollDirection } from "../../hooks/useScroll";

export type ScrollDirection = "up" | "down";

type ScrollContextType = {
  onChangeDirection?: (direction: ScrollDirection) => void;
  direction: ScrollDirection;
};
export const ScrollDirectionCtx = createContext<ScrollContextType>({
  direction: "down",
});
// export const useScrollDirection = () => useContext(ScrollDirectionCtx);

interface Props {
  children: any;
  variants?: Variants;
  transition?: Transition;
  enable?: boolean;
  style?: any;
}

export default function ScrollVisibleAnim(props: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const isScrollDown = useScrollDirection();
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (props.enable === false) {
      return;
    }
    // console.log("isScrollDown: ", isScrollDown);
    if (inView) {
      controls.start("visible");
      setIsShow(true);
    } else if (!inView && !isScrollDown && isShow) {
      controls.start("hidden");
      setIsShow(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, isScrollDown, isShow, props.enable]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={props.enable === false ? "visible" : "hidden"}
      viewport={{ once: true }}
      transition={props.transition ?? { duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0, x: 0 },
        hidden: { opacity: 0, y: 20 },
        ...props.variants,
      }}
      style={props.style}
    >
      {props.children}
    </motion.div>
  );
}
