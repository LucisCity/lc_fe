import { styled } from "@mui/system";

const footerHeight = 550;
const FooterStyled = styled("footer")(({ theme }) => ({
  height: footerHeight,
  width: "100%",
  background: "rgba(50, 100, 155, 0.2)",
  backdropFilter: "blur(12px)",
  display: "flex",
  alignItems: "center",
}));
export default function Footer() {
  return <FooterStyled>Footer</FooterStyled>;
}
