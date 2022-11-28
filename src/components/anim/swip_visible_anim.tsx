import { motion, Transition, useAnimation, Variants } from "framer-motion";
import { createContext, useContext, useEffect } from "react";

export type PagingContextType = {
  activeIndex: number;
  preIndex: number;
};
export const PagingCtx = createContext<PagingContextType>({
  activeIndex: 0,
  preIndex: 0,
});
export const usePaging = () => useContext(PagingCtx);

interface Props {
  children: any;
  variants?: Variants;
  transition?: Transition;
  enable?: boolean;
  style?: any;
  index: number;
}
export default function SwipVisibleAnim(props: Props) {
  const controls = useAnimation();
  const paging = usePaging();

  useEffect(() => {
    if (props.enable === false) {
      return;
    }
    if (props.index === paging.activeIndex) {
      controls.start("visible");
    } else if (paging.activeIndex === props.index - 1 && props.index === paging.preIndex) {
      controls.start("hidden");
    }
  }, [paging, props.enable]);

  return (
    <motion.div
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
