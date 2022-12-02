import { Box, Button, Container, Grid, Typography, useTheme } from "@mui/material";
import AnimWhenVisible from "../anim";
import { Center } from "../common/center";
import { headerHeight } from "../layout/header";

type Props = {
  index?: number;
};

export default function NftSection(props: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
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
      <Container sx={{ height: "100%", pt: `${headerHeight}px` }}>
        <Center
          sx={{
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
            },
          }}
        >
          <AnimWhenVisible variants={{ hidden: { opacity: 0, x: -100 } }} index={props.index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "16px",
                width: "270px",
                height: "470px",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src="/assets/imgs/landing/img_bg_estate.png"
                alt=""
                width="100%"
                sx={{ flex: "1" }}
              />
              <Box
                sx={{
                  padding: 5,
                  background: "rgba(255, 255, 255, 0.5)",
                  backdropFilter: "blur(3px)",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    lineHeight: "36px",
                  }}
                >
                  Navaland Phú Yên
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    marginTop: 1,
                    color: "#9FA4BC",
                  }}
                >
                  Bất động sản nghỉ dưỡng
                </Typography>
              </Box>
            </Box>
          </AnimWhenVisible>
          <Box
            sx={{
              width: "100%",
              // height: "444px",
              overflow: "hidden",
              marginLeft: 10,
              [theme.breakpoints.down("sm")]: {
                marginLeft: "0px",
                marginTop: 4,
              },
            }}
          >
            <AnimWhenVisible variants={{ hidden: { opacity: 0, y: -100 } }} index={props.index}>
              <Typography variant="h3" whiteSpace="pre-line" sx={{ mt: [13, 0] }}>{`NFT hóa 
            bất động sản`}</Typography>
            </AnimWhenVisible>
            <AnimWhenVisible variants={{ hidden: { opacity: 0, y: 100 } }} index={props.index}>
              <Grid
                container
                // gap={2}
                spacing="6px"
                sx={{
                  mt: 9,
                  maxWidth: "368px",
                }}
              >
                <Grid item xs={6}>
                  <NftInfoCard title="Total raise" content="$ 45,948.55" />
                </Grid>
                <Grid item xs={6}>
                  <NftInfoCard title="Total supply" content="2M Tokens" />
                </Grid>
                <Grid item xs={6}>
                  <NftInfoCard title="Accepted currency" content="$45,948.55" icon="/assets/imgs/landing/ic_usdt.svg" />
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
          <Center sx={{ flex: 1 }}>
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
          </Center>
        </Center>
      </Container>
    </Box>
  );
}

function NftInfoCard(props: { title: string; content: string; icon?: string }) {
  return (
    <Box
      sx={{
        background: "rgba(255, 255, 255, 0.4)",
        backdropFilter: "blur(3px)",
        borderRadius: 2,
        padding: 2,
      }}
    >
      <Typography variant="caption">{props.title}</Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {props.icon != null ? <Box component="img" src={props.icon} alt="" mr="2px" /> : null}
        <Typography variant="subtitle2">{props.content}</Typography>
      </Box>
    </Box>
  );
}
