import {observer} from "mobx-react-lite";
import Footer from "./footer";
import Header from "./header";
import BottomNavigation from "./bottom_navigation";
import LayoutStore from "./layout.store";

type Props = {
  children: any;
};
export default observer(function Layout(props: Props) {
  const { children } = props;
  const {isShowHeader, isShowFooter, hasBottomNav} = LayoutStore

  const pageRelativeStyle = {
    paddingBottom: hasBottomNav ? 56 : 0,
    // paddingTop: isShowHeader ? 60 : 0,
  }

  return (
    <>
      {isShowHeader && <Header />}
      <main className="page-relative-c" style={pageRelativeStyle}>
        {children}
        {isShowFooter && <Footer />}
      </main>
      {hasBottomNav && <BottomNavigation/>}
    </>
  );
})
