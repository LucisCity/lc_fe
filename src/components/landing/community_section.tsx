import { Box, Button, Typography, useTheme } from "@mui/material";
import AnimWhenVisible from "../anim";
import Grid2 from "@mui/material/Unstable_Grid2";

type Props = {
  index?: number;
};

export default function ComunitySection(props: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100vw",
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
      <Box
        sx={{
          maxWidth: "1440px",
          px: 36,
          height: "100%",
          pt: 38,
          [theme.breakpoints.down("md")]: {
            px: 6,
            paddingTop: 29.5,
            marginBottom: 19.25,
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <AnimWhenVisible variants={{ hidden: { opacity: 0, x: -100 } }} index={props.index}>
            <Typography variant="h3">Lucis City in the media</Typography>
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
              justifyContent: "space-between",
              flexDirection: ["column", "row"],
              mt: 18,
            }}
          >
            <Typography variant="h6">Join our community</Typography>
            <Box sx={{ display: "flex", mt: [6, 0] }}>
              <Button
                variant="outlined"
                endIcon={<Box component="img" src="/assets/imgs/landing/ic_discord_blue.svg" alt="" />}
                sx={{
                  height: ["40px", "50px"],
                  width: "167px",
                }}
              >
                Discord
              </Button>
              <Button
                variant="outlined"
                endIcon={<Box component="img" src="/assets/imgs/landing/ic_telegram_blue.svg" alt="" />}
                sx={{
                  height: ["40px", "50px"],
                  width: "167px",
                  ml: "4px",
                }}
              >
                Telegram
              </Button>
              <Button
                variant="outlined"
                endIcon={<Box component="img" src="/assets/imgs/landing/ic_twitter_blue.svg" alt="" />}
                sx={{
                  height: ["40px", "50px"],
                  width: "167px",
                  ml: "4px",
                }}
              >
                Twitter
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function CommunityCard({ imgUrl, title, content }: { imgUrl: string; title: string; content: string }) {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Box component="img" src={imgUrl} alt="" sx={{ width: "100% " }} />
      <Typography variant="h6" mt="6px">
        {title}
      </Typography>
      <Typography variant="body1" mt="6px">
        {content}
      </Typography>
    </Box>
  );
}
