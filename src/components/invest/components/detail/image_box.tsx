import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

export default function InvestImageBox() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 1,
        mt: 4,
      }}
    >
      <Box
        component="img"
        src="/assets/imgs/invest/imgs/img_galaxy_demo1.png"
        sx={{
          gridColumn: ["1", "1/span 2"],
          gridRow: ["1", "1/span 2"],
          width: "100%",
          height: "100%",
        }}
      />
      <Box component="img" src="/assets/imgs/invest/imgs/img_galaxy_demo2.png" sx={{ width: "100%", height: "100%" }} />
      <Box component="img" src="/assets/imgs/invest/imgs/img_galaxy_demo3.png" sx={{ width: "100%", height: "100%" }} />
      <Box component="img" src="/assets/imgs/invest/imgs/img_galaxy_demo4.png" sx={{ width: "100%", height: "100%" }} />
      <Box component="img" src="/assets/imgs/invest/imgs/img_galaxy_demo5.png" sx={{ width: "100%", height: "100%" }} />
    </Box>
  );
}
