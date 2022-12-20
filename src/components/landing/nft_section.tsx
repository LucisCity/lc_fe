import {
  Box,
  Button,
  Container,
  Grid,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
  useTheme,
} from "@mui/material";
import AnimWhenVisible from "../anim";
import { Center } from "../common/center";
import { headerHeight } from "../layout/header";
import CircleIcon from "@mui/icons-material/Circle";
import NftStepper from "./components/stepper";
import * as React from "react";

type Props = {
  index?: number;
  fullscreen?: boolean;
  projects: { name: string; description: string }[];
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
          <AnimWhenVisible variants={{ hidden: { opacity: 0, y: -100 } }} index={props.index}>
            <Typography variant="h2" textTransform={"uppercase"} mb={{ sm: 12, xs: 10 }}>
              NFT hóa bất động sản
            </Typography>
          </AnimWhenVisible>
          <Box display={"flex"}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={(theme) => ({
                    background: `linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, #FFFFFF 111.15%),
                     url(\"https://www.villasvinhomesriverside.com/images/users/images/vinhomes-ocean-park-1.jpg\")`,
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
                  </Box>
                  <Box position={"absolute"} bottom={"24px"}>
                    <Typography variant={"h3"}>Navaland Phú Yên</Typography>
                    <Typography variant={"caption"}>1901 Thornridge Cir. Shiloh, Hawaii 81063</Typography>
                  </Box>
                </Box>
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
                  <AnimWhenVisible variants={{ hidden: { opacity: 0, y: 100 } }} index={props.index}>
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
                          <Typography variant="h2">$126,214.01</Typography>
                          <Typography variant="h5" color={"#fff"}>
                            126,214 NFT đang bán
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                        <Box width={"100%"} my={8}>
                          <NftStepper />
                        </Box>
                      </Grid>

                      <Grid item xs={6}>
                        <NftInfoCard title="Tổng số tokens" content="2M Tokens" />
                      </Grid>
                      <Grid item xs={6}>
                        <NftInfoCard title="Số nhà đầu tư" content="159" />
                      </Grid>
                      <Grid item xs={6}>
                        <NftInfoCard title="Giai đoan" content="Mở bán" />
                      </Grid>
                      <Grid item xs={6}>
                        <NftInfoCard title="Lợi nhuận cam kết/năm" content="10%" />
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
              <Grid item xs={12} sm={0} lg={2}>
                <Box
                  height={"100%"}
                  display={"flex"}
                  alignItems={"flex-start"}
                  justifyContent={{ lg: "flex-end", xs: "center" }}
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
