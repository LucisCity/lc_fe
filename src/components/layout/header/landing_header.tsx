import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import { Box, styled, useTheme } from "@mui/system";
import Link from "next/link";
import { Left } from "../../common/left";
import { Right } from "../../common/right";
import { Center } from "../../common/center";
import { SideBarMenu } from "./side_bar_menu";
import React from "react";
export const headerHeight = 90;
export const extendHeaderHeight = 500;
const HeaderStyled = styled("div", { shouldForwardProp: (prop) => prop !== "open" })<{ open?: boolean }>(
  ({ theme, open }) => ({
    width: "100%",
    height: extendHeaderHeight,
    background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
    backdropFilter: "blur(12px)",
    position: "absolute",
    top: 0,
    zIndex: 2,
    borderBottom: "1px solid",
    borderImageSlice: 1,
    borderImageSource: "linear-gradient(90deg, #FFFFFF 0.56%, rgba(255, 255, 255, 0) 100%)",
    //@ts-ignore
    transition: theme.transitions.create(["height"], { duration: 1000 }),
    ...(!open && {
      //@ts-ignore
      transition: theme.transitions.create(["height"], { duration: 1000 }),
      height: headerHeight,
    }),
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
    },
  }),
);
const MenuBar = styled("div")(({ theme }) => ({
  width: "100%",
  height: headerHeight,

  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const ExtendBox = styled("div")(({ theme }) => ({
  width: "100%",
  background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
  backdropFilter: "blur(4px)",
  height: extendHeaderHeight,
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(20),
  borderLeft: "1px solid",
  borderImageSlice: 1,
  borderImageSource: "linear-gradient(102.67deg, #C5CEE8 -18.34%, #DFE7FD -18.33%, rgba(207, 216, 241, 0.12) 92.76%)",
  [theme.breakpoints.down("sm")]: {
    background: "transparent",
    backdropFilter: "none",
    border: "none",
  },
}));

const SupportPage = styled("div", { shouldForwardProp: (prop) => prop !== "open" })<{ open?: boolean }>(
  ({ theme, open }) => ({
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: -1,
    height: extendHeaderHeight,
    //@ts-ignore
    transition: theme.transitions.create(["height", "transform"], { duration: 1200 }),
    ...(!open && {
      transform: "translateY(-500px)",
      //@ts-ignore
      transition: theme.transitions.create(["transform", "height"], { duration: 1200 }),
    }),
  }),
);

const GridDot = styled("img")(({ theme }) => ({
  position: "absolute",
  top: 0,
  zIndex: -1,
  right: 0,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const CoinImage = styled("img")(({ theme }) => ({
  position: "absolute",
  bottom: 100,
  zIndex: -1,
  left: -60,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Ul = styled("ul")(({ theme }) => ({
  display: "flex",
  width: "100%",
  listStyleType: "none",
  gap: theme.spacing(6),
  margin: 0,
  padding: 0,
  alignItems: "center",
  height: headerHeight,
  borderLeft: "1px solid",
  borderImageSlice: 1,
  borderImageSource: "linear-gradient(180deg, #FFFFFF 0.56%, rgba(255, 255, 255, 0) 100%)",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(4),
  },
}));

export const HeaderNextLink = styled(Link, { shouldForwardProp: (prop) => prop !== "isSidebar" })<{
  isSidebar?: boolean;
}>(({ theme, isSidebar }) => ({
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

  [theme.breakpoints.down("md")]: {
    fontSize: 12,
  },
  ...(isSidebar && {
    fontSize: "20px !important",
    fontWeight: "700 !important",
  }),
}));

export const ButtonLogin = styled(Button)(({ theme }) => ({
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

  [theme.breakpoints.down("md")]: {
    height: 40,
    width: 120,
  },
}));

export const ToggleDrawer = styled(IconButton)(({ theme }) => ({
  background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
  borderRadius: 4,
  padding: theme.spacing(3),
}));

interface IProps {
  slideActive?: number;
}
const LandingHeader = (props: IProps) => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const slideActive = props?.slideActive ?? 0;
  return (
    <Box position={"relative"}>
      <SideBarMenu open={showSidebar} onClose={() => setShowSidebar(false)} />
      <HeaderStyled open={slideActive === 0}>
        <Container>
          <Grid container>
            <Grid item id="logo" sm={3} xs={6}>
              <Center>
                <img src="/assets/imgs/logo/logo-L.svg" alt="logo-lucis" height={60} />
              </Center>
            </Grid>
            <Grid item id="menu" sm={6} xs={0} style={{ position: "relative" }}>
              <MenuBar>
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
              </MenuBar>
            </Grid>
            <Grid item sm={3} xs={6}>
              <Box
                height={"100%"}
                position={"relative"}
                sx={(theme) => ({
                  [theme.breakpoints.down("sm")]: {
                    display: "none",
                  },
                })}
              >
                <Right>
                  <Button LinkComponent={Link} href={"/login"} variant="contained">
                    Log in{" "}
                  </Button>
                  <IconButton sx={(theme) => ({ ml: theme.spacing(3) })}>
                    <img src="/assets/imgs/landing/global.svg" alt="i18n" />
                  </IconButton>
                </Right>
              </Box>
              <Box
                height={headerHeight}
                position={"relative"}
                sx={(theme) => ({
                  [theme.breakpoints.up("sm")]: {
                    display: "none",
                  },
                })}
              >
                <Right>
                  <ToggleDrawer onClick={() => setShowSidebar(true)}>
                    <img src="/assets/imgs/landing/toggle-icon.svg" alt="" />
                  </ToggleDrawer>
                </Right>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <SupportPage open={slideActive === 0}>
          <Container>
            <Grid container>
              <Grid item sm={3} xs={0} />
              <Grid item xs={12} sm={6} sx={{ position: "relative" }}>
                <ExtendBox>
                  <Typography
                    variant="h2"
                    sx={(theme) => ({
                      pt: "40px",
                      fontSize: 56,
                      fontWeight: 400,
                      [theme.breakpoints.down("md")]: {
                        fontSize: 46,
                      },
                    })}
                  >
                    Established reader distracted
                  </Typography>
                  <Typography
                    sx={(theme) => ({
                      pt: "28px",
                      [theme.breakpoints.down("md")]: {
                        fontSize: 14,
                      },
                    })}
                  >
                    Fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  </Typography>
                  <Button
                    sx={(theme) => ({
                      mt: 16,
                      color: "#504C67",
                      [theme.breakpoints.down("md")]: {
                        fontSize: 14,
                      },
                    })}
                  >
                    LEARN MORE <img style={{ marginLeft: 16 }} src="/assets/imgs/landing/arrow.svg" alt="arrow" />
                  </Button>
                </ExtendBox>
                <CoinImage src="/assets/imgs/landing/coin1.png" alt="coin" />
              </Grid>
              <Grid item sm={3} xs={0} sx={{ position: "relative" }}>
                <GridDot src={"/assets/imgs/landing/header-decor.png"} />
              </Grid>
            </Grid>
          </Container>
        </SupportPage>
      </HeaderStyled>
    </Box>
  );
};
export default LandingHeader;
