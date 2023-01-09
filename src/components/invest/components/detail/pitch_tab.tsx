import { Box, Typography } from "@mui/material";
import { ProjectOfferGql } from "../../../../gql/graphql";
import PlaceOfferSection from "./place_offers";

interface IProps {
  highlight?: string;
  investReason?: string;
  offers?: ProjectOfferGql[];
}
export default function PitchTab(props: IProps) {
  return (
    <>
      <Box>
        <Typography variant="h3" mt={4}>
          Highlight
        </Typography>
        <Typography variant="h5" mt={6}>
          {props.highlight}
        </Typography>
        <PlaceOfferSection offers={props.offers ?? []} />
      </Box>
      <Box>
        <Typography variant="h3" mt={8}>
          Why Invest?
        </Typography>
        <Typography variant="h5" mt={6}>
          {props.investReason}
        </Typography>
        {/* <Typography variant="h5" mt={6}>
          The project is located in a convenient traffic area, with complete infrastructure, easy connection to key
          administrative, commercial and tourist areas of Bao Loc City. Convenient to move to Da Lat, Bien Hoa, Ho Chi
          Minh City via National Highway 20 as well as easy links to neighboring provinces.
        </Typography> */}
      </Box>
    </>
  );
}
