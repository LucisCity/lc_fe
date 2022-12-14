import { AppBar, Button, Container, Grid, IconButton, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import Link from "next/link";
import { Right } from "../../common/right";
import { SideBarMenu } from "./side_bar_menu";
import React from "react";
import { useRouter } from "next/router";
import zIndex from "@mui/material/styles/zIndex";
import { useStores } from "../../../store";
import AvatarMenu from "./avatar_menu";
import { observer } from "mobx-react-lite";

export const headerHeight = 90;
export const mobileHeaderHeight = 60;
const HeaderStyled = styled(AppBar, { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
  isFixed?: boolean;
}>(({ theme, open, isFixed }) => ({
  width: "100%",
  height: extendHeaderHeight,
  color: theme.palette.text.primary,
  background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
  backdropFilter: "blur(12px)",
  position: isFixed ? "absolute" : "fixed",
  top: 0,
  zIndex: zIndex.appBar,
  borderBottom: "1px solid #ffffff3b",
  boxShadow: "0px 3px 8px 0px #b3b3b34d",
  // borderImageSlice: 1,
  // borderImageSource: "linear-gradient(90deg, #FFFFFF 0.56%, rgba(255, 255, 255, 0) 100%)",
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
export const extendHeaderHeight = 500;
const MenuBar = styled("div")(({ theme }) => ({
  width: "100%",
  height: headerHeight,

  [theme.breakpoints.down("sm")]: {
    display: "none",
    height: mobileHeaderHeight,
  },
}));

const ExtendBox = styled("div", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  width: "100%",
  backgroundColor: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
  backdropFilter: "blur(4px)",
  height: extendHeaderHeight,
  paddingLeft: theme.spacing(6),
  paddingRight: theme.spacing(6),
  paddingTop: theme.spacing(38),
  borderLeft: "1px solid",
  borderImageSlice: 1,
  borderImageSource: "linear-gradient(102.67deg, #C5CEE8 -18.34%, #DFE7FD -18.33%, rgba(207, 216, 241, 0.12) 92.76%)",
  [theme.breakpoints.down("sm")]: {
    background: "transparent",
    backdropFilter: "none",
    border: "none",
    paddingLeft: 0,
    paddingRight: 0,
    // height: "100vh",
  },
  //@ts-ignore
  transition: theme.transitions.create(["background-color"], { duration: 800 }),
  ...(!open && {
    //@ts-ignore
    backgroundColor: "none",
    backdropFilter: "none",
    //@ts-ignore
    transition: theme.transitions.create(["background-color"], { duration: 800 }),
  }),
  // display: "flex",
  // flexDirection: "column",
}));

const SupportPage = styled("div", { shouldForwardProp: (prop) => prop !== "open" })<{ open?: boolean }>(
  ({ theme, open }) => ({
    width: "100%",
    position: "absolute",
    bottom: 0,
    zIndex: -1,
    height: extendHeaderHeight,
  }),
);

const GridDot = styled("img", { shouldForwardProp: (prop) => prop !== "open" })<{ open?: boolean }>(
  ({ theme, open }) => ({
    position: "absolute",
    top: 0,
    zIndex: -1,
    right: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    opacity: 1,
    //@ts-ignore
    transition: theme.transitions.create(["opacity"], { duration: 800 }),
    ...(!open && {
      opacity: 0,
      //@ts-ignore
      transition: theme.transitions.create(["opacity"], { duration: 800 }),
    }),
  }),
);

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

export const HeaderNextLink = styled(Link, {
  shouldForwardProp: (props) => props !== "activeCss" && props !== "isSidebar",
})<{
  isSidebar?: boolean;
  activeCss?: boolean;
}>(({ theme, isSidebar, activeCss }) => ({
  color: "#504C67",
  position: "relative",
  "&:before": {
    content: `""`,
    position: "absolute",
    bottom: !isSidebar ? -20 : -4,
    width: "0%",
    borderBottom: "2px solid #504C67",
    transition: (theme.transitions as any).create(["width"]),
    ...(activeCss && {
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
  [theme.breakpoints.down("lg")]: {
    fontSize: 14,
  },
  ...(isSidebar && {
    fontSize: "20px !important",
    fontWeight: "700 !important",
  }),
}));

export const LogoImage = styled("img")(({ theme }) => ({
  height: 48,
  alignSelf: "left",

  [theme.breakpoints.down("md")]: {
    height: 32,
    alignSelf: "left",
  },
}));

export const ToggleDrawer = styled(IconButton)(({ theme }) => ({
  background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
  borderRadius: 4,
  padding: theme.spacing(3),
}));

export interface IPage {
  name: string;
  href: string;
}
const defaultPage: IPage = {
  name: "404",
  href: "/404",
};
export const pages: Array<IPage> = [
  {
    name: "Trang chủ",
    href: "/",
  },
  {
    name: "Thành viên",
    href: "/member",
  },
  {
    name: "Đầu tư",
    href: "/invest",
  },
  {
    name: "Marketplace",
    href: "/marketplace",
  },
  {
    name: "Tin tức",
    href: "/news",
  },
  {
    name: "Liên hệ",
    href: "/contact",
  },
];
interface IProps {
  slideActive?: number;
  isFixed?: boolean;
}
const Header = observer((props: IProps) => {
  // console.log('{Header} render: ');
  const { userStore } = useStores();

  const [showSidebar, setShowSidebar] = React.useState(false);
  const slideActive = props?.slideActive;
  const router = useRouter();
  const activePage = React.useMemo(() => {
    return pages.find((item) => item.href === router.pathname) ?? defaultPage;
  }, [router.pathname]);

  return (
    <Box position={"relative"}>
      <SideBarMenu open={showSidebar} onClose={() => setShowSidebar(false)} activePage={activePage} />
      <HeaderStyled open={slideActive === 0}>
        <Container>
          <Grid container>
            <Grid item sm={2} md={3} xs={6}>
              <Box
                display={"flex"}
                justifyContent={{ xs: "flex-start" }}
                width={"100%"}
                height={"100%"}
                alignItems={"center"}
              >
                <Link href={"/"}>
                  <LogoImage
                    sx={(theme) => ({
                      [theme.breakpoints.down("sm")]: {
                        display: "none",
                      },
                    })}
                    src="/assets/imgs/logo/logo.svg"
                    alt="logo-lucis"
                  />
                  <LogoImage
                    sx={(theme) => ({
                      [theme.breakpoints.up("sm")]: {
                        display: "none",
                      },
                    })}
                    src="/assets/imgs/logo/logo-L.svg"
                    alt="logo-lucis"
                  />
                </Link>
              </Box>
            </Grid>
            <Grid item id="menu" sm={7} md={6} xs={0} style={{ position: "relative" }}>
              <MenuBar>
                <nav>
                  <Ul>
                    {pages.map((page) => (
                      <li key={page.name}>
                        <Typography variant={"h5"}>
                          <HeaderNextLink href={page.href} activeCss={page.href === activePage.href}>
                            {page.name}
                          </HeaderNextLink>
                        </Typography>
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
                  <IconButton>
                    <Box component="img" src="/assets/imgs/landing/global.svg" alt="i18n" mr="8px" />
                  </IconButton>
                  {!userStore.isLogedIn ? (
                    <Button LinkComponent={Link} href={"/login"} variant="contained">
                      Đăng nhập
                    </Button>
                  ) : null}

                  {userStore.isLogedIn ? (
                    <AvatarMenu
                      avatar={userStore.user?.profile?.avatar?.toString()}
                      username={userStore.user?.profile?.display_name?.toString() ?? userStore.user?.email?.toString()}
                      onLogout={() => {
                        userStore.logout();
                      }}
                    />
                  ) : null}
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
              <Grid item sm={2} md={3} xs={0} />
              <Grid item xs={12} sm={7} md={6} sx={{ position: "relative" }}>
                <ExtendBox open={slideActive === 0}>
                  <Typography
                    variant="h2"
                    fontSize={28}
                    sx={(theme) => ({
                      // pt: "40px",

                      [theme.breakpoints.down("lg")]: {
                        fontSize: 22,
                      },
                      [theme.breakpoints.down("md")]: {
                        fontSize: 20,
                      },
                      [theme.breakpoints.down("sm")]: {
                        fontSize: 28,
                      },
                    })}
                  >
                    TRỞ THÀNH NHÀ ĐẦU TƯ TẠI LUCIS CITY
                  </Typography>
                  <Typography
                    sx={(theme) => ({
                      pt: "28px",
                      [theme.breakpoints.down("lg")]: {
                        fontSize: 14,
                      },
                    })}
                  >
                    Dân chủ - Minh bạch - Tin cậy - Linh hoạt
                    <br /> Lucis City cho phép Nhà đầu tư tham gia Cộng đồng - trải nghiệm và hưởng các đặc quyền tiện
                    ích tối ưu nhất.
                  </Typography>
                  <Button
                    sx={(theme) => ({
                      mt: 16,
                      [theme.breakpoints.down("md")]: {
                        fontSize: 14,
                      },
                    })}
                    // endIcon={<img style={{ marginLeft: 8 }} src="/assets/imgs/landing/arrow.svg" alt="arrow" />}
                    variant={"contained"}
                    endIcon={<img src="/assets/imgs/landing/arrow-circle-right.svg" alt="arrow" />}
                    LinkComponent={Link}
                    href={"/contact"}
                  >
                    Xem thêm
                  </Button>
                </ExtendBox>
                <CoinImage src="/assets/imgs/landing/coin1.png" alt="coin" />
              </Grid>
              <Grid item md={3} xs={0} sx={{ position: "relative" }}>
                <GridDot open={slideActive === 0} src={"/assets/imgs/landing/header-decor.png"} />
              </Grid>
            </Grid>
          </Container>
        </SupportPage>
      </HeaderStyled>
    </Box>
  );
});
export default Header;
