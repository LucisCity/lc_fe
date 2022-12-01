import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import TelegramIcon from "@mui/icons-material/Telegram";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import zIndex from "@mui/material/styles/zIndex";
import { useSwiper } from "swiper/react";

const actions = [
  { icon: <TelegramIcon />, name: "Telegram" },
  { icon: <img src="/assets/imgs/landing/ic_zalo.svg" alt="zalo icon" />, name: "Zalo" },
  { icon: <LiveHelpIcon />, name: "FAQs" },
  { icon: <KeyboardArrowUpIcon />, name: "Jump to top" },
];

export const FabButton = () => {
  const swiper = useSwiper();

  const fabAction = (name: string) => {
    switch (name) {
      case "Jump to top":
        swiper.slideTo(0);
        break;

      default:
        break;
    }
  };
  return (
    <>
      <SpeedDial
        ariaLabel="fab button"
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          zIndex: zIndex.fab,
        }}
        FabProps={{
          sx: {
            background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
            filter: "drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25))",
            ":hover": {
              background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
            },
          },
        }}
        icon={<SpeedDialIcon sx={{ color: "#504C67" }} />}
      >
        {actions.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={() => fabAction(item.name)}
          />
        ))}
      </SpeedDial>
    </>
  );
};
