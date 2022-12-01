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
        overflow: "hidden",
        [theme.breakpoints.down("sm")]: {
          background: `url(/assets/imgs/member/background.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left",
          padding: 4,
          height: "auto",
        },
      }}
      data-swiper-parallax="-300"
    >
      <Box
        sx={{
          maxWidth: "1440px",
          px: 36,
          paddingTop: 25,
          [theme.breakpoints.down("md")]: {
            px: 6,
            pt: 20,
            pb: 26,
          },
          height: "100%",
        }}
      >
        <AnimWhenVisible variants={{ hidden: { opacity: 0, x: -300 } }} index={props.index}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: ["flex-start", "flex-end"],
              justifyContent: "space-between",
              flexDirection: ["column", "row"],
            }}
          >
            <Typography variant="h3" whiteSpace="pre-line">{`Basic operation
            of Lucis city`}</Typography>
            <Typography
              variant="subtitle2"
              // whiteSpace="pre-line"
              sx={{
                ml: 6,
                maxWidth: "573px",
                [theme.breakpoints.down("md")]: {
                  ml: 0,
                  mt: 10,
                },
              }}
            >
              Hệ sinh thái sáng tạo cung cấp quyền đồng sở hữu tài sản và tạo ra một thị trường đầu tư có giá trị cao.
              Hệ sinh thái của Lucis City được vận hành để đảm bảo lợi nhuân cho các Nhà đầu tư ở mọi danh mục đầu tư.
            </Typography>
          </Box>
        </AnimWhenVisible>
        <AnimWhenVisible variants={{ hidden: { opacity: 0, x: 300 } }} index={props.index}>
          <Center>
            <Box
              component="img"
              src="/assets/imgs/landing/img_operation.svg"
              alt=""
              sx={{
                maxWidth: "100%",
                marginTop: 25,
              }}
            />
          </Center>
        </AnimWhenVisible>
      </Box>
    </Box>
  );
}
