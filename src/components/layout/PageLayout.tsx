import {useEffect} from "react";
import LayoutStore from "./layout.store";

type Props = {
  isShowHeader?: boolean; // force show/hide header, default true
  isShowFooter?: boolean; // force show/hide footer, default true
  // force show/hide footer, default depends on device support
  // true mean force show
  // false mean force hide
  // default mean auto
  hasBottomNav?: boolean;
  children: any;
};
export default function PageLayout(props: Props) {
  const { children, isShowHeader, isShowFooter, hasBottomNav } = props;

  useEffect(() => {
    LayoutStore.setStateOrDefault({
      isShowHeader,
      isShowFooter,
      hasBottomNav,
    })
  }, [])

  return children;
}
