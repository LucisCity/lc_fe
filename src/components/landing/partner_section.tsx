import { Box, Typography, useTheme } from "@mui/material";
import AnimWhenVisible from "../anim";

type Props = {
  index?: number;
};

export default function PartnerSection(props: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        [theme.breakpoints.down("sm")]: {
          height: "auto",
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
            alignItems: "center",
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
            ].map((url) => (
              <Box
                key={url}
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
      </Box>
    </Box>
  );
}
