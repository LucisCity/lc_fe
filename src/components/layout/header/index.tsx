import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import { Box, styled, useTheme } from "@mui/system";
import Link from "next/link";
import { Right } from "../../common/right";
import { SideBarMenu } from "./side_bar_menu";
import React from "react";
import { useRouter } from "next/router";
import zIndex from "@mui/material/styles/zIndex";

export const headerHeight = 90;
export const mobileHeaderHeight = 60;
export const extendHeaderHeight = 500;
const HeaderStyled = styled("div", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
  isFixed?: boolean;
}>(({ theme, open, isFixed }) => ({
  width: "100%",
  height: extendHeaderHeight,
  background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
  backdropFilter: "blur(12px)",
  position: isFixed ? "absolute" : "fixed",
  top: 0,
  zIndex: zIndex.appBar,
  borderBottom: "1px solid",
  borderImageSlice: 1,
  borderImageSource: "linear-gradient(90deg, #FFFFFF 0.56%, rgba(255, 255, 255, 0) 100%)",
  //@ts-ignore
  transition: theme.transitions.create(["height"], { duration: 800 }),
  [theme.breakpoints.down("sm")]: {
    position: "fixed",
  },
  ...(!open && {
    //@ts-ignore
    transition: theme.transitions.create(["height"], { duration: 800 }),
    height: headerHeight,
    [theme.breakpoints.down("sm")]: {
      position: "fixed",
      height: mobileHeaderHeight,
      zIndex: zIndex.appBar,
    },
  }),
}));
const MenuBar = styled("div")(({ theme }) => ({
  width: "100%",
  height: headerHeight,

  [theme.breakpoints.down("sm")]: {
    display: "none",
    height: mobileHeaderHeight,
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
    paddingLeft: 0,
    paddingRight: 0,
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
    transition: theme.transitions.create(["height", "transform"], { duration: 800 }),
    ...(!open && {
      transform: "translateY(-500px)",
      //@ts-ignore
      transition: theme.transitions.create(["transform", "height"], { duration: 800 }),
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
  [theme.breakpoints.down("sm")]: {
    height: mobileHeaderHeight,
  },
}));

export const HeaderNextLink = styled(Link)<{
  isSidebar?: boolean;
  active?: boolean;
}>(({ theme, isSidebar, active }) => ({
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
    ...(active && {
      width: "100%",
      transition: (theme.transitions as any).create(["width"]),
    }),
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

export const LogoImage = styled("img")(({ theme }) => ({
  height: 48,

  [theme.breakpoints.down("md")]: {
    height: 36,
    alignSelf: "left",
  },
}));

export const ToggleDrawer = styled(IconButton)(({ theme }) => ({
  background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
  borderRadius: 4,
  padding: theme.spacing(3),
}));

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Member",
    href: "/member",
  },
  {
    name: "Invest",
    href: "/invest",
  },
  {
    name: "Marketplace",
    href: "/marketplace",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
interface IProps {
  slideActive?: number;
  isFixed?: boolean;
}
const Header = (props: IProps) => {
  const [showSidebar, setShowSidebar] = React.useState(false);
  const slideActive = props?.slideActive;
  const router = useRouter();
  const activePage = React.useMemo(() => {
    return pages.find((item) => item.href === router.pathname) ?? pages[0];
  }, [router.pathname]);
  return (
    <Box position={"relative"}>
      <SideBarMenu open={showSidebar} onClose={() => setShowSidebar(false)} />
      <HeaderStyled open={slideActive === 0}>
        <Container>
          <Grid container>
            <Grid item sm={3} xs={6}>
              <Box
                display={"flex"}
                justifyContent={{ sm: "center", xs: "flex-start" }}
                width={"100%"}
                height={"100%"}
                alignItems={"center"}
              >
                <Link href={"/"}>
                  <LogoImage src="/assets/imgs/logo/logo-L.svg" alt="logo-lucis" />
                </Link>
              </Box>
            </Grid>
            <Grid item id="menu" sm={6} xs={0} style={{ position: "relative" }}>
              <MenuBar>
                <nav>
                  <Ul>
                    {pages.map((page) => (
                      <li key={page.name}>
                        <HeaderNextLink href={page.href} active={page.href === activePage.href}>
                          {page.name}
                        </HeaderNextLink>
                      </li>
                    ))}
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
                height={{ xs: 60, sm: headerHeight }}
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
                    endIcon={<img style={{ marginLeft: 8 }} src="/assets/imgs/landing/arrow.svg" alt="arrow" />}
                  >
                    LEARN MORE
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
export default Header;
