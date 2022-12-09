import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Center } from "../common/center";
import { NftInfoCard } from "../landing/nft_section";
import InvestImageBox from "./components/image_box";
import InvestDetailHeader from "./components/invest_detail_header";
import InvestDetailNftCard from "./components/invest_detail_nft_card";
import Invest_detail_nft_card from "./components/invest_detail_nft_card";
import InvestDetailSteper from "./components/invest_detail_steper";

export function InvestDetailPage() {
  return (
    <Box
      sx={{
        background: "background.default",
        minHeight: "100vh",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: [6, 6, 36],
          pt: 22.5,
        }}
      >
        <InvestDetailHeader />
        <InvestImageBox />
        <InvestDetailSteper />
        <Box
          sx={{
            width: "100%",
            mt: 13,
            display: ["block", "block", "flex"],
            gap: 17,
          }}
        >
          <Box
            sx={{
              flex: "1",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 17,
              }}
            >
              <Button variant="text">Pitch</Button>
              <Button variant="text" disabled>
                Updates
              </Button>
              <Button variant="text" disabled>
                Investors
              </Button>
            </Box>
            <Divider sx={{ mt: 4 }} />
            <Box>
              <Typography variant="h3" mt={4}>
                Hightlight
              </Typography>
              <Typography variant="h5" mt={6}>
                Tầm view đẹp nhất: đối diện công viên ánh sáng 36 hecta, khu biệt thự thấp tầng Mannhattan, bến du
                thuyền, sông Tắc và cả sông Đồng Nai. Không gian tựa resort nghỉ dưỡng 5 sao, xanh mát, rộng rãi, kiến
                trúc sang trọng – độc đáo – khác biệt. Các tiện ích đặc quyền C-class dành riêng: phòng lounge cigar,
                khu chơi golf 3D, kid club, business lounge, phòng ballroom. Hồ bơi vô cực giật cấp 3 tầng, hồ bơi thác
                tràn, khu tập gym dưới nước, đảo dưỡng sinh,…
              </Typography>
              <Typography variant="h3" mt={8}>
                What this place offers
              </Typography>
            </Box>
          </Box>
          <InvestDetailNftCard />
        </Box>
      </Container>
    </Box>
  );
}
