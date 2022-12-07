import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import AnimWhenVisible from "../anim";
import Grid2 from "@mui/material/Unstable_Grid2";
import { headerHeight } from "../layout/header";

type Props = {
  index?: number;
  fullscreen?: boolean;
};

export default function ComunitySection(props: Props) {
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
          height: "auto",
          background: `url(/assets/imgs/member/background.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left",
        },
      }}
    >
      <Container sx={{ height: "100%", padding: "50px 0" }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AnimWhenVisible variants={{ hidden: { opacity: 0, x: -100 } }} index={props.index}>
            <Typography variant="h2" textTransform={"uppercase"}>
              Truyền thông nói gì về chúng tôi
            </Typography>
          </AnimWhenVisible>

          <Grid2
            container
            spacing={[8, 6]}
            sx={{
              width: "100%",
              overflow: "hidden",
              mt: 11,
            }}
          >
            <Grid2 xs={12} sm={4} md={3}>
              <CommunityCard
                imgUrl="/assets/imgs/landing/img_marketwarch.png"
                title="Market Watch"
                content="5 economists and real estate pros share what will happen to mortgage rates in 2022"
              />
            </Grid2>
            <Grid2 xs={12} sm={4} md={3}>
              <CommunityCard
                imgUrl="/assets/imgs/landing/img_asia_pacific.png"
                title="Entrepreneur"
                content="5 economists and real estate pros share what will happen to mortgage rates in 2022"
              />
            </Grid2>
            <Grid2 xs={12} sm={4} md={3}>
              <CommunityCard
                imgUrl="/assets/imgs/landing/img_vietnam_insider.png"
                title="Vietnam Insider"
                content="5 economists and real estate pros share what will happen to mortgage rates in 2022"
              />
            </Grid2>
            <Grid2 xs={12} sm={4} md={3}>
              <CommunityCard
                imgUrl="/assets/imgs/landing/img_yahoo.png"
                title="Yahoo! Finance"
                content="5 economists and real estate pros share what will happen to mortgage rates in 2022"
              />
            </Grid2>
          </Grid2>
          <Box
            sx={{
              display: "flex",
              flexDirection: ["column"],
              alignItems: "center",
              mt: 18,
              width: "100%",
            }}
          >
            <AnimWhenVisible variants={{ hidden: { opacity: 0, x: -100 } }} index={props.index}>
              <Typography variant="h2" textTransform={"uppercase"}>
                Cộng đồng của chúng tôi
              </Typography>
            </AnimWhenVisible>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: theme.spacing(1),
                mt: 10,
              }}
            >
              <Button
                variant="outlined"
                endIcon={<Box component="img" src="/assets/imgs/landing/ic_discord_blue.svg" alt="" />}
                sx={
                  {
                    //height: ["40px", "50px"],
                    // width: "167px",
                  }
                }
              >
                Facebook
              </Button>
              <Button
                variant="outlined"
                endIcon={<Box component="img" src="/assets/imgs/landing/ic_discord_blue.svg" alt="" />}
                sx={
                  {
                    //height: ["40px", "50px"],
                    // width: "167px",
                  }
                }
              >
                Zalo
              </Button>
              <Button
                variant="outlined"
                endIcon={<Box component="img" src="/assets/imgs/landing/ic_discord_blue.svg" alt="" />}
                sx={
                  {
                    //height: ["40px", "50px"],
                    // width: "167px",
                  }
                }
              >
                Discord
              </Button>
              <Button
                variant="outlined"
                endIcon={<Box component="img" src="/assets/imgs/landing/ic_telegram_blue.svg" alt="" />}
                sx={
                  {
                    //height: ["40px", "50px"],
                  }
                }
              >
                Telegram
              </Button>
              <Button
                variant="outlined"
                endIcon={<Box component="img" src="/assets/imgs/landing/ic_twitter_blue.svg" alt="" />}
                sx={
                  {
                    //height: ["40px", "50px"],
                  }
                }
              >
                Twitter
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function CommunityCard({ imgUrl, title, content }: { imgUrl: string; title: string; content: string }) {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Box component="img" src={imgUrl} alt="" sx={{ width: "100% ", cursor: "pointer" }} />
      {/*<Typography variant="h6" mt="6px">*/}
      {/*  {title}*/}
      {/*</Typography>*/}
      {/*<Typography variant="body1" mt="6px">*/}
      {/*  {content}*/}
      {/*</Typography>*/}
    </Box>
  );
}
