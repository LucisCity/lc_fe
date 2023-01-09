import { styled } from "@mui/material/styles";
import { Button, Card, CardActionArea, LinearProgress, Typography } from "@mui/material";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import { Box } from "@mui/system";
import React from "react";
import { ProjectGql } from "../../../../gql/graphql";
import { formatCurrency } from "../../../../utils/number.util";

const Icon = styled("img")(({ theme }) => ({
  marginRight: theme.spacing(2),
  width: 10,
  height: 10,
}));

export enum ProjectSalePeriod {
  UPCOMING = "Sắp bán",
  OPEN = "Mở bán",
  EXPECTED_PROFITING = "Dự kiến sinh lời",
  PROFITING = "Sinh lời",
  TRANSFERRING = "Chờ bán",
  CLOSED = "Kết thúc",
}

export const ProjectStatus = (props: { status: ProjectSalePeriod }) => {
  const color = React.useMemo(() => {
    switch (props.status) {
      case ProjectSalePeriod.CLOSED:
        return "rgba(80, 76, 103, 0.8)";
      case ProjectSalePeriod.OPEN:
        return "rgba(255, 140, 4, 0.8)";
      case ProjectSalePeriod.EXPECTED_PROFITING:
        return "rgba(6, 151, 255, 0.8)";
      case ProjectSalePeriod.PROFITING:
        return "rgba(0, 218, 87, 0.8)";
      case ProjectSalePeriod.TRANSFERRING:
        return "rgba(101, 85, 238, 0.8)";
      case ProjectSalePeriod.UPCOMING:
        return "rgba(71, 204, 233, 0.8)";
      default:
        return "rgba(71, 204, 233, 0.8)";
    }
  }, [props.status]);
  return (
    <Button
      variant="contained"
      color={"secondary"}
      sx={(theme) => ({
        background: color,
        color: "#fff",
        width: 80,
        height: 40,
        marginRight: 3,
        padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
      })}
    >
      <Typography whiteSpace={"nowrap"}>{props.status}</Typography>
    </Button>
  );
};

export const ProjectCard = (props: ProjectGql) => {
  /* eslint-disable */
  const {
    id,
    title,
    thumbnail,
    address,
    price,
    total_nft: totalNft,
    total_nft_sold: totalNftSold,
    open_sale_at: openSaleAt,
    take_profit_at: takeProfitAt,
    start_time_vote_sell: waitTransferAt,
    ended,
    profile: { follows },
  } = props;
  /* eslint-enable */
  const salePeriod = React.useMemo(() => {
    return ended
      ? ProjectSalePeriod.CLOSED
      : waitTransferAt && new Date() > new Date(waitTransferAt)
      ? ProjectSalePeriod.TRANSFERRING
      : takeProfitAt && new Date() > new Date(takeProfitAt)
      ? ProjectSalePeriod.PROFITING
      : openSaleAt && new Date() > new Date(openSaleAt)
      ? ProjectSalePeriod.OPEN
      : ProjectSalePeriod.UPCOMING;
  }, [waitTransferAt, takeProfitAt, openSaleAt, ended]);
  // console.log(`openSaleAt ${openSaleAt}`);
  return (
    <Card sx={{ borderRadius: 4 }} elevation={0}>
      <Link href={`/invest/${id}`}>
        <CardActionArea component={"div"}>
          <Grid container sx={{ px: 3, py: 4 }} spacing={3}>
            <Grid item xs={12} sm={3}>
              <CardMedia
                sx={{ borderRadius: 4, maxHeight: 182, height: "100%" }}
                component="img"
                image={thumbnail}
                alt="green iguana"
              />
            </Grid>
            <Grid item xs={12} sm={9} container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="h3" mb={2}>
                  {title}
                </Typography>
                <Typography color="text.secondary" lineHeight={1.4} fontSize={12}>
                  {address}
                </Typography>
              </Grid>
              <Grid item xs={6} display={"flex"} justifyContent={"flex-end"}>
                <ProjectStatus status={salePeriod} />
                <Button
                  variant="contained"
                  color={"secondary"}
                  sx={(theme) => ({
                    color: "#FF6C6C",
                    background: "#F9F9F9",
                    width: 80,
                    height: 40,
                    padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
                  })}
                  endIcon={<Box component="img" src="/assets/imgs/invest/icons/ic_favorit.svg" alt="" />}
                >
                  {follows}
                </Button>
              </Grid>
              <Grid item xs={12}>
                <LinearProgress variant="determinate" value={(totalNftSold / totalNft) * 100} />
              </Grid>
              <Grid item xs={6}>
                <Box pr={{ md: 3 }}>
                  <Box display={"flex"} pb={2} justifyContent={"space-between"} mb={1}>
                    <Typography variant={"caption"}>
                      <Icon src="/assets/imgs/invest/icons/dollar.svg" />
                      Tổng giá trị
                    </Typography>
                    <Typography variant={"caption"} fontWeight={500}>
                      {formatCurrency(price)}
                    </Typography>
                  </Box>
                  <Box display={"flex"} pb={2} justifyContent={"space-between"} mb={1}>
                    <Typography variant={"caption"}>
                      <Icon src="/assets/imgs/invest/icons/total_supply.svg" />
                      Tổng số tokens
                    </Typography>
                    <Typography variant={"caption"} fontWeight={500}>
                      {totalNft}
                    </Typography>
                  </Box>
                  <Box display={"flex"} pb={2} justifyContent={"space-between"}>
                    <Typography variant={"caption"}>
                      <Icon src="/assets/imgs/invest/icons/dollar_cirle.svg" />
                      Số tokens đang bán
                    </Typography>
                    <Typography variant={"caption"} fontWeight={500}>
                      {totalNft - totalNftSold}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box pl={{ md: 3 }}>
                  <Box display={"flex"} pb={2} justifyContent={"space-between"} mb={1}>
                    <Typography variant={"caption"}>
                      <Icon src="/assets/imgs/invest/icons/home.svg" />
                      Giai đoạn
                    </Typography>
                    <Typography variant={"caption"} fontWeight={500}>
                      {salePeriod}
                    </Typography>
                  </Box>
                  <Box display={"flex"} pb={2} justifyContent={"space-between"}>
                    <Typography variant={"caption"}>
                      <Icon src="/assets/imgs/invest/icons/sale.svg" />
                      Lợi nhuận cam kết/năm
                    </Typography>
                    <Typography variant={"caption"} fontWeight={500}>
                      10%
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </CardActionArea>
      </Link>
    </Card>
  );
};
