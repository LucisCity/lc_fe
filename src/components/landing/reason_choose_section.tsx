import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import AnimWhenVisible from "../anim";
import { Center } from "../common/center";

type Props = {
  index?: number;
};

export function ReasonChooseSection(props: Props) {
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
        sx={{
          maxWidth: "1440px",
          padding: "1px 144px",
          // [theme.breakpoints.down("xl")]: {
          //   padding: "1px 32px",
          // },
          [theme.breakpoints.down("lg")]: {
            padding: "1px 16px 16px 16px",
          },
          height: "100%",
        }}
      >
        <Center>
          <Grid container spacing={6}>
            <Grid md={0} lg={3}></Grid>
            <Grid md={12} lg={9}>
              <AnimWhenVisible variants={{ hidden: { opacity: 0, y: -100 } }} index={props.index}>
                <Typography
                  variant="h3"
                  whiteSpace="pre-line"
                  // sx={{
                  //   marginTop: 32,
                  //   [theme.breakpoints.down("lg")]: {
                  //     marginTop: 8,
                  //   },
                  // }}
                >{`Why you should
          choose?`}</Typography>
              </AnimWhenVisible>
            </Grid>
            <Grid
              lg={6}
              sx={{
                [theme.breakpoints.down("lg")]: {
                  display: "none",
                },
              }}
            ></Grid>
            <Grid md={6} lg={3}>
              <AnimWhenVisible
                variants={{ hidden: { opacity: 0, y: -100 } }}
                style={{ height: "100%" }}
                index={props.index}
              >
                <ReasonBox
                  title="MarketPlace"
                  content="Cho phép Nhà đầu tư giao dịch trong nhiều nền tảng khác nhau."
                />
              </AnimWhenVisible>
            </Grid>
            <Grid md={6} lg={3}>
              <AnimWhenVisible
                variants={{ hidden: { opacity: 0, y: -100 } }}
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
            <Grid md={6} lg={3}>
              <AnimWhenVisible
                variants={{ hidden: { opacity: 0, y: -100 } }}
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
            <Grid md={6} lg={3}>
              <AnimWhenVisible
                variants={{ hidden: { opacity: 0, y: -100 } }}
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
            <Grid md={6} lg={3}>
              <AnimWhenVisible
                variants={{ hidden: { opacity: 0, y: -100 } }}
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
            <Grid md={6} lg={3}>
              <AnimWhenVisible
                variants={{ hidden: { opacity: 0, y: -100 } }}
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
      </Box>
    </Box>
  );
}

function ReasonBox({ title, content, icon }: { title: string; content: string; icon?: string }) {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(223, 231, 253, 0.7)",
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
        <img src={icon ?? "/assets/imgs/landing/ic_marketplace.svg"} alt="" />
        <Typography variant="h5" whiteSpace="pre-line" marginLeft={3}>
          {title}
        </Typography>
      </Box>
      <Typography variant="body1" marginTop={7}>
        {content}
      </Typography>
    </Box>
  );
}
