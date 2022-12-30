import { Box, Grid, Typography } from "@mui/material";
import { ProjectOfferGql } from "../../../../gql/graphql";

const OFFER_DATA = [
  {
    icon: "/assets/imgs/invest/icons/demo/ic_school.svg",
    title: "Trường học",
  },
  {
    icon: "/assets/imgs/invest/icons/demo/ic_gold.svg",
    title: "Sân golf",
  },
  {
    icon: "/assets/imgs/invest/icons/demo/ic_airport.svg",
    title: "Sân bay",
  },
  {
    icon: "/assets/imgs/invest/icons/demo/ic_hospital.svg",
    title: "Bệnh viện",
  },
  {
    icon: "/assets/imgs/invest/icons/demo/ic_gym.svg",
    title: "Phòng Gym",
  },
  {
    icon: "/assets/imgs/invest/icons/demo/ic_bank.svg",
    title: "Ngân hàng",
  },
  {
    icon: "/assets/imgs/invest/icons/demo/ic_gas_station.svg",
    title: "Trạm xăng dầu",
  },
  {
    icon: "/assets/imgs/invest/icons/demo/ic_pool.svg",
    title: "Bể bơi",
  },
  {
    icon: "/assets/imgs/invest/icons/demo/ic_highway.svg",
    title: "Đường quốc lộ",
  },
];
interface IProps {
  offers?: ProjectOfferGql[];
}
export default function PlaceOfferSection({ offers }: IProps) {
  return (
    <Box>
      <Typography variant="h3" mt={8}>
        What this place offers
      </Typography>
      <Grid container mt={1} spacing={6}>
        {offers?.map((item) => (
          <Grid key={`place_offer_${item.title}`} item xs={6} md={4}>
            <PlaceOfferItem icon={item.icon} title={item.title} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function PlaceOfferItem({ icon, title }: { icon: string; title: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Box component="img" src={icon} />
      <Typography variant="h5">{title}</Typography>
    </Box>
  );
}
