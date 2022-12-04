import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import AnimWhenVisible from "../anim";
import { Center } from "../common/center";
import { headerHeight } from "../layout/header";

type Props = {
  index?: number;
  fullscreen?: boolean;
};

export function OperationSection(props: Props) {
  const theme = useTheme();

  return (
    <Box
      className={props.fullscreen ? "fullscreenPage" : undefined}
      sx={{
        "--page-padding-top": props.fullscreen ? `${headerHeight}px` : 0, // landing always on PC always has header 90px
        width: "100%",
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
      <Container sx={{ height: "100%" }}>
        <Box display={"flex"} height={"100%"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
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
              <Typography variant="h3" whiteSpace="pre-line">
                Vận hành <br /> của Lucis City
              </Typography>
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
                alt="lucis operation flow"
                mt={{ sm: 6, xs: 4 }}
                sx={{
                  maxWidth: "100%",
                  // marginTop: 25,
                }}
              />
            </Center>
          </AnimWhenVisible>
        </Box>
      </Container>
    </Box>
  );
}
