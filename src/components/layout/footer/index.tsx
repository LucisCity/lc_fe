import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import { InstallMobileOutlined, InstallDesktopOutlined } from "@mui/icons-material";
import useA2HS from "../../../hooks/use_a2hs";

const FooterStyled = styled("footer", { shouldForwardProp: (propName) => propName !== "disabledBackground" })<{
  disabledBackground: boolean;
}>(({ theme, disabledBackground }) => ({
  width: "100%",
  background: disabledBackground ? "none" : `url(/assets/imgs/background/5.jpg)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backdropFilter: "blur(12px)",
  display: "flex",
  alignItems: "center",
  paddingTop: theme.spacing(20) + "!important",
}));

const UlComponent = styled("ul")(({ theme }) => ({
  listStyleType: "none",
  gap: theme.spacing(5),
  paddingLeft: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    gap: theme.spacing(3),
  },
}));

const Logo = styled("img")(({ theme }) => ({
  height: 100,
  [theme.breakpoints.down("md")]: {
    height: 80,
  },
}));

export const StartIcon = styled("img")(({ theme }) => ({
  height: 18,
  width: 18,
  marginRight: theme.spacing(5),
}));

export const TextItem = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    fontSize: 12,
  },
}));

export const FooterNextLink = styled(Link, { shouldForwardProp: (props) => props !== "active" })<{
  active?: boolean;
}>(({ theme, active }) => ({
  color: "#504C67",
  fontSize: 16,
  position: "relative",
  "&:before": {
    content: `""`,
    position: "absolute",
    bottom: 0,
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
    width: 75,
  },
}));

interface IProps {
  style?: any;
  disabledBackground?: boolean;
  hasBottomNav?: boolean;
}
export default function Footer({ style, disabledBackground, hasBottomNav }: IProps) {
  const lang = "vi"; // TODO: Dynamically get this
  const userGuideSlugs = {
    en: "/TODO",
    vi: "/huong-dan-cai-ung-dung-lucis-city-tren-mobile-va-pc/",
  };
  const userGuideSlug = userGuideSlugs[lang];
  const newsBaseUrl = "https://news.luciscity.io"; // TODO: from .env
  const { promptInstallApp } = useA2HS(newsBaseUrl + userGuideSlug);

  return (
    <FooterStyled
      style={style}
      disabledBackground={!!disabledBackground}
      className={hasBottomNav ? "fullscreenPage" : undefined}
    >
      <Container>
        <Logo src="/assets/imgs/logo/logo-3d.svg" alt="logo" />
        <Grid container spacing={{ sm: 0, xs: 4 }}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h2"
              mb={10}
              sx={{ fontWeight: 500, fontSize: { md: 24, xs: 18 }, textTransform: "uppercase", lineHeight: "180%" }}
            >
              Công ty cổ phần tập đoàn Lucis City
            </Typography>
            <TextItem component={"p"} display={"flex"} alignItems={"center"} m={0} mb={5}>
              <StartIcon src="/assets/imgs/footer/map.svg" alt="map icon" />
              43TT3C - Khu đô Thị Phùng Khoang - Nam Từ Liêm - Hà Nội
            </TextItem>
            <Box>
              <Grid container>
                <Grid item xs={6}>
                  <TextItem component={"p"} display={"flex"} alignItems={"center"} m={0} mb={5}>
                    <StartIcon src="/assets/imgs/footer/email.svg" alt="email icon" />
                    contact@luciscity.io
                  </TextItem>
                  <TextItem component={"p"} display={"flex"} alignItems={"center"} m={0} mb={5}>
                    <StartIcon src="/assets/imgs/footer/phone.svg" alt="phone icon" />
                    (+84)34 890 2400
                  </TextItem>
                  <TextItem component={"p"} display={"flex"} alignItems={"center"} m={0} mb={5}>
                    <StartIcon src="/assets/imgs/footer/headphone.svg" alt="headphone icon" />
                    (+84)34 890 2400
                  </TextItem>
                </Grid>
                {/*<Grid item xs={6}>*/}
                {/*  <TextItem component={"strong"} display={"flex"} alignItems={"center"} m={0} mb={5}>*/}
                {/*    Bộ phận kinh doanh*/}
                {/*  </TextItem>*/}
                {/*  <TextItem component={"p"} display={"flex"} alignItems={"center"} m={0} mb={5}>*/}
                {/*    <StartIcon src="/assets/imgs/footer/email.svg" alt="email icon" />*/}
                {/*    contact@luciscity.io*/}
                {/*  </TextItem>*/}
                {/*  <TextItem component={"p"} display={"flex"} alignItems={"center"} m={0} mb={5}>*/}
                {/*    <StartIcon src="/assets/imgs/footer/phone.svg" alt="phone icon" />*/}
                {/*    (319) 555-0115*/}
                {/*  </TextItem>*/}
                {/*</Grid>*/}
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={4}>
                <Box mt={{ sm: 20, xs: 0 }}>
                  <UlComponent>
                    <li>
                      <FooterNextLink href={"/"}>Về Lucis City</FooterNextLink>
                    </li>
                    {/*<li>*/}
                    {/*  <FooterNextLink href={"/"}>Tuyển dụng</FooterNextLink>*/}
                    {/*</li>*/}
                    <li>
                      <FooterNextLink href={"/"}>Điều khoản thỏa thuận</FooterNextLink>
                    </li>
                    <li>
                      <FooterNextLink href={"/"}>Quy chế hoạt động</FooterNextLink>
                    </li>
                  </UlComponent>
                </Box>
              </Grid>
              <Grid item xs={6} sm={4}>
                <Box mt={{ sm: 20, xs: 0 }}>
                  <UlComponent>
                    <li>
                      <FooterNextLink href={"/"}>Cam kết của NDT</FooterNextLink>
                    </li>
                    <li>
                      <FooterNextLink href={"/"}>Chính sách bảo mật</FooterNextLink>
                    </li>
                  </UlComponent>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box mt={{ sm: 20, xs: 0 }}>
                  <UlComponent>
                    <li>
                      <Box display={"flex"} alignItems={"center"}>
                        <a>
                          <StartIcon src="/assets/imgs/footer/discord.svg" alt="discord icon" />
                        </a>
                        <a
                          target="_blank"
                          href="https://t.me/luciscity_official_announcement"
                          rel="noopener noreferrer"
                        >
                          <StartIcon src="/assets/imgs/footer/telegram.svg" alt="telegram icon" />
                        </a>
                        <a target="_blank" href="https://twitter.com/luciscity_io" rel="noopener noreferrer">
                          <StartIcon src="/assets/imgs/footer/twitter.svg" alt="twitter icon" />
                        </a>
                      </Box>
                    </li>
                    <li>
                      <Button
                        sx={{ textTransform: "none", padding: 0 }}
                        startIcon={isMobile ? <InstallMobileOutlined /> : <InstallDesktopOutlined />}
                        onClick={promptInstallApp}
                        size={"small"}
                      >
                        Tải ứng dụng
                      </Button>
                    </li>
                  </UlComponent>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box width={"100%"} borderBottom={"1px solid #fff"} mt={{ md: 12, xs: 10 }} mb={6} />
        <Box display={"flex"} justifyContent="space-between" pb={4}>
          <Typography fontSize={{ xs: 12, md: 16 }}>{new Date().getFullYear()} @ Lucis City</Typography>
        </Box>
      </Container>
    </FooterStyled>
  );
}
