import { Box } from "@mui/material";
import React from "react";
import DocHead from "./doc_head";
import Footer from "./footer/footer";
import Header from "./header/header";

function AppLayout(props: any) {
  const { children } = props;

  return (
    <Box>
      <DocHead />
      <Header />
      {children}
      <Footer />
    </Box>
  );
}

export default AppLayout;
