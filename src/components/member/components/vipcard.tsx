import { Box, Card, CardContent, CardMedia, Typography, Skeleton, Tooltip } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ShareVipCardDialog from "./vipcard_qr_dialog";
import moment from "moment";
import QRReaderDialog from "./qr_reader_dialog";
import s from "./vipcard.module.scss";

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

export const VipCard = ({ infoCard }: { infoCard: any }) => {
  // console.log(`expiredAt ${expiredAt}`);
  if (!infoCard) return null;
  const { id, number, name, tier, expired_at: expiredAt } = infoCard; // eslint-disable-line
  const cardNumberFormatted = formatCardNumber(number);
  return (
    <Box mt={30} display="flex" flexDirection="column" alignItems={"center"} gap={2}>
      <Title className={s.title} src="/assets/imgs/landing/card_title.png" alt="galaxy card" />
      <Box sx={{ position: "relative" }}>
        <Tooltip title={"Card Info"}>
          <InfoOutlinedIcon className={s.infoIcon} sx={{ position: "absolute", color: "white", top: 30, right: -40 }} />
        </Tooltip>
        <Card
          className={s.vipCard}
          elevation={15}
          sx={{
            mt: 6,
            display: "flex",
            borderRadius: 4,
            background: "transparent",
            width: 375,
            aspectRatio: "375/242",
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
              {!infoCard ? (
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
                    className={s.cardNumber}
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
                    className={s.cardOwner}
                    sx={{
                      fontSize: 12,
                      fontWeight: 300,
                      position: "absolute",
                      bottom: 15,
                      left: 30,
                      textTransform: "capitalize",
                    }}
                  >
                    {name.toLowerCase()}
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
      </Box>
      <Box mt={10}>
        <ShareVipCardDialog cardId={id} />
        <QRReaderDialog />
      </Box>
      <Typography color={"#000"} sx={{ mt: 6 }}>
        Nội dung ngắn gọn ở đây
      </Typography>
    </Box>
  );
};
