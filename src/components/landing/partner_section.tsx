import { Box, Typography, useTheme } from "@mui/material";
import AnimWhenVisible from "../anim";
import { Center } from "../common/center";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

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
        background: `url(${"assets/imgs/landing/img_bg_nft_section.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        [theme.breakpoints.down("sm")]: {
          height: "auto",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          px: 36,
          paddingTop: 8,
          height: "100%",
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
            <Typography
              variant="h6"
              marginTop={1}
              sx={{
                lineHeight: "56px",
                fontSize: "48px",
                fontWeight: "700",
                my: 15.75,
                [theme.breakpoints.down("md")]: {
                  fontSize: "30px",
                  lineHeight: "43px",
                },
              }}
            >
              Partners & Investors
            </Typography>
          </AnimWhenVisible>
          <Box
            sx={{
              width: "100%",
              mt: 51,
              px: 8,
              [theme.breakpoints.down("xl")]: {
                mt: 21,
              },
            }}
          >
            <Swiper
              slidesPerView={2}
              spaceBetween={80}
              breakpoints={{
                768: {
                  slidesPerView: 4,
                },
              }}
              mousewheel={true}
              speed={800}
              centeredSlides={true}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination]}
              style={{
                overflow: "hidden",
                width: "100%",
                height: "100%",
                padding: "1px",
              }}
            >
              <SwiperSlide style={{ height: "auto" }}>
                <PartnerCard
                  urls={["/assets/imgs/landing/img_partner_logo.svg", "/assets/imgs/landing/img_partner_logo2.svg"]}
                />
              </SwiperSlide>
              <SwiperSlide style={{ height: "auto" }}>
                <PartnerCard
                  urls={["/assets/imgs/landing/img_partner_logo2.svg", "/assets/imgs/landing/img_partner_logo.svg"]}
                />
              </SwiperSlide>
              <SwiperSlide style={{ height: "auto" }}>
                <PartnerCard
                  urls={["/assets/imgs/landing/img_partner_logo.svg", "/assets/imgs/landing/img_partner_logo2.svg"]}
                />
              </SwiperSlide>
              <SwiperSlide style={{ height: "auto" }}>
                <PartnerCard
                  urls={["/assets/imgs/landing/img_partner_logo.svg", "/assets/imgs/landing/img_partner_logo2.svg"]}
                />
              </SwiperSlide>
              <SwiperSlide style={{ height: "auto" }}>
                <PartnerCard
                  urls={["/assets/imgs/landing/img_partner_logo.svg", "/assets/imgs/landing/img_partner_logo2.svg"]}
                />
              </SwiperSlide>
              <SwiperSlide style={{ height: "auto" }}>
                <PartnerCard
                  urls={["/assets/imgs/landing/img_partner_logo.svg", "/assets/imgs/landing/img_partner_logo2.svg"]}
                />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function PartnerCard({ urls }: { urls: string[] }) {
  return (
    <Box
      sx={{
        height: "100%",
        // width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {urls.map((url) => (
        <Box key={url} component="img" src={url} alt="" mb="80px" />
      ))}
    </Box>
  );
}
