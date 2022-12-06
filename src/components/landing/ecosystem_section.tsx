import { Box, Container, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { useWindowSize } from "../../hooks/use_window_size";
import AnimWhenVisible from "../anim";
import { headerHeight } from "../layout/header";
import { styled } from "@mui/system";

type Props = {
  index?: number;
  fullscreen?: boolean;
};

const Item = styled(Box)(({ theme }) => ({
  display: "flex",
  img: {
    marginRight: theme.spacing(3),
    alignSelf: "flex-start",
    display: "flex",
    paddingTop: theme.spacing(1),
  },
  [theme.breakpoints.down("md")]: {
    // fontSize: 14,
    // height: 62,
  },
}));
export function EcosystemSection(props: Props) {
  const theme = useTheme();
  const size = useWindowSize();

  return (
    <Box
      className={props.fullscreen ? "fullscreenPage" : undefined}
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        "--page-padding-top": props.fullscreen ? `${headerHeight}px` : 0, // landing always on PC always has header 90px
        [theme.breakpoints.down("sm")]: {
          background: `url(/assets/imgs/member/background.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left",
          padding: 6,
          height: "auto",
        },
      }}
      data-swiper-parallax="-300"
    >
      <Container sx={{ height: "100%", padding: "30px 0" }}>
        <Box
          justifyContent={"center"}
          display={"flex"}
          flexDirection={["column", "row"]}
          alignItems={"center"}
          height={"100%"}
        >
          <Box
            component="img"
            src="/assets/imgs/landing/img_ecosystem.svg"
            alt=""
            sx={{
              [theme.breakpoints.down("sm")]: {
                maxHeight: "85vw",
                marginTop: 20,
              },
            }}
          />
          <Box
            sx={{
              marginLeft: 28,
              [theme.breakpoints.down("md")]: {
                marginLeft: 0,
                marginTop: 13,
              },
            }}
          >
            <AnimWhenVisible variants={{ hidden: { opacity: 0, x: 300, y: -300 } }} index={props.index}>
              <Typography variant="h2" textTransform={"uppercase"}>{`Hệ sinh thái Lucis City`}</Typography>
            </AnimWhenVisible>

            <AnimWhenVisible
              variants={{ hidden: { opacity: 0, x: size.width > 768 ? -300 : 0, y: size.width > 768 ? 300 : 0 } }}
              index={props.index}
            >
              <Typography
                whiteSpace="pre-line"
                sx={{
                  maxWidth: "426px",
                  mt: 8,
                  mb: 26,
                }}
              >
                <Stack spacing={3}>
                  <Item>
                    <img src="/assets/imgs/landing/check-icon.svg" alt="check-icon" />
                    Lucis City là hệ sinh thái số hóa Bất Động sản và các tài sản giá trị khác bao gồm: Động sản và Tài
                    sản vô hình...
                  </Item>

                  <Item>
                    <img src="/assets/imgs/landing/check-icon.svg" alt="check-icon" />
                    Tại Lucis City, các Nhà Đầu tư có cơ hội đầu tư trực tiếp các sản phẩm - dịch vụ thực của Hệ sinh
                    thái từ nhiều nền tảng khác nhau cũng như được trải nghiệm tất cả các tiện ích của hệ sinh thái.
                  </Item>

                  <Item>
                    <img src="/assets/imgs/landing/check-icon.svg" alt="check-icon" />
                    Lucis City xây dựng một mạng lưới nhà đầu tư có tiềm lực và cùng đam mê để tăng giá trị kết nối và
                    xúc tiến thương mại hiệu quả.
                  </Item>
                </Stack>
              </Typography>
            </AnimWhenVisible>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
