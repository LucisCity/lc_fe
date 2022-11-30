import { motion, Transition, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";

interface Props {
  variants?: Variants;
  transition?: Transition;
  enable?: boolean;
  style?: any;
  children?: any;
}

export default function AnimComponent(props: Props) {
  const controls = useAnimation();

  useEffect(() => {
    if (props.enable) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.enable]);

  return (
    <motion.div
      animate={controls}
      initial="hidden"
      viewport={{ once: true }}
      transition={props.transition ?? { duration: 0.5 }}
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
