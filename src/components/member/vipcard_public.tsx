import { useGetVipCardFromId } from "./hooks/use_vipcard";
import React from "react";
import ScrollPage from "../layout/scroll_page";
import { Box } from "@mui/system";
import { VipCard } from "./components/vipcard";
import { Container, Typography } from "@mui/material";
import { VipCardSkeleton } from "./components/vipcard_skeleton";
import Button from "@mui/material/Button";
import QRReaderDialog from "./components/qr_reader_dialog";

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
          height: "calc(100vh - (210px))",
        }}
      >
        {loading ? <VipCardSkeleton /> : <VipCard infoCard={data} />}
        <Box bgcolor={"rgba(44, 43, 45, 1)"} position={"absolute"} width={"100%"} bottom={0}>
          <Container>
            <Box
              display={"flex"}
              flexDirection={{ sm: "row", xs: "column" }}
              alignItems={"center"}
              gap={2}
              justifyContent={{ sm: "space-between", xs: "center" }}
              height={160}
            >
              <Box textAlign={{ xs: "center", sm: "left" }}>
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
        </Box>
      </Box>
    </ScrollPage>
  );
};
