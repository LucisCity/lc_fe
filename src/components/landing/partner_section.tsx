import { Box, Container, Typography, useTheme } from "@mui/material";
import AnimWhenVisible from "../anim";
import { headerHeight } from "../layout/header";

type Props = {
  index?: number;
};

export default function PartnerSection(props: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
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
      <Container sx={{ height: "100%", pt: `${headerHeight}px`, pb: [`${headerHeight}px`, 0] }}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AnimWhenVisible variants={{ hidden: { opacity: 0, x: -100 } }} index={props.index}>
            <Typography variant="h3">Partners & Investors</Typography>
          </AnimWhenVisible>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              columnGap: 21,
              mt: [21, 36],
            }}
          >
            {[
              "/assets/imgs/landing/img_partner_logo.svg",
              "/assets/imgs/landing/img_partner_logo2.svg",
              "/assets/imgs/landing/img_partner_logo.svg",
              "/assets/imgs/landing/img_partner_logo2.svg",
              "/assets/imgs/landing/img_partner_logo.svg",
              "/assets/imgs/landing/img_partner_logo2.svg",
              "/assets/imgs/landing/img_partner_logo.svg",
              "/assets/imgs/landing/img_partner_logo2.svg",
            ].map((url, index) => (
              <Box
                key={url + index}
                component="img"
                src={url}
                alt=""
                mb="80px"
                sx={{
                  mb: 8,
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
