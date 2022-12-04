import { observer } from "mobx-react-lite";
import Footer from "./footer";
import Header from "./header";
import BottomNavigation from "./bottom_navigation";
import LayoutStore from "./layout.store";

type Props = {
  children: any;
};
export default observer(function Layout(props: Props) {
  const { children } = props;
  const { isShowHeader, isShowFooter, hasBottomNav } = LayoutStore;

  // Comment this out because let each page handle the padding, so we have page background underneath the header and bar
  const pageRelativeStyle = {
    // paddingBottom: hasBottomNav ? 60 : 0,
    // paddingTop: isShowHeader ? 90 : 0,
    "--page-padding-bottom": hasBottomNav ? "60px" : 0,
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
        {isShowFooter && <Footer disabledBackground hasBottomNav={hasBottomNav}/>}
      </main>
      {hasBottomNav && <BottomNavigation />}
    </>
  );
});
