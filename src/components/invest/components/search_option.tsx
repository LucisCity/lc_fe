import * as React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Link from "next/link";

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
export const SearchOption = (props: IProps) => {
  return (
    <MuiCard sx={{ background: "transparent", width: "100%" }} elevation={0}>
      <Link href={`/invest/${props.name}`}>
        <CardContent sx={{ px: 4, py: 0, ":last-child": { pb: 0 } }}>
          <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} gap={3}>
            <Box display={"flex"}>
              <img
                src={
                  props.image
                    ? props.image
                    : "https://pyxis.nymag.com/v1/imgs/328/e2c/b53d1ba1965696d1175212c08bfb6a1fec-neverland-ranch-lede.rsocial.w1200.jpg"
                }
                alt="123"
                height={45}
                width={45}
              />
              <Box ml={4}>
                <Typography color={"#000"} variant={"h5"}>
                  {props.name ? props.name : "Navaland"}
                </Typography>
                <Typography
                  variant="caption"
                  color="#D9D9D9"
                  component={"p"}
                  sx={{
                    textOverflow: "c",
                  }}
                >
                  {props.address ? props.address : "1901 Thornridge Cir. Shiloh,\n" + "Hawaii 81063"}
                </Typography>
              </Box>
            </Box>
            <Typography color="#D9D9D9">${props.price ? props.price : 10000}</Typography>
          </Box>
        </CardContent>
      </Link>
    </MuiCard>
  );
};
