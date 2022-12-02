import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigationMui from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { styled } from "@mui/system";

const IconNav = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: 12,
  },
}));
export default function BottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <BottomNavigationMui
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<IconNav src={"/assets/imgs/bottom_navbar/cards.svg"} />} />
        <BottomNavigationAction label="Invest" icon={<IconNav src={"/assets/imgs/bottom_navbar/status-up.svg"} />} />
        <BottomNavigationAction label="Member" icon={<IconNav src={"/assets/imgs/bottom_navbar/book.svg"} />} />
        <BottomNavigationAction label="Profile" icon={<IconNav src={"/assets/imgs/bottom_navbar/user-square.svg"} />} />
      </BottomNavigationMui>
    </>
  );
}
