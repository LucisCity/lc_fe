import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import AnimComponent from "../../anim/anim_component";
import zIndex from "@mui/material/styles/zIndex";

export default function FabButton() {
  const [isShow, setIsShow] = useState(false);

  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "103px",
        right: "53px",
        zIndex: zIndex.fab,
      }}
    >
      <AnimComponent enable={isShow}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            marginBottom: 2,
          }}
        >
          <Box
            component="img"
            src="/assets/imgs/landing/ic_zalo.svg"
            sx={{
              width: "32px",
              heiht: "32px",
            }}
          />
          <Box
            component="img"
            src="/assets/imgs/landing/ic_discoard.svg"
            sx={{
              width: "32px",
              heiht: "32px",
            }}
          />
          <Box
            component="img"
            src="/assets/imgs/landing/ic_telegram.svg"
            sx={{
              width: "32px",
              heiht: "32px",
            }}
          />
          <Box
            component="img"
            src="/assets/imgs/landing/ic_facebook.svg"
            sx={{
              width: "32px",
              heiht: "32px",
            }}
          />
          {/* //tele -fb */}
        </Box>
      </AnimComponent>
      <AnimComponent
        variants={{
          visible: { opacity: 1, rotate: 90 },
          hidden: { opacity: 1, rotate: -90 },
        }}
        enable={isShow}
      >
        <Fab
          sx={{
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
            backdropFilter: "blur(3px)",
            color: "primary",
          }}
          onClick={() => {
            setIsShow((pre) => !pre);
          }}
        >
          <AddIcon />
        </Fab>
      </AnimComponent>
    </Box>
  );
}
