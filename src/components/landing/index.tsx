import { Box, useMediaQuery, useTheme } from "@mui/material";
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
import { TopSection } from "./top_section";
import { CardSection } from "./card_section";

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
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const [paging, setPaging] = useState<PagingContextType>({
    activeIndex: 0,
    preIndex: 0,
  });
  useScroll();
  const size = useWindowSize();

  return (
    <Box>
      {size.width < 768 ? (
        <Box>
          <LandingHeader slideActive={slideActive} />
          <CompanySection />
          <EcosystemSection />
          <ReasonChooseSection />
          <OperationSection />
          <NftSection />
          <CompanySection />
        </Box>
      ) : (
        <>
          <LandingHeader slideActive={slideActive} />
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
                  enabled: matches,
                }}
                modules={[Parallax, Mousewheel, Pagination]}
                parallax={true}
                // onChangeDirection={(swiper) => {

                // }}
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
                  <TopSection index={0} />
                </SwiperSlide>
                <SwiperSlide>
                  <CompanySection index={1} />
                </SwiperSlide>
                <SwiperSlide>
                  <CardSection index={2} />
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
                  <CompanySection index={7} />
                </SwiperSlide>
              </Swiper>
            </PagingCtx.Provider>
          </Box>
        </>
      )}
    </Box>
  );
}
