import { Box } from "@mui/material";
import DocHead from "./doc_head";
import Footer from "./footer";
import Header from "./header";

type Props = {
  children: any;
  isShowHeader?: boolean;
  isExtendHeaderComponent?: boolean;
};
function AppLayout(props: Props) {
  const { children, isShowHeader } = props;

  return (
    <Box>
      <DocHead />
      {isShowHeader === false ? null : <Header />}
      {children}
      <Footer />
    </Box>
  );
}

export default AppLayout;
