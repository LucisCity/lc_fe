import { Box, Typography } from "@mui/material";
import PlaceOfferSection from "./place_offers";

export default function PitchTab() {
  return (
    <>
      <Box>
        <Typography variant="h3" mt={4}>
          Hightlight
        </Typography>
        <Typography variant="h5" mt={6}>
          Tầm view đẹp nhất: đối diện công viên ánh sáng 36 hecta, khu biệt thự thấp tầng Mannhattan, bến du thuyền,
          sông Tắc và cả sông Đồng Nai. Không gian tựa resort nghỉ dưỡng 5 sao, xanh mát, rộng rãi, kiến trúc sang trọng
          – độc đáo – khác biệt. Các tiện ích đặc quyền C-class dành riêng: phòng lounge cigar, khu chơi golf 3D, kid
          club, business lounge, phòng ballroom. Hồ bơi vô cực giật cấp 3 tầng, hồ bơi thác tràn, khu tập gym dưới nước,
          đảo dưỡng sinh,…
        </Typography>
        <PlaceOfferSection />
      </Box>
      <Box>
        <Typography variant="h3" mt={8}>
          Why Invest?
        </Typography>
        <Typography variant="h5" mt={6}>
          The Tropicana Garden Eco Village gives you valuable experiences when owning a unique position with Pure Green
          Echoes. Right here, the whole poetic sound of life is experienced by all the senses; creating a civilized,
          prosperous and peaceful population of The Tropicana Garden Eco Village.
        </Typography>
        <Typography variant="h5" mt={6}>
          The project is located in a convenient traffic area, with complete infrastructure, easy connection to key
          administrative, commercial and tourist areas of Bao Loc City. Convenient to move to Da Lat, Bien Hoa, Ho Chi
          Minh City via National Highway 20 as well as easy links to neighboring provinces.
        </Typography>
      </Box>
    </>
  );
}
