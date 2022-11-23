import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import Link from "next/link";
import { Left } from "../../common/left";
import { Right } from "../../common/right";
import useWindowPosition from "../../../hooks/use_window_position";

export const headerHeight = 90;
export const extendHeaderHeight = 500;
const HeaderStyled = styled("div", { shouldForwardProp: (prop) => prop !== "open" })<{ open?: boolean }>(
  ({ theme, open }) => ({
    width: "100%",
    height: extendHeaderHeight,
    background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
    backdropFilter: "blur(12px)",
    position: "fixed",
    top: 0,
    zIndex: 1,
    transition: theme.transitions.create(["height"], { duration: 1000 }),
    ...(!open && {
      height: headerHeight,
      transition: theme.transitions.create(["height"], { duration: 1000 }),
    }),
  }),
);

const Menubar = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
}));

const ExtendBox = styled("div", { shouldForwardProp: (prop) => prop !== "open" })<{ open?: boolean }>(
  ({ theme, open }) => ({
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: -1,
    background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
    backdropFilter: "blur(4px)",
    height: extendHeaderHeight,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(17),
    borderLeft: "1px solid",
    borderImage:
      "linear-gradient(102.67deg, #C5CEE8 -18.34%, #DFE7FD -18.33%, rgba(207, 216, 241, 0.12) 92.76%) 1 100%",
    transition: theme.transitions.create(["height", "transform"], { duration: 1000 }),
    ...(!open && {
      transform: "translateY(-500px)",
      height: 0,
      transition: theme.transitions.create(["transform", "height"], { duration: 1000 }),
    }),
  }),
);

const GridDot = styled("img", { shouldForwardProp: (prop) => prop !== "open" })<{ open?: boolean }>(
  ({ theme, open }) => ({
    position: "absolute",
    top: 0,
    zIndex: -1,
    right: 0,
    transition: theme.transitions.create(["transform", "height"], { duration: 1000 }),
    ...(!open && {
      transform: "translateY(-500px)",
      transition: theme.transitions.create(["transform", "height"], { duration: 1000 }),
    }),
  }),
);

const Ul = styled("ul")(({ theme }) => ({
  display: "flex",
  listStyleType: "none",
  gap: theme.spacing(3),
  margin: 0,
  alignItems: "center",
  height: headerHeight,
}));

const HeaderNextLink = styled(Link)(({ theme }) => ({
  color: "#504C67",
  fontWeight: 500,
  fontSize: 16,
  position: "relative",
  "&:before": {
    content: `""`,
    position: "absolute",
    bottom: -20,
    width: "0%",
    borderBottom: "2px solid #504C67",
    transition: (theme.transitions as any).create(["width"]),
  },
  "&:link": {
    textDecoration: "none",
  },
  "&:hover": {
    textDecoration: "none",
    "&:before": {
      width: "100%",
      transition: (theme.transitions as any).create(["width"]),
    },
  },
  "&:visited": {
    textDecoration: "none",
  },
  "&:active": {
    textDecoration: "none",
  },
}));

const ButtonLogin = styled(Button)(({ theme }) => ({
  background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
  filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))",
  backdropFilter: "blur(2px)",
  borderRadius: 8,
  height: 50,
  width: 150,
  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  textTransform: "capitalize",
  color: "#504C67",
  "&:hover": {
    background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
    cursor: "pointer",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },
}));

const LandingHeader = () => {
  const scrollPosition = useWindowPosition();

  return (
    <HeaderStyled open={scrollPosition === 0}>
      <Menubar>
        <Container>
          <Grid container>
            <Grid item id="logo" xs={3}>
              <Left>Logo</Left>
            </Grid>
            <Grid item id="menu" xs={6} style={{ position: "relative" }}>
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
              <ExtendBox open={scrollPosition === 0}>
                <Typography
                  variant="h2"
                  sx={{
                    pt: "40px",
                  }}
                >
                  Established reader distracted
                </Typography>
                <Typography
                  sx={{
                    pt: "28px",
                  }}
                >
                  Fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </Typography>
                <Button
                  sx={{
                    mt: 5,
                    color: "#504C67",
                  }}
                >
                  LEARN MORE {`------->`}
                </Button>
              </ExtendBox>
            </Grid>
            <Grid item xs={3} id="auth">
              <Box height={"100%"} position={"relative"}>
                <Right>
                  <ButtonLogin variant="contained">Log in </ButtonLogin>
                  <IconButton sx={(theme) => ({ ml: theme.spacing(3) })}>
                    <img src="/assets/imgs/landing/global.svg" alt="" />
                  </IconButton>
                </Right>
                <GridDot open={scrollPosition === 0} src={"/assets/imgs/landing/header-decor.png"} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Menubar>
      <Container>
        <Grid container>
          <Grid item xs={3} />
          <Grid item xs={6}></Grid>
          <Grid item xs={3} />
        </Grid>
      </Container>
    </HeaderStyled>
  );
};
export default LandingHeader;
