import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import AnimWhenVisible from "../anim";
import { Center } from "../common/center";

type Props = {
  index?: number;
};
export function EcosystemSection(props: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        [theme.breakpoints.down("sm")]: {
          background: `url(${"assets/imgs/landing/background-intro.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left",
          padding: 4,
          height: "auto",
          overflow: "auto",
        },
      }}
      data-swiper-parallax="-300"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        sx={{
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
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
          <AnimWhenVisible variants={{ hidden: { opacity: 0, y: -100 } }} index={props.index}>
            <Typography variant="h3" whiteSpace="pre-line" id="es_header">{`Hệ sinh thái
          Lucis City`}</Typography>
          </AnimWhenVisible>

          <AnimWhenVisible variants={{ hidden: { opacity: 0, y: 100 } }} index={props.index}>
            <Typography
              whiteSpace="pre-line"
              id="es_content"
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
