import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Card } from "./components/card";
import InvestImageBox from "./components/image_box";
import InvestDetailHeader from "./components/invest_detail_header";
import InvestDetailNftCard from "./components/invest_detail_nft_card";
import InvestDetailSteper from "./components/invest_detail_steper";

export function InvestDetailPage() {
  return (
    <Box
      sx={{
        background: "background.default",
        minHeight: "100vh",
      }}
    >
      <Box
        maxWidth="1440px"
        sx={{
          px: [6, 12, 12, 24, 36],
          pt: 22.5,
          overflow: "hidden",
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
        <Divider sx={{ my: 8 }} />
        <Typography variant="h3" mb={6}>
          Có thể bạn quan tâm
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: ["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)", "repeat(4, 1fr)"],
            gap: 6,
          }}
        >
          {fakeData.map((item, index) => {
            return <Card key={"invest" + index} {...item} isCollapseContent={false} />;
          })}
        </Box>
      </Box>
    </Box>
  );
}

const fakeData = [
  {
    label: "VincomBaTrieu",
    name: "VincomBaTrieu",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "123532",
    image:
      "https://statics.vincom.com.vn/vincom-tttm/gioi_thieu/anh_bai_viet/Hinh-anh-cac-thuong-hieu-o-Vincom-Ba-Trieu-so-1_1632322535.jpeg",
  },
  {
    label: "NovaLand",
    name: "NovaLand",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "624542",
    image:
      "https://cafefcdn.com/thumb_w/650/203337114487263232/2022/12/9/photo1670561661183-16705616612862130643853.jpeg",
  },
  {
    label: "Ocenpark",
    name: "Ocenpark",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "123537",
    image: "https://www.villasvinhomesriverside.com/images/users/images/vinhomes-ocean-park-1.jpg",
  },
  {
    label: "Royal City",
    name: "Royal City",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "343632",
    image: "https://www.villasvinhomesriverside.com/images/users/images/vinhomes-ocean-park-1.jpg",
  },
  {
    label: "Phú Nhuận",
    name: "Phú Nhuận",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "53638",
    image: "https://batdongsanhungthinh.com.vn/wp-content/uploads/2017/10/Orchard-parkview-1.jpg",
  },
  {
    label: "Grandland",
    name: "Grandland",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "223032",
    image: "https://www.villasvinhomesriverside.com/images/users/images/vinhomes-ocean-park-1.jpg",
  },
  {
    label: "Aqualand",
    name: "Aqualand",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "127532",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8TOGifEREG12639XMUxwB92qhsagOV7U06C_flRDp1DSD2Vk87DvwFu2rLyeNCCOdIs&usqp=CAU",
  },
  {
    label: "Thanh Bình Park",
    name: "Thanh Bình Park",
    address: "3891 Ranchview Dr. Richardson, California 62639",
    price: "53032",
    image: "https://danhkhoireal.vn/wp-content/uploads/2019/01/masteri-parkland.jpg",
  },
];
