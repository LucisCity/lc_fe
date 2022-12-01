import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import AnimWhenVisible from "../anim";
import { Center } from "../common/center";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Pagination, Parallax } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";

type Props = {
  index?: number;
};

export default function RoadmapSection(props: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: `url(${"assets/imgs/landing/img_bg_nft_section.png"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        [theme.breakpoints.down("sm")]: {
          height: "auto",
          overflowX: "hidden",
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "1440px",
          padding: "1px 144px",
          margin: "0px auto",
          height: "100%",
          [theme.breakpoints.down("md")]: {
            height: "auto",
            px: 6,
            pt: 29.5,
            pb: 19.25,
          },
        }}
      >
        <Center
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <AnimWhenVisible variants={{ hidden: { opacity: 0, x: -100 } }} index={props.index}>
            <Typography
              variant="h6"
              marginTop={1}
              // color="#9FA4BC"
              sx={{
                lineHeight: "56px",
                fontSize: "48px",
                fontWeight: "700",
                my: 15.75,
                // position: "absolute",
                // top: "30%",
                [theme.breakpoints.down("md")]: {
                  fontSize: "30px",
                  lineHeight: "43px",
                },
              }}
            >
              Roadmap
            </Typography>
          </AnimWhenVisible>
          <Box
            sx={{
              width: "100%",
              px: 8,
            }}
          >
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
        </Center>
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
