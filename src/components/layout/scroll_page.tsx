import React from "react";
import { Box } from "@mui/system";
import {BoxProps} from "@mui/system/Box/Box";

export default function ScrollPage(props: BoxProps) {
  const pt = props.pt ?? 10;

  return <Box className="scrollPage">
    <Box {...props} pt={pt}>

    </Box>
  </Box>
}
