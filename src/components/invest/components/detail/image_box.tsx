import * as React from "react";
import Box from "@mui/material/Box";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";

export default function InvestImageBox() {
  return (
    <Gallery>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          mt: 4,
        }}
      >
        <Item
          original="/assets/imgs/invest/imgs/img_galaxy_demo1.png"
          thumbnail="/assets/imgs/invest/imgs/img_galaxy_demo1.png"
          width="564"
          height="434"
          alt="Photo of seashore by Folkert Gorter"
        >
          {({ ref, open }) => (
            <Box
              component="img"
              src="/assets/imgs/invest/imgs/img_galaxy_demo1.png"
              sx={{
                gridColumn: ["1", "1/span 2"],
                gridRow: ["1", "1/span 2"],
                width: "100%",
                height: "100%",
              }}
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="/assets/imgs/invest/imgs/img_galaxy_demo2.png"
          thumbnail="/assets/imgs/invest/imgs/img_galaxy_demo2.png"
          width="290"
          height="210"
          alt="Photo of seashore by Folkert Gorter"
        >
          {({ ref, open }) => (
            <Box
              component="img"
              src="/assets/imgs/invest/imgs/img_galaxy_demo2.png"
              sx={{
                width: "100%",
                height: "100%",
              }}
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="/assets/imgs/invest/imgs/img_galaxy_demo3.png"
          thumbnail="/assets/imgs/invest/imgs/img_galaxy_demo3.png"
          width="290"
          height="210"
          alt="Photo of seashore by Folkert Gorter"
        >
          {({ ref, open }) => (
            <Box
              component="img"
              src="/assets/imgs/invest/imgs/img_galaxy_demo3.png"
              sx={{
                width: "100%",
                height: "100%",
              }}
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="/assets/imgs/invest/imgs/img_galaxy_demo4.png"
          thumbnail="/assets/imgs/invest/imgs/img_galaxy_demo4.png"
          width="290"
          height="210"
          alt="Photo of seashore by Folkert Gorter"
        >
          {({ ref, open }) => (
            <Box
              component="img"
              src="/assets/imgs/invest/imgs/img_galaxy_demo4.png"
              sx={{
                width: "100%",
                height: "100%",
              }}
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
        <Item
          original="/assets/imgs/invest/imgs/img_galaxy_demo5.png"
          thumbnail="/assets/imgs/invest/imgs/img_galaxy_demo5.png"
          width="290"
          height="220"
          alt="Photo of seashore by Folkert Gorter"
        >
          {({ ref, open }) => (
            <Box
              component="img"
              src="/assets/imgs/invest/imgs/img_galaxy_demo5.png"
              sx={{
                width: "100%",
                height: "100%",
              }}
              ref={ref as React.MutableRefObject<HTMLImageElement>}
              onClick={open}
            />
          )}
        </Item>
      </Box>
    </Gallery>
  );

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
