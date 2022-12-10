import { Box, Button, Container, Grid, Typography, useTheme } from "@mui/material";
import AnimWhenVisible from "../anim";
import { Center } from "../common/center";
import { headerHeight } from "../layout/header";

type Props = {
  index?: number;
  fullscreen?: boolean;
};

export default function NftSection(props: Props) {
  const theme = useTheme();

  return (
    <Box
      className={props.fullscreen ? "fullscreenPage" : undefined}
      sx={{
        "--page-padding-top": props.fullscreen ? `${headerHeight}px` : 0, // landing always on PC always has header 90px
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: `url(${"assets/imgs/landing/img_bg_nft_section.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        [theme.breakpoints.down("sm")]: {
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
          <AnimWhenVisible variants={{ hidden: { opacity: 0, y: -100 } }} index={props.index}>
            <Typography variant="h2" textTransform={"uppercase"} mb={5}>{`NFT hóa bất động sản`}</Typography>
          </AnimWhenVisible>
          <Box display={"flex"}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={5}>
                <AnimWhenVisible variants={{ hidden: { opacity: 0, x: -100 } }} index={props.index}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "16px",
                    }}
                  >
                    <Box
                      component="img"
                      src="/assets/imgs/landing/img_bg_estate.png"
                      alt=""
                      width="100%"
                      // sx={{ flex: "1" }}
                      borderRadius={4}
                    />
                  </Box>
                </AnimWhenVisible>
              </Grid>
              <Grid item xs={12} md={5}>
                <Box
                  height={"100%"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    // height: "444px",
                    overflow: "hidden",
                    marginLeft: 10,
                    [theme.breakpoints.down("sm")]: {
                      marginLeft: "0px",
                      marginTop: 4,
                    },
                  }}
                >
                  <AnimWhenVisible variants={{ hidden: { opacity: 0, y: 100 } }} index={props.index}>
                    <Box
                      sx={{
                        padding: 5,
                        background: "rgba(255, 255, 255, 0.5)",
                        backdropFilter: "blur(3px)",
                        borderRadius: 2,
                      }}
                    >
                      <Typography
                        variant="h3"
                        //
                      >
                        Navaland Phú Yên
                      </Typography>
                      <Typography
                        variant={"h5"}
                        sx={{
                          marginTop: 1,
                          color: "#9FA4BC",
                          fontSize: 14,
                        }}
                      >
                        Bất động sản nghỉ dưỡng
                      </Typography>
                    </Box>
                    <Grid container spacing={2} sx={{ mt: 9 }}>
                      <Grid item xs={6}>
                        <NftInfoCard title="Total raise" content="$ 45,948.55" />
                      </Grid>
                      <Grid item xs={6}>
                        <NftInfoCard title="Total supply" content="2M Tokens" />
                      </Grid>
                      <Grid item xs={6}>
                        <NftInfoCard
                          title="Accepted currency"
                          content="$45,948.55"
                          icon="/assets/imgs/landing/ic_usdt.svg"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <NftInfoCard title="Price per token" content="$ 1" />
                      </Grid>
                      <Grid item xs={6}>
                        <NftInfoCard title="Network" content="BSC" icon="/assets/imgs/landing/ic_bsc.svg" />
                      </Grid>
                      <Grid item xs={6}>
                        <NftInfoCard title="Asset" content="1" />
                      </Grid>
                      <Grid item xs={12}>
                        <Box>
                          <Center>
                            <Typography variant="caption" mt={8} mb={3}>
                              1 USDT minimum investment
                            </Typography>
                          </Center>
                          <Button
                            variant="contained"
                            fullWidth
                            sx={{
                              height: "50px",
                            }}
                            endIcon={<Box component="img" src="/assets/imgs/landing/ic_next.svg" alt="" />}
                          >
                            Mua NFT
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </AnimWhenVisible>
                </Box>
              </Grid>
              <Grid item xs={12} md={2}>
                <Box
                  height={"100%"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={{ sm: "flex-end", xs: "center" }}
                >
                  <AnimWhenVisible variants={{ hidden: { opacity: 0, x: 100 } }} index={props.index}>
                    <Center
                      sx={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        background: "rgba(197, 206, 232, 0.8)",
                        [theme.breakpoints.down("md")]: {
                          marginTop: 4,
                        },
                      }}
                    >
                      <Box component="img" src="/assets/imgs/landing/ic_arrow_landing.svg" alt="" />
                    </Center>
                  </AnimWhenVisible>
                </Box>
              </Grid>
            </Grid>
          </Box>
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
