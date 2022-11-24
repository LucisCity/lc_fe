import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import AnimWhenVisible from "../anim";

export function EcosystemSection() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        padding: 4,
      }}
      data-swiper-parallax="-300"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        marginTop={32}
        sx={{
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            marginTop: 1,
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
              marginTop: 7,
            },
          }}
        >
          <AnimWhenVisible variants={{ hidden: { opacity: 0, y: -100 } }}>
            <Typography variant="h3" whiteSpace="pre-line" id="es_header">{`Hệ sinh thái
          Lucis City`}</Typography>
          </AnimWhenVisible>

          <AnimWhenVisible variants={{ hidden: { opacity: 0, y: 100 } }}>
            <Typography whiteSpace="pre-line" id="es_content" marginTop={15}>
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
