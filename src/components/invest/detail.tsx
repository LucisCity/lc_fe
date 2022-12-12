import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { useState } from "react";
import { Center } from "../common/center";
import { Card } from "./components/card";
import InvestImageBox from "./components/image_box";
import InvestorTab from "./components/investor_tab";
import InvestDetailHeader from "./components/invest_detail_header";
import InvestDetailNftCard from "./components/invest_detail_nft_card";
import InvestDetailSteper from "./components/invest_detail_steper";
import PitchTab from "./components/pitch_tab";
import PlaceOfferSection from "./components/place_offers";
import UpdatesTab from "./components/updates_tab";

export function InvestDetailPage() {
  const [tabIdx, setTabIdx] = useState(0);

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
          pb: 6,
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
                gap: 14,
                ml: 5,
              }}
            >
              <Button
                variant="text"
                color="secondary"
                sx={{
                  opacity: tabIdx === 0 ? 1 : 0.2,
                }}
                onClick={() => {
                  setTabIdx(0);
                }}
              >
                Pitch
              </Button>
              <Button
                variant="text"
                color="secondary"
                sx={{
                  opacity: tabIdx === 1 ? 1 : 0.2,
                }}
                onClick={() => {
                  setTabIdx(1);
                }}
              >
                Updates
              </Button>
              <Button
                variant="text"
                color="secondary"
                sx={{
                  opacity: tabIdx === 2 ? 1 : 0.2,
                }}
                onClick={() => {
                  setTabIdx(2);
                }}
              >
                Investors
              </Button>
            </Box>
            <Divider sx={{ mt: 4 }} />
            {tabIdx === 0 ? <PitchTab /> : tabIdx === 1 ? <UpdatesTab /> : <InvestorTab />}
          </Box>
          <Box>
            <InvestDetailNftCard />
            <Typography variant="h3" mt="24px">
              Giấy tờ pháp lý
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<Box component="img" src="/assets/imgs/invest/icons/ic_download.svg" alt="" />}
              sx={{
                height: "81px",
                width: "100%",
                mt: "20px",
                color: "#6555EE",
              }}
            >
              Giấy tờ sử dụng nhà đất.PDF
            </Button>
          </Box>
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
        <Divider sx={{ my: 8 }} />
        <Typography variant="h3" mb={6}>
          Dự án bạn đã xem
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
