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
import { useReleaseOver } from "../../../hooks/use_long_press";
import { useCallback } from "react";
import { useRouter } from "next/router";

const actions = [
  { icon: <TelegramIcon />, name: "Telegram" },
  { icon: <img src="/assets/imgs/landing/zalo.svg" alt="zalo icon" width={20} />, name: "Zalo" },
  { icon: <LiveHelpIcon />, name: "FAQs" },
  { icon: <KeyboardArrowUpIcon />, name: "Jump to top" },
];
type Props = {
  bOffset?: number;
};
export const FabButton = (props: Props) => {
  const swiper = useSwiper();
  const router = useRouter();
  const onReleaseAfterEnoughTime = useCallback(() => router.push("/debug"), [router]);
  const [onPressStart, onPressRelease] = useReleaseOver(6000, onReleaseAfterEnoughTime);

  const fabAction = (name: string) => {
    switch (name) {
      case "Jump to top":
        if (swiper) {
          swiper.slideTo(0);
        } else {
          // try swiper on landing
          try {
            // @ts-ignore
            const swiper = document.querySelector("#landing-page-c").swiper;
            swiper.slideTo(0);
          } catch (e) {
            // No swiper or on mobile UI
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }
        }
        break;

      default:
        break;
    }
  };
  return (
    <div onMouseDown={onPressStart} onMouseUp={onPressRelease} onTouchStart={onPressStart} onTouchEnd={onPressRelease}>
      <SpeedDial
        ariaLabel="Live Support"
        sx={{
          position: "fixed",
          bottom: 16 + (props.bOffset ?? 0),
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
    </div>
  );
};
