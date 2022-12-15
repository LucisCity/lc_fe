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
export const Card = (props: IProps) => {
  const [state, setState] = React.useState(props?.isCollapseContent ?? true);

  return (
    <MuiCard sx={{ borderRadius: 4, position: "relative" }} elevation={1}>
      <Link href={`/invest/${props.name}`}>
        <CardActionArea component={"div"}>
          <CardMedia sx={{ borderRadius: 4 }} component="img" height="130" image={props.image} alt="green iguana" />
          <CardContent sx={{ p: 5, pb: 0 }}>
            <Typography variant="h3" mb={1}>
              {props.name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {props.address}
            </Typography>
            <Box mt={5} mb={5}>
              <LinearProgress variant="determinate" value={30} />
            </Box>

            <Collapse in={state}>
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
            </Collapse>
          </CardContent>
        </CardActionArea>
      </Link>
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
      <CardActions sx={{ p: 0, pb: 1 }}>
        <Box display={"flex"} justifyContent={"center"} width={"100%"}>
          <IconButton onClick={() => setState(!state)} size={"small"}>
            {state ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </Box>
      </CardActions>
    </MuiCard>
  );
};
