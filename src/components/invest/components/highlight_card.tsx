import * as React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Collapse, IconButton, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Button from "@mui/material/Button";
import Link from "next/link";
import Grid from "@mui/material/Grid";

const Icon = styled("img")(({ theme }) => ({
  marginRight: theme.spacing(3),
  width: 10,
  height: 10,
}));

const ImageContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  position: "absolute",
  top: 0,
  padding: theme.spacing(3),
  width: "100%",
}));

interface IProps {
  isCollapseContent?: boolean;
  name?: string;
  address?: string;
  price?: string;
  image?: string;
}
export const HighlightCard = (props: IProps) => {
  return (
    <MuiCard sx={{ borderRadius: 4 }} elevation={3}>
      <Link href={`/invest/${props.name}`}>
        <CardActionArea component={"div"}>
          <Grid container sx={{ p: 6 }} spacing={6}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ position: "relative", height: "100%" }}>
                <CardMedia
                  sx={{ borderRadius: 4 }}
                  component="img"
                  height="100%"
                  image={props.image}
                  alt="green iguana"
                />
                <ImageContent>
                  <Button
                    variant="contained"
                    color={"secondary"}
                    sx={(theme) => ({
                      background: "rgba(71, 204, 233, 0.8)",
                      color: "#fff",
                      width: 80,
                      height: 40,
                      padding: `${theme.spacing(2)} ${theme.spacing(3)}`,

                      ":hover": {
                        background: "rgba(71, 204, 233, 0.8)",
                      },
                    })}
                  >
                    <Typography whiteSpace={"nowrap"}>Sắp bán</Typography>
                  </Button>
                  <Button
                    variant="contained"
                    color={"secondary"}
                    sx={(theme) => ({
                      color: "#FF6C6C",
                      width: 80,
                      height: 40,
                      padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
                    })}
                    endIcon={<Box component="img" src="/assets/imgs/invest/icons/ic_favorit.svg" alt="" />}
                  >
                    235
                  </Button>
                </ImageContent>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardContent sx={{ p: 0, ":last-child": { pb: 0 } }}>
                <Typography variant="h3" mb={1}>
                  {props.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {props.address}
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
                    <Typography variant={"caption"}>${props.price}</Typography>
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
            </Grid>
          </Grid>
        </CardActionArea>
      </Link>
    </MuiCard>
  );
};
