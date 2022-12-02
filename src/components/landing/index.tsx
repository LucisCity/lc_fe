import { Box, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import { FreeMode, Mousewheel, Pagination, Parallax } from "swiper";
import { EcosystemSection } from "./ecosystem_section";
import { ReasonChooseSection } from "./reason_choose_section";
import { OperationSection } from "./operation_section";
import { CompanySection } from "./company_section";
import { useState } from "react";
import Header from "../layout/header";
import useScroll from "../../hooks/useScroll";
import { PagingContextType, PagingCtx } from "../anim/swip_visible_anim";
import NftSection from "./nft_section";
import { TopSection } from "./top_section";
import { CardSection } from "./card_section";
import { useWindowSize } from "../../hooks/use_window_size";
import s from "./landing.module.sass";
import Indicator from "./components/indicator";
import { FabButton } from "./components/fab_button";
import RoadmapSection from "./roadmap_section";
import PartnerSection from "./partner_section";
import Footer from "../layout/footer";
import ComunitySection from "./community_section";
import { Background } from "./components/background";

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
  const [slideActive, setSlideActive] = useState(0);
  const theme = useTheme();
  const [paging, setPaging] = useState<PagingContextType>({
    activeIndex: 0,
    preIndex: 0,
  });
  const { position } = useScroll();

  const size = useWindowSize();

  if (size.width <= theme.breakpoints.values.sm) {
    return (
      <Box
        sx={{
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <Header slideActive={position > 100 ? 1 : 0} />
        <TopSection />
        <CompanySection />
        <CardSection />
        <EcosystemSection />
        <ReasonChooseSection />
        <OperationSection />
        <NftSection />
        <RoadmapSection />
        <PartnerSection />
        <ComunitySection />
      </Box>
    );
  }

  return (
    <Box className={s.container}>
      <PagingCtx.Provider value={paging}>
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={0}
          mousewheel={true}
          speed={800}
          freeMode={false}
          modules={[Parallax, Mousewheel, Pagination, FreeMode]}
          parallax={true}
          onActiveIndexChange={(swiper) => {
            setSlideActive(swiper.activeIndex);
            setPaging({
              activeIndex: swiper.activeIndex,
              preIndex: swiper.previousIndex,
            });
          }}
          style={{
            overflow: "hidden",
            width: "100%",
            height: "100%",
          }}
        >
          <Box slot="container-start">
            <Header slideActive={slideActive} />
          </Box>

          <Box
            slot="container-start"
            sx={{
              // background: `url(${"/assets/imgs/member/background.jpg"})`, ///assets/imgs/landing/img_bg_section_mid.png
              position: "absolute",
              left: "0",
              top: "0",
              width: "130%",
              height: "150%",
              // backgroundSize: "cover",
              // backgroundPosition: "center",
            }}
            data-swiper-parallax="-23%"
          >
            <Background />
          </Box>

          <SwiperSlide>
            <TopSection />
          </SwiperSlide>
          <SwiperSlide>
            <CompanySection index={1} />
          </SwiperSlide>
          <SwiperSlide>
            <CardSection index={2} disabledBackground />
          </SwiperSlide>
          <SwiperSlide>
            <EcosystemSection index={3} />
          </SwiperSlide>
          <SwiperSlide>
            <ReasonChooseSection index={4} />
          </SwiperSlide>
          <SwiperSlide>
            <OperationSection index={5} />
          </SwiperSlide>
          <SwiperSlide>
            <NftSection index={6} />;
          </SwiperSlide>
          <SwiperSlide>
            <RoadmapSection index={7} />;
          </SwiperSlide>
          <SwiperSlide>
            <PartnerSection index={8} />
          </SwiperSlide>
          <SwiperSlide>
            <ComunitySection index={9} />
          </SwiperSlide>
          <SwiperSlide>
            <Footer style={{ position: "absolute", bottom: 0 }} disabledBackground />
          </SwiperSlide>

          <Box
            sx={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translate(0px, -50%)",
              zIndex: 900,
            }}
          >
            <Indicator title="Lucis City" isActive={paging.activeIndex === 1} index={1} />
            <Indicator title="Galaxy Platinum" isActive={paging.activeIndex === 2} index={2} />
            <Indicator title="Hệ sinh thái" isActive={paging.activeIndex === 3} index={3} />
            <Indicator title="Should choose" isActive={paging.activeIndex === 4} index={4} />
            <Indicator title="Openration" isActive={paging.activeIndex === 5} index={5} />
            <Indicator title="NFT hóa BĐS" isActive={paging.activeIndex === 6} index={6} />
            <Indicator title="Roadmap" isActive={paging.activeIndex === 7} index={7} />
            <Indicator title="Partner & Investor" isActive={paging.activeIndex === 8} index={8} />
            <Indicator title="Community" isActive={paging.activeIndex === 9} index={9} />
          </Box>
          <FabButton />
        </Swiper>
      </PagingCtx.Provider>
    </Box>
  );
}
