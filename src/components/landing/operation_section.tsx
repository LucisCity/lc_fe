import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import AnimWhenVisible from "../anim";
import { Center } from "../common/center";

export function OperationSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("sm")]: {
          height: "auto",
        },
      }}
      data-swiper-parallax="-300"
    >
      <Box
        sx={{
          maxWidth: "1440px",
          padding: "1px 144px",
          margin: "0px auto",
          [theme.breakpoints.down("lg")]: {
            padding: "1px 16px 16px 16px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 22.5,
            marginTop: 38,
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
              marginTop: 15,
              gap: 12,
            },
          }}
        >
          <AnimWhenVisible variants={{ hidden: { opacity: 0, y: -100 } }}>
            <Typography variant="h3" whiteSpace="pre-line">{`Basic operation
            of Lucis city`}</Typography>
            <Typography
              variant="h6"
              flex={1}
              // whiteSpace="pre-line"
            >
              Hệ sinh thái sáng tạo cung cấp quyền đồng sở hữu tài sản và tạo ra một thị trường đầu tư có giá trị cao.
              Hệ sinh thái của Lucis City được vận hành để đảm bảo lợi nhuân cho các Nhà đầu tư ở mọi danh mục đầu tư.
            </Typography>
          </AnimWhenVisible>
        </Box>
        <AnimWhenVisible variants={{ hidden: { opacity: 0, y: -100 } }}>
          <Center>
            <Box
              component="img"
              src="/assets/imgs/landing/img_operation.png"
              alt=""
              sx={{
                maxWidth: "100%",
                marginTop: 17,
              }}
            />
          </Center>
        </AnimWhenVisible>
      </Box>
    </Box>
  );
}
