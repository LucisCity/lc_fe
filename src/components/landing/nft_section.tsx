import { Box, Button, Container, Grid, Typography, useTheme } from "@mui/material";
import AnimWhenVisible from "../anim";
import { Center } from "../common/center";
import { headerHeight } from "../layout/header";
import * as React from "react";
import { Project } from "../../gql/graphql";
import { Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { calculateProjectStatus, ProjectStatus } from "../profile/investment/components/project_card";
import "swiper/css/pagination";
import "swiper/css";
import { formatCurrency } from "../../utils/number.util";
import Link from "next/link";
import { slugify } from "../../utils/string.util";
import { ethers } from "ethers";
type Props = {
  index?: number;
  fullscreen?: boolean;
  projects: Project[];
};

export default function NftSection(props: Props) {
  const theme = useTheme();
  const { projects } = props;
  return (
    <Box
      className={props.fullscreen ? "fullscreenPage" : undefined}
      id={"landing-highlight-projects"}
      sx={{
        "--page-padding-top": props.fullscreen ? `${headerHeight}px` : 0, // landing always on PC always has header 90px
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        [theme.breakpoints.down("sm")]: {
          background: `url(/assets/imgs/background/5.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left",
          height: "auto",
          paddingTop: theme.spacing(5),
          paddingBottom: theme.spacing(5),
        },
      }}
    >
      <Container sx={{ height: "100%", padding: "50px 0" }}>
        <Center
          sx={{
            height: "100%",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "flex-start",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
            },
          }}
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            watchSlidesProgress={true}
            breakpoints={{
              1024: {
                slidesPerView: 1,
              },
              360: {
                slidesPerView: 1,
              },
            }}
            pagination={{
              clickable: true,
            }}
            speed={800}
            modules={[Mousewheel, Pagination]}
            style={{
              // overflow: "hidden",
              width: "100%",
            }}
          >
            {projects.map((data) => {
              return (
                <SwiperSlide key={data.id}>
                  <NftInfo index={props.index} fullscreen={props.fullscreen} data={data} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Center>
      </Container>
    </Box>
  );
}

export function NftInfoCard(props: { title: string; content: string; icon?: string; bgColor?: string }) {
  return (
    <Box
      sx={{
        background: props.bgColor ?? "rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(3px)",
        borderRadius: 2,
        padding: 2,
      }}
    >
      <Typography variant="subtitle1">{props.title}</Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {props.icon != null ? <Box component="img" src={props.icon} alt="" mr="2px" /> : null}
        <Typography variant="h5">{props.content}</Typography>
      </Box>
    </Box>
  );
}

const NftInfo = ({ index, fullscreen, data }: { index?: number; fullscreen?: boolean; data: any }) => {
  const theme = useTheme();
  const swiper = useSwiper();
  const {
    ended,
    start_time_vote_sell: startVotingAt,
    open_sale_at: openSaleAt,
    take_profit_at: takeProfitAt,
    profit_period: profitPeriod,
  } = data;
  const salePeriod = React.useMemo(
    () => calculateProjectStatus(data),
    [startVotingAt, takeProfitAt, openSaleAt, ended, profitPeriod],
  );
  return (
    <>
      <AnimWhenVisible variants={{ hidden: { opacity: 0, y: -100 } }} index={index}>
        <Typography variant="h2" textTransform={"uppercase"} mb={{ sm: 12, xs: 10 }}>
          NFT hóa bất động sản
        </Typography>
      </AnimWhenVisible>
      <Box display={"flex"}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Link href={`/invest/${slugify(data.title)}.${data.id}`}>
              <Box
                sx={(theme) => ({
                  background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #FFFFFF 111.15%),
                     url(\"${data.thumbnail}\")`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "100%",
                  position: "relative",
                  p: 6,
                  [theme.breakpoints.down("sm")]: {
                    height: "300px",
                  },
                })}
                borderRadius={4}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
                    {data.profile.follows}
                  </Button>
                </Box>
                <Box position={"absolute"} bottom={"24px"}>
                  <Typography variant={"h3"}>{data.title}</Typography>
                  <Typography variant={"caption"}>{data.address}</Typography>
                </Box>
              </Box>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Box
              height={"100%"}
              sx={{
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
              }}
            >
              <AnimWhenVisible variants={{ hidden: { opacity: 0, y: 100 } }} index={index}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: { xs: "column", sm: "row" },
                      }}
                    >
                      <Typography variant="h2">{formatCurrency(data.price)}</Typography>
                      <Typography variant="h5" color={"#fff"}>
                        {data.total_nft_sold} đã bán
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <Box width={"100%"} my={8}>
                      {/*<NftStepper />*/}
                    </Box>
                  </Grid>

                  <Grid item xs={6}>
                    <NftInfoCard title="Tổng số NFTs" content={data.total_nft} />
                  </Grid>
                  <Grid item xs={6}>
                    <NftInfoCard title="Giá trên 1 NFT" content="Bất động sản" />
                  </Grid>
                  <Grid item xs={6}>
                    <NftInfoCard title="Tài sản" content="Bất động sản" />
                  </Grid>
                  <Grid item xs={6}>
                    <NftInfoCard title="Lợi nhuận cam kết/năm" content="10%" />
                  </Grid>
                  <Grid item xs={12}>
                    <Box>
                      <Center>
                        <Typography variant="caption" mt={8} mb={3}>
                          {formatCurrency(Number(data.nft_price))} đầu tư với số vốn tối thiểu
                        </Typography>
                      </Center>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          height: "50px",
                        }}
                        endIcon={<Box component="img" src="/assets/imgs/landing/ic_next.svg" alt="" />}
                        LinkComponent={Link}
                        href={`/invest/${slugify(data.title)}.${data.id}`}
                      >
                        Mua NFT
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </AnimWhenVisible>
            </Box>
          </Grid>
          <Grid item xs={12} sm={0} lg={2}>
            <Box
              height={"100%"}
              display={"flex"}
              alignItems={"flex-start"}
              justifyContent={{ lg: "flex-end", xs: "center" }}
            >
              <AnimWhenVisible variants={{ hidden: { opacity: 0, x: 100 } }} index={index}>
                <Center
                  sx={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    cursor: "pointer",
                    background: "rgba(197, 206, 232, 0.8)",
                    [theme.breakpoints.down("md")]: {
                      marginTop: 4,
                    },
                  }}
                  onClick={() => swiper.slideNext()}
                >
                  <Box component="img" src="/assets/imgs/landing/ic_arrow_landing.svg" alt="" />
                </Center>
              </AnimWhenVisible>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
