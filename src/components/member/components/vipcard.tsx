import { Box, Card, CardContent, CardMedia, Typography, Button, Skeleton } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ShareVipCardDialog from "./vipcard_qr_dialog";
import { useVipCard } from "../hooks/use_vipcard";
import moment from "moment";
import QRReader from "./qr_reader";

const Title = styled("img")(({ theme }) => ({
  height: 25,
  [theme.breakpoints.down("sm")]: {
    height: 18,
  },
  [theme.breakpoints.down("md")]: {
    height: 20,
  },
}));

function formatCardNumber(number: string) {
  if (number) {
    [4, 9, 14].forEach((i) => {
      number = number.slice(0, i) + " " + number.slice(i);
    });
    return number;
  }
  return "---- ---- ---- ----";
}

export const VipCard = () => {
  const {
    loading,
    vipCard: { id, number, name, tier, expired_at: expiredAt }, // eslint-disable-line
  } = useVipCard();
  // console.log(`expiredAt ${expiredAt}`);
  const cardNumberFormatted = React.useMemo(() => formatCardNumber(number), [number]);
  return (
    <Box mt={30} display="flex" flexDirection="column" alignItems={"center"} gap={2}>
      <Box sx={{ position: "relative" }}>
        <Title src="/assets/imgs/landing/card_title.png" alt="galaxy card" />
        <InfoOutlinedIcon sx={{ position: "absolute", color: "white", top: 70, right: -5 }} />
      </Box>
      <Card
        elevation={15}
        sx={{
          mt: 6,
          display: "flex",
          borderRadius: 4,
          background: "transparent",
          width: 375,
          height: 242,
          color: "#fff",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "72%",
            background: "linear-gradient(180deg, #343434 0%, #262527 77.98%)",
            position: "relative",
          }}
        >
          <Box
            component={"img"}
            src={"/assets/imgs/member/logo-white.svg"}
            top={28}
            left={28}
            width={40}
            sx={{ position: "absolute" }}
          />
          <Box
            component={"img"}
            src={"/assets/imgs/member/logo-black.svg"}
            p={2}
            pt={5}
            sx={{ position: "absolute" }}
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            {loading ? (
              <>
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: 21,
                    fontWeight: 500,
                    position: "absolute",
                    bottom: 40,
                    left: 30,
                  }}
                />
                <Skeleton
                  variant="text"
                  sx={{
                    fontSize: 12,
                    fontWeight: 300,
                    position: "absolute",
                    bottom: 15,
                    left: 30,
                  }}
                />
              </>
            ) : (
              <>
                <Typography
                  sx={{
                    fontSize: 21,
                    fontWeight: 500,
                    position: "absolute",
                    bottom: 40,
                    left: 30,
                  }}
                >
                  {cardNumberFormatted}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 300,
                    position: "absolute",
                    bottom: 15,
                    left: 30,
                    textTransform: "capitalize",
                  }}
                >
                  {name}
                </Typography>
              </>
            )}
          </CardContent>
        </Box>
        <Box
          width={"28%"}
          sx={{
            background: "rgba(89, 70, 255, 0.6)",
            backdropFilter: "blur(35.0324px)",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "100%", position: "absolute", zIndex: -1 }}
            image="/assets/imgs/member/card-end.png"
            alt="vip card"
          />
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 300,
              lineHeight: 1.5,
              mx: 10,
              mt: 5.5,
              textTransform: "capitalize",
            }}
          >
            {tier?.replaceAll("_", " ").toLowerCase()}
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: 47,
              mt: 18,
              position: "absolute",
              justifyContent: "space-between",
            }}
          >
            <Typography fontSize={12} fontWeight={500}>
              Card
            </Typography>
            <Box component={"img"} src={"/assets/imgs/member/wifi.svg"} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "absolute",
              bottom: 15,
            }}
          >
            <Typography fontSize={12}>VALID THRU</Typography>
            <Typography fontSize={19} fontWeight={500} letterSpacing={1.5}>
              {expiredAt ? moment(expiredAt).format("MM/YY") : "--/--"}
            </Typography>
          </Box>
        </Box>
      </Card>
      <Box mt={10}>
        <ShareVipCardDialog />
        <QRReader />
      </Box>
      <Typography color={"#000"} sx={{ mt: 6 }}>
        Nội dung ngắn gọn ở đây
      </Typography>
    </Box>
  );
};
