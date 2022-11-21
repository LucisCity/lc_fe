import { Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import { Left } from "../../common/left";
import { Right } from "../../common/right";

export const headerHeight = 90;
const HeaderStyled = styled("div")(({ theme }) => ({
  minHeight: headerHeight,
  width: "100%",
  background: "rgba(255, 255, 255, 0.2);",
  backdropFilter: "blur(12px)",
  display: "flex",
  alignItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 1,
}));

const Ul = styled("ul")(({ theme }) => ({
  display: "flex",
  listStyleType: "none",
  gap: theme.spacing(1),
}));

const HeaderNextLink = styled(Link)(({ theme }) => ({
  "&:link": {
    textDecoration: "none",
  },
  "&:hover": {
    textDecoration: "none",
  },
  "&:visited": {
    textDecoration: "none",
  },
  "&:active": {
    textDecoration: "none",
  },
}));

interface IProps {}

const Header = (props: IProps) => {
  return (
    <>
      <HeaderStyled>
        <Container>
          <Grid container>
            <Grid item id="logo" xs={3}>
              <Left>Logo</Left>
            </Grid>
            <Grid item id="menu" xs={6}>
              <nav>
                <Ul>
                  <li>
                    <HeaderNextLink href="/"> Home </HeaderNextLink>
                  </li>
                  <li>
                    <HeaderNextLink href="/"> Member </HeaderNextLink>
                  </li>
                  <li>
                    <HeaderNextLink href="/"> Invest </HeaderNextLink>
                  </li>
                  <li>
                    <HeaderNextLink href="/"> Marketplace </HeaderNextLink>
                  </li>
                  <li>
                    <HeaderNextLink href="/"> Blog </HeaderNextLink>
                  </li>
                  <li>
                    <HeaderNextLink href="/"> Contact </HeaderNextLink>
                  </li>
                </Ul>
              </nav>
            </Grid>
            <Grid item xs={3} id="auth">
              <Right>
                <Button variant="contained">Log in</Button>
              </Right>
            </Grid>
          </Grid>
        </Container>
      </HeaderStyled>
    </>
  );
};
export default Header;
