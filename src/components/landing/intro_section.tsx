import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { headerHeight } from "../layout/header";

const MainItemComponent = styled(Box)(({ theme }) => ({
  height: `calc(100vh - ${headerHeight}px)`,
  width: "100%",
}));
export const IntroSection = () => {
  return (
    <MainItemComponent
      id="intro-section"
      sx={{
        background: `url(${"/landing/intro-luciscity.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
      }}
    ></MainItemComponent>
  );
};
