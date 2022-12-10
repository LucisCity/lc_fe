import AnimComponent from "./anim_component";
import React from "react";

function getStackDelay(order: number, step = 0.05) {
  return order * step
}

const defaultVariant = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 100, transition: { delay: 0 } },
};
// TODO: Support pass other props
type Props = {
  order: number,
  children: any,
}
export default function StackAnim(props: Props) {
  return <AnimComponent
    variants={defaultVariant}
    transition={{ duration: 0.3, delay: getStackDelay(props.order) }}
  >{props.children}</AnimComponent>
}
