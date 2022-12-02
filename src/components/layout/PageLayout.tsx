import {useEffect} from "react";
import LayoutStore from "./layout.store";

type Props = {
  isShowHeader?: boolean;
  isShowFooter?: boolean;
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
