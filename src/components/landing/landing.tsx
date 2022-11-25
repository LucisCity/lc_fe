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
import LandingHeader from "../layout/header/landing_header";
import { useWindowSize } from "react-use";
import useScroll from "../../hooks/useScroll";
import { PagingContextType, PagingCtx } from "../anim/swip_visible_anim";
import NftSection from "./nft_section";

export default function LandingPageV2() {
  const [paging, setPaging] = useState<PagingContextType>({
    activeIndex: 0,
    preIndex: 0,
  });
  useScroll();
  const size = useWindowSize();

  if (size.width > 0 && size.width < 768) {
    return (
      <Box>
        <LandingHeader />
        <CompanySection />
        <EcosystemSection />
        <ReasonChooseSection />
        <OperationSection />
        <NftSection />
        <CompanySection />
      </Box>
    );
  }
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <PagingCtx.Provider value={paging}>
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
          onActiveIndexChange={(swiper) => {
            setPaging({
              activeIndex: swiper.activeIndex,
              preIndex: swiper.previousIndex,
            });
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
              background: `url(${"/assets/imgs/landing/background-card.jpg"})`, ///assets/imgs/landing/background-card.jpg
              position: "absolute",
              left: "0",
              top: "0",
              width: "130%",
              height: "150%",
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
            <EcosystemSection index={1} />
          </SwiperSlide>
          <SwiperSlide>
            <ReasonChooseSection index={2} />
          </SwiperSlide>
          <SwiperSlide>
            <OperationSection index={3} />
          </SwiperSlide>
          <SwiperSlide>
            <NftSection index={4} />;
          </SwiperSlide>
          <SwiperSlide>
            <CompanySection />
          </SwiperSlide>
        </Swiper>
      </PagingCtx.Provider>
    </Box>
  );
}
