import { Box, useMediaQuery } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/effect-creative";
import { Mousewheel, Pagination, Parallax } from "swiper";
import { EcosystemSection } from "./ecosystem_section";
import { ReasonChooseSection } from "./reason_choose_section";
import { OperationSection } from "./operation_section";
import { CompanySection } from "./company_section";
import { useState } from "react";
import { ScrollDirection, ScrollDirectionCtx } from "../anim";
import LandingHeader from "../layout/header/landing_header";
import { TopSection } from "./top_section";
import { CardSection } from "./card_section";
import { useTheme } from "@mui/system";

export enum Section {
  OnTop, // start
  IntroductionCompany,
  IntroductionCard,
  Ecosystem,
  ReasonChoose,
  Operation,
  Demo,
  RoadMap,
  Partner,
  Community,
}
export default function LandingPage() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>("down");
  const [slideActive, setSlideActive] = useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <LandingHeader slideActive={slideActive} />
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          overflow: "auto",
        }}
      >
        <ScrollDirectionCtx.Provider
          value={{
            direction: scrollDirection,
          }}
        >
          <Swiper
            direction={"vertical"}
            slidesPerView={1}
            spaceBetween={0}
            mousewheel={true}
            pagination={{
              clickable: true,
              enabled: matches,
            }}
            modules={[Parallax, Mousewheel, Pagination]}
            parallax={true}
            // onChangeDirection={(swiper) => {

            // }}
            onActiveIndexChange={(swiper) => {
              setSlideActive(swiper.activeIndex);
              if (swiper.activeIndex > swiper.previousIndex) {
                setScrollDirection("down");
              } else {
                setScrollDirection("up");
              }
            }}
            style={{
              overflow: "hidden",
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              slot={"container-start"}
              sx={{
                background: `url(${"/landing/intro-luciscity.jpg"})`, ///assets/imgs/landing/background-card.jpg
                position: "absolute",
                left: "0",
                top: "0",
                width: "100%",
                height: "110%",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              data-swiper-parallax="-5%"
            />

            <SwiperSlide>
              <TopSection />
            </SwiperSlide>
            <SwiperSlide>
              <CompanySection />
            </SwiperSlide>
            <SwiperSlide>
              <CardSection />
            </SwiperSlide>
            <SwiperSlide>
              <EcosystemSection />
            </SwiperSlide>
            <SwiperSlide>
              <ReasonChooseSection />
            </SwiperSlide>
            <SwiperSlide>
              <OperationSection />
            </SwiperSlide>
            <SwiperSlide>
              <CompanySection />
            </SwiperSlide>
          </Swiper>
        </ScrollDirectionCtx.Provider>
      </Box>
    </>
  );
}
