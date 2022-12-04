import { Box, Typography } from "@mui/material";
import { useSwiper } from "swiper/react";

export default function Indicator({ isActive, title, index }: { isActive: boolean; title: string; index: number }) {
  const swiper = useSwiper();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        py: 2,
        my: 1,
        cursor: "pointer",
      }}
      onClick={() => {
        swiper.slideTo(index);
      }}
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: isActive ? "14px" : "12px",
          color: isActive ? "#504C67" : "white",
          marginRight: "6px",
          opacity: isActive ? 1 : "var(--title-opa)",
          transition: "opacity 500ms",
          willChange: "opacity",
          padding: "0 4px",
          backdropFilter: "blur(3px)",
          borderRadius: 10,
          textShadow: isActive ? "none" : "0 0 3px black",
        }}
      >
        {title}
      </Typography>
      <Box
        component="img"
        src={isActive ? "/assets/imgs/landing/ic_bullet_active.svg" : "/assets/imgs/landing/ic_bullet.svg"}
      />
    </Box>
  );
}
