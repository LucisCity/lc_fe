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
      <Box
        maxWidth="1440px"
        margin="0px auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
        sx={{
          px: "130px",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            px: "0px",
          },
        }}
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
            <Typography variant="h3" whiteSpace="pre-line">{`Hệ sinh thái
          Lucis City`}</Typography>
          </AnimWhenVisible>

          <AnimWhenVisible
            variants={{ hidden: { opacity: 0, x: size.width > 768 ? -300 : 0, y: size.width > 768 ? 300 : 0 } }}
            index={props.index}
          >
            <Typography
              whiteSpace="pre-line"
              variant="body1"
              sx={{
                maxWidth: "426px",
                mt: 8,
                mb: 26,
              }}
            >
              Nhà Đầu tư có cơ hội đầu tư trực tiếp các sản phẩm - dịch vụ thực của Hệ sinh thái Lucis City từ nhiều nền
              tảng khác nhau cũng như được trải nghiệm tất cả các tiện ích của hệ sinh thái. Lucis City xây dựng một
              mạng lưới nhà đầu tư có tiềm lực và cùng đam mê để tăng giá trị kết nối và xúc tiến thương mại hiệu quả.
            </Typography>
          </AnimWhenVisible>
        </Box>
      </Box>
    </Box>
  );
}
