import DocHead from "./doc_head";
import Footer from "./footer";
import Header from "./header";
import { Box, useTheme } from "@mui/system";
import BottomNavigation from "./bottom_navigation";

type Props = {
  children: any;
  isShowHeader?: boolean;
  isShowFooter?: boolean;
};
function AppLayout(props: Props) {
  const { children, isShowHeader, isShowFooter } = props;
  return (
    <>
      {/* DocHead should in each page */}
      <DocHead />
      {isShowHeader === false ? null : <Header />}
      {children}
      {isShowFooter === false ? null : <Footer />}
      <Box display={{ sx: "none" }}>
        <BottomNavigation />
      </Box>
    </>
  );
}

export default AppLayout;
