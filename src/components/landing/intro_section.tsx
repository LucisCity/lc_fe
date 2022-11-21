import { Box } from "@mui/material";
import { styled } from "@mui/system";

const MainItemComponent = styled(Box)(({ theme }) => ({
  height: `100vh`,
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
