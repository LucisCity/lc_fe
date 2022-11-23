import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import { Section } from ".";
import { useAnimation } from "../../hooks/use_animation";

type Props = {
  activeSection?: Section;
};

export function ReasonChooseSection(props: Props) {
  const theme = useTheme();
  const activeSection = props.activeSection;

  const leftRef = React.useRef(null);
  const rightRef = React.useRef(null);
  const animation = useAnimation();

  React.useEffect(() => {
    if (activeSection !== Section.ReasonChoose) {
      animation.fadeIn(leftRef.current);
      animation.fadeIn(rightRef.current);
    } else {
      animation.fadeOut(rightRef.current);
      animation.fadeOut(rightRef.current);
    }
  }, [activeSection, animation]);

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        background: `url(${"/landing/intro-luciscity.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          padding: "1px 144px",
          [theme.breakpoints.down("lg")]: {
            padding: "1px 16px 16px 16px",
          },
        }}
      >
        <Grid container spacing={2} ref={leftRef}>
          <Grid md={0} lg={3}></Grid>
          <Grid md={12} lg={9}>
            <Typography
              variant="h3"
              whiteSpace="pre-line"
              sx={{
                marginTop: 39,
                [theme.breakpoints.down("lg")]: {
                  marginTop: 8,
                },
              }}
            >{`Why you should
          choose?`}</Typography>
          </Grid>
          <Grid
            lg={6}
            sx={{
              [theme.breakpoints.down("lg")]: {
                display: "none",
              },
            }}
          ></Grid>
          <Grid md={6} lg={3}>
            <ReasonBox />
          </Grid>
          <Grid md={6} lg={3}>
            <ReasonBox />
          </Grid>
          <Grid md={6} lg={3}>
            <ReasonBox />
          </Grid>
          <Grid md={6} lg={3}>
            <ReasonBox />
          </Grid>
          <Grid md={6} lg={3}>
            <ReasonBox />
          </Grid>
          <Grid md={6} lg={3}>
            <ReasonBox />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

function ReasonBox() {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(223, 231, 253, 0.7)",
        borderRadius: "8px",
        padding: 4.5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src="/temp/ic_marketplace.svg" alt="" />
        <Typography variant="h5" whiteSpace="pre-line" marginLeft={3}>
          MarketPlace
        </Typography>
      </Box>
      <Typography variant="body1" marginTop={7}>
        Cho phép Nhà đầu tư giao dịch trong nhiều nền tảng khác nhau.
      </Typography>
    </Box>
  );
}
