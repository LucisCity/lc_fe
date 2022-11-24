import { Box } from "@mui/material";
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

export default function LandingPageV2() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>("down");

  return (
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
          }}
          modules={[Parallax, Mousewheel, Pagination]}
          parallax={true}
          // onChangeDirection={(swiper) => {

          // }}
          onActiveIndexChange={(swiper) => {
            console.log("swiper.activeIndex: ", swiper.activeIndex);
            console.log("swiper.previousIndex: ", swiper.previousIndex);

            if (swiper.activeIndex > swiper.previousIndex) {
              setScrollDirection("down");
            } else {
              setScrollDirection("up");
            }
          }}
          style={{
            overflow: "auto",
            width: "100%",
            height: "100%",
          }}
        >
          <Box
            slot="container-start"
            sx={{
              background: `url(${"/landing/intro-luciscity.jpg"})`, ///assets/imgs/landing/background-card.jpg
              position: "absolute",
              left: "0",
              top: "0",
              width: "130%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-swiper-parallax="-23%"
          ></Box>
          <SwiperSlide>
            <LandingHeader />
            <CompanySection />
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
  );
}
