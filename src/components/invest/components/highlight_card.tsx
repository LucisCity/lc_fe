import * as React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Collapse, IconButton, LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import { ProjectGql } from "../../../gql/graphql";
import { formatCurrency } from "../../../utils/number.util";
import { slugify } from "../../../utils/string.util";
import { calculateProjectStatus, ProjectStatus } from "../../profile/investment/components/project_card";

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
  data: ProjectGql;
}
export const HighlightCard = (props: IProps) => {
  const {
    ended,
    start_time_vote_sell: startVotingAt,
    open_sale_at: openSaleAt,
    take_profit_at: takeProfitAt,
    profit_period: profitPeriod,
  } = props.data;
  const salePeriod = React.useMemo(
    () => calculateProjectStatus(props.data),
    [startVotingAt, takeProfitAt, openSaleAt, ended, profitPeriod],
  );
  return (
    <MuiCard sx={{ borderRadius: 4 }} elevation={0}>
      <Link href={`/invest/${slugify(props.data.title)}.${props.data.id}`}>
        <CardActionArea component={"div"}>
          <Grid container sx={{ p: 6 }} spacing={6}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ position: "relative", height: "100%" }}>
                <CardMedia
                  sx={{ borderRadius: 4, height: { sm: 320, md: 250 } }}
                  component="img"
                  image={props.data.thumbnail}
                  alt={props.data.title}
                />
                <ImageContent>
                  <ProjectStatus status={salePeriod} />
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
                    {props.data.profile.follows}
                  </Button>
                </ImageContent>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CardContent sx={{ p: 0, ":last-child": { pb: 0 } }}>
                <Typography variant="h3" mb={1}>
                  {props.data.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {props.data.address}
                </Typography>
                <Box mt={5} mb={5}>
                  <LinearProgress
                    variant="determinate"
                    value={
                      isNaN(props.data.total_nft_sold / props.data.total_nft)
                        ? 0
                        : props.data.total_nft_sold / props.data.total_nft
                    }
                  />
                </Box>

                <Box>
                  <Box display={"flex"} justifyContent={"space-between"} mb={3}>
                    <Typography variant={"caption"}>
                      <Icon src="/assets/imgs/invest/icons/dollar.svg" />
                      Giá trị
                    </Typography>
                    <Typography variant={"caption"}>{formatCurrency(props.data.price)}</Typography>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"} mb={3}>
                    <Typography variant={"caption"}>
                      <Icon src="/assets/imgs/invest/icons/total_supply.svg" />
                      Tổng cung
                    </Typography>
                    <Typography variant={"caption"}>{props.data.total_nft}</Typography>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"} mb={3}>
                    <Typography variant={"caption"}>
                      <Icon src="/assets/imgs/invest/icons/dollar_cirle.svg" />
                      Chấp nhận
                    </Typography>
                    <Typography variant={"caption"}>USDT</Typography>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"} mb={3}>
                    <Typography variant={"caption"}>
                      <Icon src="/assets/imgs/invest/icons/home.svg" />
                      Tài sản
                    </Typography>
                    <Typography variant={"caption"}>Bất động sản</Typography>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography variant={"caption"}>
                      <Icon src="/assets/imgs/invest/icons/sale.svg" />
                      Lợi nhuận cam kết
                    </Typography>
                    <Typography variant={"caption"}>10%</Typography>
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
