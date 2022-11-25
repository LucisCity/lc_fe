import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import AnimWhenVisible from "../anim";
import { Center } from "../common/center";

type Props = {
  index?: number;
};

export function OperationSection(props: Props) {
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
          background: `url(${"assets/imgs/landing/background-intro.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left",
          padding: 4,
          paddingTop: 6,
          paddingBottom: 6,
          height: "auto",
          display: "block",
          overflow: "auto",
        },
      }}
      data-swiper-parallax="-300"
    >
      <Box
        sx={{
          maxWidth: "1440px",
          padding: "1px 144px",
          paddingTop: 15,
          margin: "0px auto",
          [theme.breakpoints.down("lg")]: {
            padding: "1px 16px 16px 16px",
          },
          [theme.breakpoints.down("sm")]: {
            paddingTop: "1px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 22.5,
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
              gap: 12,
            },
          }}
        >
          <AnimWhenVisible variants={{ hidden: { opacity: 0, y: -100 } }} index={props.index}>
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
        <AnimWhenVisible variants={{ hidden: { opacity: 0, y: -100 } }} index={props.index}>
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
