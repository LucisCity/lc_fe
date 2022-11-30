import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import AnimWhenVisible from "../anim";
import { Center } from "../common/center";

type Props = {
  index?: number;
};

export default function NftSection(props: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: `url(${"assets/imgs/landing/img_bg_nft_section.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        [theme.breakpoints.down("sm")]: {
          height: "auto",
          overflowX: "hidden",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          padding: "1px 144px",
          margin: "0px auto",
          height: "100%",
          [theme.breakpoints.down("md")]: {
            height: "auto",
            px: 6,
            pt: 29.5,
            pb: 19.25,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            height: "100%",

            [theme.breakpoints.down("md")]: {
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
                overflow: "hidden",
              }}
            >
              <Box component="img" src="/assets/imgs/landing/img_bg_estate.png" alt="" width="100%" />
              <Box
                sx={{
                  padding: 5,
                  background: "rgba(255, 255, 255, 0.5)",
                  backdropFilter: "blur(3px)",
                }}
              >
                <Typography variant="h5">Navaland Phú Yên</Typography>
                <Typography variant="h6" marginTop={1} color="#9FA4BC">
                  Bất động sản nghỉ dưỡng
                </Typography>
              </Box>
            </Box>
          </AnimWhenVisible>
          <Box
            sx={{
              width: "100%",
              overflow: "hidden",

              marginLeft: 10,
              [theme.breakpoints.down("md")]: {
                marginLeft: "0px",
                marginTop: 4,
              },
            }}
          >
            <AnimWhenVisible variants={{ hidden: { opacity: 0, y: -100 } }} index={props.index}>
              <Typography
                variant="h3"
                whiteSpace="pre-line"
                sx={{
                  lineHeight: "56px",
                  fontSize: "48px",
                  fontWeight: "700",
                  [theme.breakpoints.down("md")]: {
                    fontSize: "30px",
                    lineHeight: "43px",
                    // whiteSpace: "normal",
                  },
                }}
              >{`NFT hóa 
            bất động sản`}</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 4,
                  width: "360px",
                }}
              >
                <Typography variant="h4">$63,429.39</Typography>
                <Typography variant="caption">63,429.39 NFT sold</Typography>
              </Box>
            </AnimWhenVisible>
            <AnimWhenVisible variants={{ hidden: { opacity: 0, y: 100 } }} index={props.index}>
              <Grid
                container
                // gap={2}
                spacing={2}
                sx={{
                  marginTop: 4,
                  width: "368px",
                }}
              >
                {[1, 2, 3, 4, 5, 6].map((idx) => (
                  <Grid item xs={6} key={`item_${idx}`}>
                    <Box
                      sx={{
                        background: "rgba(255, 255, 255, 0.4)",
                        backdropFilter: "blur(3px)",
                        borderRadius: 2,
                        padding: 1,
                      }}
                    >
                      <Typography variant="caption">Title</Typography>
                      <Typography variant="body1">Loremip</Typography>
                    </Box>
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      height: "40px",
                    }}
                  >
                    Buy NFT
                  </Button>
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
        </Box>
      </Box>
    </Box>
  );
}
