import { Box, Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { styled } from "@mui/system";

const Title = styled("img")(({ theme }) => ({
  height: 25,
  [theme.breakpoints.down("sm")]: {
    height: 18,
  },
  [theme.breakpoints.down("md")]: {
    height: 20,
  },
}));

export const VipCard = () => {
  return (
    <Box mt={30} display="flex" flexDirection="column" alignItems={"center"} gap={2}>
      <Box>
        <Title src="/assets/imgs/landing/card_title.png" alt="galaxy card" />
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
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "72%",
            background: "linear-gradient(180deg, #343434 0%, #262527 77.98%)",
          }}
        >
          <Box component={"img"} src={"/assets/imgs/logo/logo-L.svg"} style={{ paddingRight: 5 }} />
          <CardContent sx={{ flex: "1 0 auto" }}></CardContent>
        </Box>
        <Box width={"28%"} sx={{ background: "rgba(89, 70, 255, 0.6)", backdropFilter: "blur(35.0324px)" }}>
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "100%" }}
            image="/assets/imgs/member/card-end.png"
            alt=""
          />
        </Box>
      </Card>
    </Box>
  );
};
