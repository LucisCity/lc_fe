import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { useWindowSize } from "../../hooks/use_window_size";
import AnimWhenVisible from "../anim";
import { Center } from "../common/center";

type Props = {
  index?: number;
};
export function EcosystemSection(props: Props) {
  const theme = useTheme();
  const size = useWindowSize();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        // position: "relative",
        // background: "transparent",
        [theme.breakpoints.down("sm")]: {
          background: `url(${"assets/imgs/landing/background-intro.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left",
          padding: 6,
          height: "auto",
          // overflow: "auto",
        },
      }}
      data-swiper-parallax="-300"
    >
      {/* <Box
        component="img"
        src="/assets/imgs/landing/img_red.svg"
        sx={{
          position: "absolute",
          top: "20px",
          left: "0px",
        }}
      /> */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        sx={{
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            padding: "80px 0px",
          },
        }}
      >
        <Box
          component="img"
          src="/assets/imgs/landing/img_ecosystem.png"
          alt=""
          sx={{
            [theme.breakpoints.down("sm")]: {
              maxHeight: "250px",
            },
          }}
        />
        <Box
          sx={{
            marginLeft: 28,
            [theme.breakpoints.down("md")]: {
              marginLeft: 0,
              marginTop: 10,
            },
          }}
        >
          <AnimWhenVisible variants={{ hidden: { opacity: 0, x: 300, y: -300 } }} index={props.index}>
            <Typography variant="h3" whiteSpace="pre-line" id="es_header">{`Hệ sinh thái
          Lucis City`}</Typography>
          </AnimWhenVisible>

          <AnimWhenVisible
            variants={{ hidden: { opacity: 0, x: size.width > 768 ? -300 : 0, y: size.width > 768 ? 300 : 0 } }}
            index={props.index}
          >
            <Typography
              whiteSpace="pre-line"
              sx={{
                marginTop: 15,
                [theme.breakpoints.down("sm")]: {
                  marginTop: 10,
                },
              }}
            >
              {`Lucis City là hệ sinh thái số Bất Động sản
          và các ngành sản phẩm - dịch vụ giải trí
          cao cấp như: Du thuyền,
          Siêu xe, Lounge...`}
            </Typography>
          </AnimWhenVisible>
        </Box>
      </Box>
    </Box>
  );
}
