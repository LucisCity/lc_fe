import {observer} from "mobx-react-lite";
import Footer from "./footer";
import Header from "./header";
import BottomNavigation, {getHeight} from "./bottom_navigation";
import LayoutStore from "./layout.store";
import {FabButton} from "../landing/components/fab_button";

type Props = {
  children: any;
};
export default observer(function Layout(props: Props) {
  const { children } = props;
  const { isShowHeader, isShowFooter, bottomNavVisible, bottomNavHeight } = LayoutStore;

  const pageRelativeStyle = {
    // paddingBottom: hasBottomNav ? 60 : 0,
    // paddingTop: isShowHeader ? 90 : 0,
    "--page-padding-bottom": bottomNavVisible ? bottomNavHeight + "px" : 0,
    "--page-padding-top": isShowHeader ? "90px" : 0, // landing always on PC always has header 90px
  };

  return (
    <>
      {isShowHeader && <Header />}
      <main
        className="page-relative-c"
        // @ts-ignore
        style={pageRelativeStyle}
      >
        {children}
        {isShowFooter && <Footer disabledBackground hasBottomNav={bottomNavVisible}/>}
      </main>
      {bottomNavVisible && <BottomNavigation />}
      <FabButton bOffset={bottomNavVisible ? bottomNavHeight : 0}/>
    </>
  );
});
