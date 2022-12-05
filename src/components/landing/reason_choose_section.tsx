import { Box, Container, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { useWindowSize } from "../../hooks/use_window_size";
import AnimWhenVisible from "../anim";
import { Center } from "../common/center";
import { headerHeight } from "../layout/header";

type Props = {
  index?: number;
  fullscreen?: boolean;
};

export function ReasonChooseSection(props: Props) {
  const theme = useTheme();
  const size = useWindowSize();

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
          // overflow: "auto",
        },
      }}
      data-swiper-parallax="-300"
    >
      <Container sx={{ height: "100%", padding: "50px 0" }}>
        <Center>
          <Grid container spacing={4}>
            <Grid xs={12} lg={6}>
              <AnimWhenVisible
                variants={{ hidden: { opacity: 0, x: size.width > 768 ? -300 : 0, y: size.width > 768 ? -300 : 0 } }}
                index={props.index}
              >
                <Typography variant="h3" whiteSpace="pre-line">{`Lựa chọn 
                Lucis City....`}</Typography>
              </AnimWhenVisible>
            </Grid>

            <Grid md={6} xs={12} lg={3}>
              <AnimWhenVisible
                variants={{ hidden: { opacity: 0, x: 300 } }}
                style={{ height: "100%" }}
                index={props.index}
              >
                <ReasonBox
                  title="MarketPlace"
                  content="Cho phép Nhà đầu tư giao dịch trong nhiều nền tảng khác nhau."
                />
              </AnimWhenVisible>
            </Grid>
            <Grid md={6} xs={12} lg={3}>
              <AnimWhenVisible
                variants={{ hidden: { opacity: 0, x: 300 } }}
                style={{ height: "100%" }}
                index={props.index}
              >
                <ReasonBox
                  title="Quản lý đầu tư"
                  content={
                    "Cung cấp số liệu phân tích thị trường BSĐ, giúp Nhà đầu tư quản trị và chiến lược đầu tư rõ ràng."
                  }
                  icon="/assets/imgs/landing/ic_invest.svg"
                />
              </AnimWhenVisible>
            </Grid>
            <Grid md={6} xs={12} lg={3}>
              <AnimWhenVisible
                variants={{ hidden: { opacity: 0, x: -300 } }}
                style={{ height: "100%" }}
                index={props.index}
              >
                <ReasonBox
                  title="Đa dạng hóa"
                  content={
                    "Bạn có thể đầu tư nhiều sản phẩm - dịch vụ khác nhau trong Hệ sinh thái không chỉ Bất Động sản."
                  }
                  icon="/assets/imgs/landing/ic_multi.svg"
                />
              </AnimWhenVisible>
            </Grid>
            <Grid md={6} xs={12} lg={3}>
              <AnimWhenVisible
                variants={{ hidden: { opacity: 0, x: -300 } }}
                style={{ height: "100%" }}
                index={props.index}
              >
                <ReasonBox
                  title="Được đảm bảo"
                  content={"Tài sản được lựa chọn từ các thành viên trong Cộng đồng Nhà Đầu tư Lucis City."}
                  icon="/assets/imgs/landing/ic_guaranteed.svg"
                />
              </AnimWhenVisible>
            </Grid>
            <Grid md={6} xs={12} lg={3}>
              <AnimWhenVisible
                variants={{ hidden: { opacity: 0, x: 300 } }}
                style={{ height: "100%" }}
                index={props.index}
              >
                <ReasonBox
                  title="Kiếm lợi nhuận"
                  content={
                    "Lợi nhuận được chia sẻ cho các nhà đầu tư từ việc kinh doanh và vận hành các dịch vụ tiện ích trong Hệ sinh thái.."
                  }
                  icon="/assets/imgs/landing/ic_profit.svg"
                />
              </AnimWhenVisible>
            </Grid>
            <Grid md={6} xs={12} lg={3}>
              <AnimWhenVisible
                variants={{ hidden: { opacity: 0, x: 300 } }}
                style={{ height: "100%" }}
                index={props.index}
              >
                <ReasonBox
                  title="Đẳng cấp"
                  content="Lựa chọn các Nhà đầu tư có cùng phân khúc theo sản phẩm của Hệ sinh thái"
                  icon="/assets/imgs/landing/ic_invest.svg"
                />
              </AnimWhenVisible>
            </Grid>
          </Grid>
        </Center>
      </Container>
    </Box>
  );
}

function ReasonBox({ title, content, icon }: { title: string; content: string; icon?: string }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        backdropFilter: "blur(15px)",
        borderRadius: "8px",
        padding: 4.5,
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={icon ?? "/assets/imgs/landing/ic_marketplace.svg"} />
        <Typography variant="h5" whiteSpace="pre-line" marginLeft={3}>
          {title}
        </Typography>
      </Box>
      <Typography
        variant="body1"
        sx={{
          mt: 4,
          [theme.breakpoints.down("sm")]: {
            mt: 2,
          },
        }}
      >
        {content}
      </Typography>
    </Box>
  );
}
