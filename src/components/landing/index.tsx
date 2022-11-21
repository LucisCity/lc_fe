import { styled } from "@mui/system";
import { headerHeight } from "../layout/header";

const MainStyled = styled("main")(({ theme }) => ({
  height: `calc(100vh - ${headerHeight}px)`,
  width: "100%",
  background: "rgba(100, 200, 155, 0.2)",
  backdropFilter: "blur(12px)",
  display: "flex",
  alignItems: "center",
}));

export const LandingPage = () => {
  return <MainStyled>landing</MainStyled>;
};
