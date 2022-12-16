import { useEffect } from "react";
import LayoutStore from "./layout.store";
import UserStore from "../../store/user.store";
import { useRouter } from "next/router";

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
  const router = useRouter();
  useEffect(() => {
    LayoutStore.setStateOrDefault({
      isShowHeader,
      isShowFooter,
      bottomNavVisible: hasBottomNav,
    });
    UserStore.loadFromLocal();
  }, []);

  return children;
}
