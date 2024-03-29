import { Box, Button, Container, Grid, IconButton, Typography, useTheme } from "@mui/material";
import AnimWhenVisible from "../anim";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import ISwiper, { FreeMode, Mousewheel, Pagination, Parallax } from "swiper";
import React, { useState } from "react";
import { headerHeight } from "../layout/header";

type Props = {
  index?: number;
  fullscreen?: boolean;
};

export default function RoadmapSection(props: Props) {
  const theme = useTheme();
  const [swiper, setSwiper] = useState<ISwiper | null>(null);

  return (
    <Box
      className={props.fullscreen ? "fullscreenPage" : undefined}
      sx={{
        "--page-padding-top": props.fullscreen ? `${headerHeight}px` : 0, // landing always on PC always has header 90px
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        [theme.breakpoints.down("sm")]: {
          height: "auto",
          background: `url(/assets/imgs/background/5.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "left",
        },
      }}
    >
      <Container sx={{ height: "100%", padding: "50px 0" }}>
        <Box
          sx={{
            // width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <AnimWhenVisible variants={{ hidden: { opacity: 0, x: -100 } }} index={props.index}>
            <Typography
              variant="h2"
              textTransform={"uppercase"}
              sx={{
                mb: 4,
              }}
            >
              Roadmap
            </Typography>
          </AnimWhenVisible>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mb: 3,
            }}
          >
            <IconButton
              onClick={(e) => {
                e.preventDefault();
                swiper?.slidePrev();
              }}
            >
              <Box component="img" src="/assets/imgs/landing/ic_previous_slide.svg" alt="" />
            </IconButton>

            <IconButton
              onClick={(e) => {
                e.preventDefault();
                swiper?.slideNext();
              }}
            >
              <Box component="img" src="/assets/imgs/landing/ic_next_slide.svg" alt="" />
            </IconButton>
          </Box>
          <Box>
            <Swiper
              slidesPerView={1}
              spaceBetween={24}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
              }}
              // mousewheel={true}
              speed={800}
              // centeredSlides={true}
              // pagination={{
              //   clickable: true,
              // }}
              modules={[Mousewheel, Pagination]}
              onInit={(_swiper) => {
                setSwiper(_swiper);
              }}
              style={{
                // overflow: "hidden",
                width: "100%",
                height: "100%",
                padding: "1px",
              }}
            >
              <SwiperSlide style={{ height: "auto" }}>
                <RoadmapCard
                  title="Quý 4/2022"
                  checklists={[
                    "Xây dựng và phát triển kênh nhận diện Lucis City",
                    "Tích hợp tiện ích và đặc quyền Galaxy Platinum Card",
                    "Giao diện mở bán 200 Galaxy Platinum Card",
                    "Private Sale",
                    "Phát hành thẻ vật lý Galaxy Platinum Card",
                  ]}
                />
              </SwiperSlide>
              <SwiperSlide style={{ height: "auto" }}>
                <RoadmapCard
                  title="Quý 1/2023"
                  checklists={[
                    "Số hóa bất động sản sinh lời",
                    "Triển khai vận hành bất động sản đã số hóa thành công",
                    "Liên kết Wallet",
                  ]}
                />
              </SwiperSlide>
              <SwiperSlide style={{ height: "auto" }}>
                <RoadmapCard
                  title="Quý 2/2023"
                  checklists={[
                    "Tối ưu vận hành lợi nhuận",
                    "Số hóa động sản sinh lời",
                    "Phát triển thị trường bất động sản tại các quốc gia khác",
                  ]}
                />
              </SwiperSlide>
              <SwiperSlide style={{ height: "auto" }}>
                <RoadmapCard
                  title="Quý 3/2023"
                  checklists={[
                    "Nền tảng phiên bản mở rộng với 40.000 thành viên",
                    "Cho phép User gửi tài sản để số hóa",
                  ]}
                />
              </SwiperSlide>
              <SwiperSlide style={{ height: "auto" }}>
                <RoadmapCard
                  title="Quý 4/2023"
                  checklists={[
                    "NFTs các loại hình tài sản khác",
                    "Số hóa mô hình kinh doanh",
                    "Phát hành token quản trị",
                  ]}
                />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function RoadmapCard({ title, checklists }: { title: string; checklists: string[] }) {
  return (
    <Box
      sx={{
        background: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(15px)",
        borderRadius: "12px",
        height: "100%",
        // width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h5"
        sx={{ px: 6, pt: 7, fontSize: 20, fontWeight: 700, lineHeight: "36px" }}
        textTransform={"uppercase"}
      >
        {title}
      </Typography>
      <Box
        sx={{
          background: "rgba(255, 255, 255, 1)",
          height: "1px",
          mx: 6,
          mt: 8,
          mb: 4,
        }}
      />
      <Box sx={{ flex: 1, width: "100%", height: "100%" }}>
        <Box p={5}>
          {checklists.map((item) => (
            <Box key={`checklist_${item}`} sx={{ display: "flex", alignItems: "flex-start", gap: 2, mb: 1 }}>
              <img src="/assets/imgs/landing/check-icon.svg" alt="check-icon" style={{ height: 15, marginTop: 4 }} />
              <Typography
                variant="body1"
                sx={{
                  flex: "1",
                }}
              >
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
