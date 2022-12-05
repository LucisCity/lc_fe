import React from "react";
import { Box, styled } from "@mui/system";
import { CardSection } from "../landing/card_section";
import { Avatar, Container, Grid, Paper, Typography } from "@mui/material";
import { Background } from "../landing/components/background";

const data = [
  {
    content: "Chiết khấu giao dịch khi sử dụng tiện ích trong Hệ sinh thái",
    value: "?%",
  },
  {
    content: "Ưu tiên gia nhập Hệ sinh thái",
    value: "1st",
  },
  {
    content: "Hỗ trợ pháp lý",
    value: "Có",
  },
  {
    content: "Truy cập báo cáo",
    value: "Có",
  },
  {
    content: "Truy cập hệ sinh thái",
    value: "Có",
  },
  {
    content: "Truy cập thông tin",
    value: "Đầy đủ",
  },
  {
    content: "Nhận lãi hàng năm",
    value: "Có",
  },
  {
    content: "Tham gia Sự kiện Private với Cộng đồng Nhà Đầu tư",
    value: "Có",
  },
  {
    content: "Hạn khóa",
    value: "Không",
  },
];

const tutorialStepData = [
  {
    title: "Đăng ký nhận thông tin",
    content:
      "Lucis City cung cấp form đăng ký nhận thông tin cho các Nhà Đầu tư. " +
      "Bạn sẽ được liên hệ trực tiếp để tư vấn về cách thức tham gia" +
      " cộng đồng và các tiện ích tại Hệ sinh thái Lucis City.",
  },
  {
    title: "Định danh Nhà Đầu tư",
    content:
      "Khi Nhà Đầu tư đồng ý với các Điều khoản và Cam kết từ Lucis City." +
      " Nhà Đầu tư thực hiện thanh toán phí mua thẻ," +
      " khi đó Nhà đầu tư sẽ được định danh trên Cộng đồng Nhà Đầu tư của chúng tôi.",
  },
  {
    title: "Tích hợp thông tin thẻ",
    content:
      "Các thông tin của Nhà Đầu tư được Lucic City tích" +
      " hợp vào hệ thống tiện ích đảm bảo việc tham gia trải nghiệm của Nhà Đầu tư." +
      " Thẻ vật lý được gửi trực tiếp tới Nhà Đầu tư theo địa chỉ mà khách hàng cung cấp Nắm giữ Galaxy Platium," +
      " Dịch vụ - Sản phẩm của Nhà Đầu tư có thể gia nhập Hệ sinh thái của Lucis City.",
  },
  {
    title: "Trải nghiệm - Tối ưu lợi nhuận",
    content:
      "Nhà Đầu tư tự do trải nghiệm và hưởng lợi nhuận từ việc vận hành và kinh doanh các tài sản trong Hệ sinh thái.",
  },
];

const TutorialStepComponent = () => {
  return (
    <>
      {tutorialStepData.map((item, index) => (
        <React.Fragment key={item.title}>
          <Grid item xs={12} sm={6} lg={3} height={"inherit"}>
            <Box component={Paper} elevation={0} borderRadius={4} p={8} height={"100%"}>
              <Box>
                <Avatar sx={{ bgcolor: "rgba(101, 85, 238, 1)" }}>{index + 1}</Avatar>
              </Box>
              <Typography sx={{ fontWeight: 600, fontSize: 20 }} mb={10} mt={4}>
                {item.title}
              </Typography>
              <Typography>{item.content}</Typography>
            </Box>
          </Grid>
        </React.Fragment>
      ))}
    </>
  );
};

const DataItem = () => {
  return (
    <>
      {data.map((item) => (
        <React.Fragment key={item.content}>
          <Grid item xs={8} md={7} lg={6}>
            <Box
              component={Paper}
              bgcolor={"rgba(255, 255, 255, 0.5)"}
              sx={{ backdropFilter: "blur(15px)" }}
              elevation={0}
              p={5}
            >
              <Typography fontSize={{ xs: 14, sm: 16 }}>{item.content}</Typography>
            </Box>
          </Grid>
          <Grid item xs={4} md={5} lg={6}>
            <Box
              component={Paper}
              bgcolor={"rgba(255, 255, 255, 0.5)"}
              sx={{ backdropFilter: "blur(15px)" }}
              elevation={0}
              p={5}
              textAlign={"center"}
              height="100%"
            >
              <Typography fontSize={{ xs: 14, sm: 16 }} component={"strong"} fontWeight={700}>
                {item.value}
              </Typography>
            </Box>
          </Grid>
        </React.Fragment>
      ))}
    </>
  );
};
export const MemberPage = () => {
  return (
    <>
      <Background
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: -1,
        }}
      />
      <CardSection disabledBackground={true} disabledReadmoreButton={true} />
      <Box pb={10} position={"relative"}>
        <Container>
          <Box
            borderRadius={4}
            pt={10}
            pb={10}
            pl={{ xs: 5, sm: 10, md: 18, lg: 22 }}
            pr={{ xs: 5, sm: 10, md: 18, lg: 22 }}
            border={"1px solid #fff"}
            sx={{
              background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
              backdropFilter: "blur(16px)",
            }}
            zIndex={2}
            position={"relative"}
          >
            <Typography
              variant={"h1"}
              mb={8}
              sx={{
                display: "flex",
                fontWeight: 600,
                textTransform: "uppercase",
                fontSize: 20,
                justifyContent: "center",
              }}
            >
              QUYỀN LỢI NHÀ ĐẦU TƯ
            </Typography>
            <Box>
              <Grid container spacing={1}>
                <DataItem />
              </Grid>
            </Box>
          </Box>
        </Container>
        {/* <Box
          sx={{
            width: 256,
            height: 256,
            background: "linear-gradient(316.44deg, #6555EE 16.28%, #ECD34F 88.6%)",
            borderRadius: "50%",
            filter: "blur(6px)",
            position: "absolute",
            right: { lg: 200, xs: 0 },
            top: -100,
            zIndex: 1,
          }}
        /> */}
      </Box>
      <Box
        bgcolor={"rgba(101, 85, 238, 1)"}
        sx={{
          backgroundImage: `url("/assets/imgs/landing/line_background.svg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
        }}
      >
        <Container>
          <Box pt={20} pb={20}>
            <Typography
              variant={"h1"}
              sx={{
                display: "flex",
                fontWeight: 700,
                textTransform: "uppercase",
                fontSize: 32,
                justifyContent: "flex-start",
                color: "#fff",
              }}
            >
              Hướng dẫn mua <br /> thẻ thành viên
            </Typography>
            <Box pt={12}>
              <Grid container spacing={5} height={"auto"}>
                <TutorialStepComponent />
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
