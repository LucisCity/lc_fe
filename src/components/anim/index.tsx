import { Transition, Variants } from "framer-motion";
import ScrollVisibleAnim from "./scroll_visible_anim";
import SwipVisibleAnim from "./swip_visible_anim";

interface Props {
  children: any;
  variants?: Variants;
  transition?: Transition;
  enable?: boolean;
  style?: any;
  index?: number; // only set on pc use with swiperjs
}

export default function AnimWhenVisible(props: Props) {
  if (props.index != null) {
    return <SwipVisibleAnim {...props} index={props.index} />;
  }

  return <ScrollVisibleAnim {...props} />;
}
