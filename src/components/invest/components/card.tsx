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

const Icon = styled("img")(({ theme }) => ({
  marginRight: theme.spacing(3),
  width: 10,
}));

interface IProps {
  isCollapseContent?: boolean;
}
export const Card = (props: IProps) => {
  const [state, setState] = React.useState(props?.isCollapseContent ?? true);

  return (
    <MuiCard sx={{ maxWidth: 300, borderRadius: 4, background: "#F2F2F2" }} elevation={3}>
      <CardActionArea>
        <CardMedia
          sx={{ borderRadius: 4 }}
          component="img"
          height="130"
          image="https://pyxis.nymag.com/v1/imgs/328/e2c/b53d1ba1965696d1175212c08bfb6a1fec-neverland-ranch-lede.rsocial.w1200.jpg"
          alt="green iguana"
        />
        <CardContent sx={{ p: 5, pb: 0 }}>
          <Typography variant="h3" mb={1}>
            Navaland Max
          </Typography>
          <Typography variant="caption" color="text.secondary">
            1901 Thornridge Cir. Shiloh, Hawaii 81063
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
          </Collapse>
        </CardContent>
      </CardActionArea>
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
