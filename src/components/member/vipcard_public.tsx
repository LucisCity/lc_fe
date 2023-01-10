import { useGetVipCardFromId } from "./hooks/use_vipcard";
import React from "react";
import ScrollPage from "../layout/scroll_page";
import { Box } from "@mui/system";
import { VipCard } from "./components/vipcard";
import { CardSection } from "../landing/card_section";
import { Avatar, Container, Grid, Paper, Typography } from "@mui/material";
import { VipCardSkeleton } from "./components/vipcard_skeleton";
import Button from "@mui/material/Button";
import { TopVipMember } from "./components/top_vip_member";

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

export const VipCardPublic = () => {
  const { data, loading } = useGetVipCardFromId();
  return (
    <ScrollPage pt={0}>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: -1,
          background: `url("/assets/imgs/background/6.jpg")`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      />
      <Box
        sx={{
          height: "100vh",
        }}
      >
        {loading ? <VipCardSkeleton /> : <VipCard infoCard={data} />}
        <Box bgcolor={"rgba(44, 43, 45, 1)"} position={"absolute"} width={"100%"} bottom={0}>
          <Container>
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} height={160}>
              <Box>
                <Typography variant={"h2"} color={"#fff"}>
                  Tư vấn V.I.P
                </Typography>
                <Typography variant={"caption"} color={"#fff"}>
                  Thông báo đến Lucis và nhận hỗ trợ trực tiếp ngay lập tức từ chúng tôi
                </Typography>
              </Box>
              <Button
                sx={{
                  background: "linear-gradient(90deg, #EAAE19 0%, #FFF98E 79%, #FFF280 100%);",
                  color: "#2C2B2D",
                  "&:hover": {
                    background: "linear-gradient(90deg, #EAAE19 0%, #FFF98E 79%, #FFF280 100%);",
                  },
                }}
                variant={"contained"}
                endIcon={<img src="/assets/imgs/member/24-support.svg" alt="24-support" />}
              >
                Yêu cầu hỗ trợ
              </Button>
            </Box>
          </Container>
          <TopVipMember />
        </Box>
      </Box>
    </ScrollPage>
  );
};
