import * as React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const Icon = styled("img")(({ theme }) => ({
  marginRight: theme.spacing(3),
  width: 10,
  height: 10,
}));

interface IProps {
  name?: string;
  address?: string;
  price?: string;
  image?: string;
}
export const CardInMap = (props: IProps) => {
  return (
    <MuiCard sx={{ background: "transparent" }} elevation={0}>
      <CardContent sx={{ p: 1, paddingBottom: "12px !important" }}>
        <Box display={"flex"} gap={3}>
          <img
            src={
              props.image
                ? props.image
                : "https://pyxis.nymag.com/v1/imgs/328/e2c/b53d1ba1965696d1175212c08bfb6a1fec-neverland-ranch-lede.rsocial.w1200.jpg"
            }
            alt="123"
            height={"auto"}
            width={90}
          />
          <Box>
            <Typography color={"#000"}>{props.name ? props.name : "Navaland"}</Typography>
            <Typography color={"#000"}>${props.price ? props.price : 10000}</Typography>
            <Typography variant="caption" color="text.secondary">
              {props.address ? props.address : "1901 Thornridge Cir. Shiloh,\n" + "Hawaii 81063"}
            </Typography>
            {/*<Box mt={1} mb={1}>*/}
            {/*  <LinearProgress variant="determinate" value={30} />*/}
            {/*</Box>*/}

            <Box display={"flex"} justifyContent={"space-between"} mb={1}>
              <Typography variant={"caption"}>
                <Icon src="/assets/imgs/invest/icons/dollar.svg" />
                Total raise
              </Typography>
              <Typography variant={"caption"}>$95,492.13</Typography>
            </Box>
            <Box display={"flex"} justifyContent={"space-between"}>
              <Typography variant={"caption"}>
                <Icon src="/assets/imgs/invest/icons/total_supply.svg" />
                Total supply
              </Typography>
              <Typography variant={"caption"}>2M Tokens</Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </MuiCard>
  );
};
