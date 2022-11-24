import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import AnimWhenVisible from "../anim";

export function ReasonChooseSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
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
        }}
      >
        <Grid container spacing={6}>
          <Grid md={0} lg={3}></Grid>
          <Grid md={12} lg={9}>
            <AnimWhenVisible variants={{ hidden: { opacity: 0, y: -100 } }}>
              <Typography
                variant="h3"
                whiteSpace="pre-line"
                sx={{
                  marginTop: 39,
                  [theme.breakpoints.down("lg")]: {
                    marginTop: 8,
                  },
                }}
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
            <AnimWhenVisible variants={{ hidden: { opacity: 0, y: -100 } }} style={{ height: "100%" }}>
              <ReasonBox title="MarketPlace" content="Cho phép Nhà đầu tư giao dịch trong nhiều nền tảng khác nhau." />
            </AnimWhenVisible>
          </Grid>
          <Grid md={6} lg={3}>
            <AnimWhenVisible variants={{ hidden: { opacity: 0, y: -100 } }} style={{ height: "100%" }}>
              <ReasonBox
                title="Quản lý đầu tư"
                content={
                  "Cung cấp số liệu phân tích thị trường BSĐ, giúp Nhà đầu tư quản trị và chiến lược đầu tư rõ ràng."
                }
                icon="/temp/ic_invest.svg"
              />
            </AnimWhenVisible>
          </Grid>
          <Grid md={6} lg={3}>
            <AnimWhenVisible variants={{ hidden: { opacity: 0, y: -100 } }} style={{ height: "100%" }}>
              <ReasonBox
                title="Đa dạng hóa"
                content={
                  "Bạn có thể đầu tư nhiều sản phẩm - dịch vụ khác nhau trong Hệ sinh thái không chỉ Bất Động sản."
                }
                icon="/temp/ic_multi.svg"
              />
            </AnimWhenVisible>
          </Grid>
          <Grid md={6} lg={3}>
            <AnimWhenVisible variants={{ hidden: { opacity: 0, y: -100 } }} style={{ height: "100%" }}>
              <ReasonBox
                title="Được đảm bảo"
                content={"Tài sản được lựa chọn từ các thành viên trong Cộng đồng Nhà Đầu tư Lucis City."}
                icon="/temp/ic_guaranteed.svg"
              />
            </AnimWhenVisible>
          </Grid>
          <Grid md={6} lg={3}>
            <AnimWhenVisible variants={{ hidden: { opacity: 0, y: -100 } }} style={{ height: "100%" }}>
              <ReasonBox
                title="Kiếm lợi nhuận"
                content={
                  "Lợi nhuận được chia sẻ cho các nhà đầu tư từ việc kinh doanh và vận hành các dịch vụ tiện ích trong Hệ sinh thái.."
                }
                icon="/temp/ic_profit.svg"
              />
            </AnimWhenVisible>
          </Grid>
          <Grid md={6} lg={3}>
            <AnimWhenVisible variants={{ hidden: { opacity: 0, y: -100 } }} style={{ height: "100%" }}>
              <ReasonBox
                title="Đẳng cấp"
                content="Lựa chọn các Nhà đầu tư có cùng phân khúc theo sản phẩm của Hệ sinh thái"
                icon="/temp/ic_invest.svg"
              />
            </AnimWhenVisible>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

type Props = {
  title: string;
  content: string;
  icon?: string;
};
function ReasonBox({ title, content, icon }: Props) {
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
        <img src={icon ?? "/temp/ic_marketplace.svg"} alt="" />
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
