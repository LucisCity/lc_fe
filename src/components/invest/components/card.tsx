import * as React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

const Icon = styled("img")(({ theme }) => ({
  marginRight: theme.spacing(3),
  width: 10,
}));
export const Card = () => {
  return (
    <MuiCard sx={{ maxWidth: 300, borderRadius: 4 }} elevation={3}>
      <CardActionArea>
        <CardMedia
          sx={{ borderRadius: 4 }}
          component="img"
          height="130"
          image="https://pyxis.nymag.com/v1/imgs/328/e2c/b53d1ba1965696d1175212c08bfb6a1fec-neverland-ranch-lede.rsocial.w1200.jpg"
          alt="green iguana"
        />
        <CardContent sx={{ p: 5 }}>
          <Typography variant="h3" mb={1}>
            Navaland Max
          </Typography>
          <Typography variant="caption" color="text.secondary">
            1901 Thornridge Cir. Shiloh, Hawaii 81063
          </Typography>
          <Box mt={5} mb={5}>
            <LinearProgress variant="determinate" value={30} />
          </Box>
          <Box>
            <Box display={"flex"} justifyContent={"space-between"} mb={3}>
              <Typography variant={"caption"}>
                <Icon src="/assets/imgs/invest/icons/dollar.svg" />
                Total raise
              </Typography>
              <Typography variant={"caption"}>$95,492.13</Typography>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} mb={3}>
              <Typography variant={"caption"}>
                <Icon src="/assets/imgs/invest/icons/total_supply.svg" />
                Total supply
              </Typography>
              <Typography variant={"caption"}>2M Tokens</Typography>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} mb={3}>
              <Typography variant={"caption"}>
                <Icon src="/assets/imgs/invest/icons/dollar_cirle.svg" />
                Accepted currency
              </Typography>
              <Typography variant={"caption"}>USDT</Typography>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"} mb={3}>
              <Typography variant={"caption"}>
                <Icon src="/assets/imgs/invest/icons/home.svg" />
                Underlying Asset
              </Typography>
              <Typography variant={"caption"}>Real Estate</Typography>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography variant={"caption"}>
                <Icon src="/assets/imgs/invest/icons/sale.svg" />
                Total expected return
              </Typography>
              <Typography variant={"caption"}>30%</Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
};
