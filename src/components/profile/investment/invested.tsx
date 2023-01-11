import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import Link from "next/link";
import { Button, Card, CardActionArea, LinearProgress, Skeleton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import React from "react";
import PaginatedList from "../components/paginated_list";
import { ProjectSalePeriod, ProjectStatus } from "./components/project_card";
import { useInvestedProject } from "../../../hooks/profile/use_investment";
import { InvestedProjectGql } from "../../../gql/graphql";
import { formatCurrency } from "../../../utils/number.util";
import { slugify } from "../../../utils/string.util";

const Icon = styled("img")(({ theme }) => ({
  marginRight: theme.spacing(2),
  width: 10,
  height: 10,
}));

const TOTAL_TOKENS = 1000;

const InvestedCard = (props: InvestedProjectGql) => {
  /* eslint-disable */
  const {
    id,
    title,
    thumbnail,
    address,
    price,
    open_sale_at: openSaleAt,
    take_profit_at: takeProfitAt,
    start_time_vote_sell: waitTransferAt,
    ended,
    nft_price: nftPrice,
    total_nft: totalNft,
    total_nft_sold: totalNftSold,
    profile: { follows },
    nft_bought: { total_nft: totalNftOwned },
    profit_balance: { balance },
  } = props;
  /* eslint-enable */
  const salePeriod = ended
    ? ProjectSalePeriod.CLOSED
    : waitTransferAt && new Date() > new Date(waitTransferAt)
    ? ProjectSalePeriod.TRANSFERRING
    : takeProfitAt && new Date() > new Date(takeProfitAt)
    ? ProjectSalePeriod.PROFITING
    : openSaleAt && new Date() > new Date(openSaleAt)
    ? ProjectSalePeriod.OPEN
    : ProjectSalePeriod.UPCOMING;

  const href = `/invest/${slugify(title)}.${id}`;

  return (
    <Card sx={{ borderRadius: 4 }} elevation={0}>
      <Link href={href}>
        <CardActionArea component={"div"}>
          <Grid container sx={{ px: 3, py: 4 }} spacing={3}>
            <Grid item xs={12} sm={4}>
              <CardMedia
                sx={{ borderRadius: 4, maxHeight: 182, height: "100%" }}
                component="img"
                image={thumbnail}
                alt="green iguana"
              />
            </Grid>
            <Grid item xs={12} sm={8} container spacing={3}>
              <Grid item sm={6} xs={12}>
                <Box mb={1} display={"flex"} justifyContent={"space-between"} alignItems={"baseline"}>
                  <Typography fontSize={{ lg: 20, md: 18, sm: 16, xs: 20 }} fontWeight={600}>
                    {title}
                  </Typography>
                  <Typography fontWeight={500} fontSize={{ lg: 18, md: 16, sm: 14, sx: 18 }} color={"#33E179"}>
                    ({formatCurrency(balance)})
                  </Typography>
                </Box>
                <Typography color="text.secondary" lineHeight={1.4} fontSize={12}>
                  {address}
                </Typography>
              </Grid>
              <Grid
                item
                sm={6}
                xs={12}
                display={{ sm: "inline", xs: "flex" }}
                flexDirection={{ sm: "column", xs: "row" }}
              >
                <Box display={"flex"} justifyContent={{ sm: "flex-end" }} width={{ sm: "100%", xs: "50%" }}>
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
                </Box>
                <Box mt={{ sm: 3, xs: 4 }} mb={{ sm: 3 }} width={{ sm: "100%", xs: "50%" }}>
                  <LinearProgress variant="determinate" value={(totalNftSold / totalNft) * 100} />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box width={{ md: "80%", xs: "100%" }}>
                  <Box display={"flex"} justifyContent={"space-between"} mb={3}>
                    <Typography variant={"caption"}>
                      <Icon src="/assets/imgs/invest/icons/dollar.svg" />
                      Tổng giá trị
                    </Typography>
                    <Typography variant={"caption"} fontWeight={500}>
                      {formatCurrency(price)}
                    </Typography>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography variant={"caption"}>
                      <Icon src="/assets/imgs/invest/icons/total_supply.svg" />
                      Tokens sở hữu
                    </Typography>
                    <Typography variant={"caption"} fontWeight={500}>
                      {totalNftOwned}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box width={{ md: "80%", xs: "100%" }}>
                  <Box display={"flex"} justifyContent={"space-between"} mb={3}>
                    <Typography variant={"caption"}>
                      <Icon src="/assets/imgs/invest/icons/home.svg" />
                      Giá mua vào
                    </Typography>
                    <Typography variant={"caption"} fontWeight={500}>
                      {formatCurrency(totalNftOwned * nftPrice)}
                    </Typography>
                  </Box>
                  <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography variant={"caption"}>
                      <Icon src="/assets/imgs/invest/icons/sale.svg" />
                      Lợi nhuận
                    </Typography>
                    <Typography variant={"caption"} fontWeight={500}>
                      10%
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Button href={`${href}#buy`} LinkComponent={Link} variant="contained">
                  Buy/Sell
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Box display={"flex"}>
                  <Button href={`${href}#vote`} LinkComponent={Link} variant="contained" sx={{ mr: 1 }}>
                    Vote
                  </Button>
                  <Button href={`${href}#claim`} LinkComponent={Link} variant="contained">
                    Claim
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default function InvestmentInvested() {
  const { loading, investedProjects } = useInvestedProject();
  return (
    <>
      {loading ? (
        <PaginatedList rowsPerPage={5}>
          {Array.from({ length: 5 }).map((i, idx) => (
            <Box key={idx} px={{ md: 4 }} pt={{ xs: 4 }}>
              <Skeleton
                key={`notification_loading_${idx}`}
                variant={"rounded"}
                sx={{
                  borderRadius: 4,
                  height: { sm: 205, xs: 430 },
                }}
              />
            </Box>
          ))}
        </PaginatedList>
      ) : (
        <PaginatedList rowsPerPage={5}>
          {investedProjects.map((i, idx) => (
            <Box key={idx} px={{ md: 4 }} pt={{ xs: 4 }}>
              <InvestedCard {...i} />
            </Box>
          ))}
        </PaginatedList>
      )}
    </>
  );
}
