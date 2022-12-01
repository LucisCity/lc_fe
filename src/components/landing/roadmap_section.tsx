import { Box, Button, Grid, IconButton, Typography, useTheme } from "@mui/material";
import AnimWhenVisible from "../anim";
import { Center } from "../common/center";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import ISwiper, { FreeMode, Mousewheel, Pagination, Parallax } from "swiper";
import { useState } from "react";

type Props = {
  index?: number;
};

export default function RoadmapSection(props: Props) {
  const theme = useTheme();
  const [swiper, setSwiper] = useState<ISwiper | null>(null);

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
              variant="h3"
              sx={{
                mb: 15.75,
              }}
            >
              Roadmap
            </Typography>
          </AnimWhenVisible>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "20px",
              mb: "20px",
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
                    "Tích hợp tiện ích và đặc quyền Thẻ Hawk Card",
                    "Giao diện mở bán 200 Thẻ Hawk Card",
                    "Private Sale",
                  ]}
                />
              </SwiperSlide>
              <SwiperSlide style={{ height: "auto" }}>
                <RoadmapCard
                  title="Quý 1/2023"
                  checklists={[
                    "Public Sale",
                    "Các sự kiện hoạt động Marketing",
                    "NFTs bất động sản",
                    "Tích hợp tiện ích và đặc quyền Thẻ Hawk Card",
                    "Giao diện mở bán 200 Thẻ Hawk Card",
                    "Private Sale",
                  ]}
                />
              </SwiperSlide>
              <SwiperSlide style={{ height: "auto" }}>
                <RoadmapCard
                  title="Quý 2/2023"
                  checklists={[
                    "Xây dựng và phát triển kênh nhận diện Lucis City",
                    "Tích hợp tiện ích và đặc quyền Thẻ Hawk Card",
                    "Giao diện mở bán 200 Thẻ Hawk Card",
                    "Private Sale",
                  ]}
                />
              </SwiperSlide>
              <SwiperSlide style={{ height: "auto" }}>
                <RoadmapCard
                  title="Quý 3/2022"
                  checklists={[
                    "Xây dựng và phát triển kênh nhận diện Lucis City",
                    "Tích hợp tiện ích và đặc quyền Thẻ Hawk Card",
                    "Giao diện mở bán 200 Thẻ Hawk Card",
                    "Private Sale",
                  ]}
                />
              </SwiperSlide>
              <SwiperSlide style={{ height: "auto" }}>
                <RoadmapCard
                  title="Quý 4/2022"
                  checklists={[
                    "Xây dựng và phát triển kênh nhận diện Lucis City",
                    "Tích hợp tiện ích và đặc quyền Thẻ Hawk Card",
                    "Giao diện mở bán 200 Thẻ Hawk Card",
                    "Private Sale",
                  ]}
                />
              </SwiperSlide>
              <SwiperSlide style={{ height: "auto" }}>
                <RoadmapCard
                  title="Quý 1/2024"
                  checklists={[
                    "Xây dựng và phát triển kênh nhận diện Lucis City",
                    "Tích hợp tiện ích và đặc quyền Thẻ Hawk Card",
                    "Giao diện mở bán 200 Thẻ Hawk Card",
                    "Private Sale",
                  ]}
                />
              </SwiperSlide>
              <SwiperSlide style={{ height: "auto" }}>
                <RoadmapCard
                  title="Quý 2/2024"
                  checklists={[
                    "Xây dựng và phát triển kênh nhận diện Lucis City",
                    "Tích hợp tiện ích và đặc quyền Thẻ Hawk Card",
                    "Giao diện mở bán 200 Thẻ Hawk Card",
                    "Private Sale",
                  ]}
                />
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function RoadmapCard({ title, checklists }: { title: string; checklists: string[] }) {
  return (
    <Box
      sx={{
        background: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(3px)",
        borderRadius: "12px",
        height: "100%",
        // width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "700",
          lineHeight: "36px",
          p: 6,
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          background: "rgba(255, 255, 255, 1)",
          height: "1px",
          mx: 6,
          mt: 7,
          mb: 9,
        }}
      />
      <Box sx={{ flex: 1, width: "100%", height: "100%" }}>
        <Box p={5}>
          {checklists.map((item) => (
            <Box key={`checklist_${item}`} sx={{ display: "flex" }}>
              <Box
                sx={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: "black",
                  mt: "8px",
                  mr: "8px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "24px",
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
