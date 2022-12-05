import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";

const FooterStyled = styled("footer", { shouldForwardProp: (propName) => propName !== "disabledBackground" })<{
  disabledBackground: boolean;
}>(({ theme, disabledBackground }) => ({
  width: "100%",
  background: disabledBackground ? "none" : `url("/assets/imgs/footer/background.jpg")`,
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
  return (
    <FooterStyled
      style={style}
      disabledBackground={!!disabledBackground}
      className={hasBottomNav ? "fullscreenPage" : undefined}
    >
      <Container>
        <Logo src="/assets/imgs/logo/logo-color.svg" alt="logo" />
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
                    (319) 555-0115
                  </TextItem>
                  <TextItem component={"p"} display={"flex"} alignItems={"center"} m={0} mb={5}>
                    <StartIcon src="/assets/imgs/footer/headphone.svg" alt="headphone icon" />
                    (229) 555-0109
                  </TextItem>
                </Grid>
                <Grid item xs={6}>
                  <TextItem component={"strong"} display={"flex"} alignItems={"center"} m={0} mb={5}>
                    Bộ phận kinh doanh
                  </TextItem>
                  <TextItem component={"p"} display={"flex"} alignItems={"center"} m={0} mb={5}>
                    <StartIcon src="/assets/imgs/footer/email.svg" alt="email icon" />
                    contact@luciscity.io
                  </TextItem>
                  <TextItem component={"p"} display={"flex"} alignItems={"center"} m={0} mb={5}>
                    <StartIcon src="/assets/imgs/footer/phone.svg" alt="phone icon" />
                    (319) 555-0115
                  </TextItem>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <Typography mb={{ md: 14, xs: 6 }}>
                  <strong>Công ty</strong>
                </Typography>
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
                  <li>
                    <FooterNextLink href={"/"}>Cam kết của nhà đầu tư</FooterNextLink>
                  </li>
                  <li>
                    <FooterNextLink href={"/"}>Chính sách bảo mật</FooterNextLink>
                  </li>
                </UlComponent>
              </Grid>
              {/*<Grid item xs={4}>*/}
              {/*  <Typography mb={{ md: 14, xs: 10 }}>*/}
              {/*    <strong>Hỗ trợ</strong>*/}
              {/*  </Typography>*/}
              {/*  <UlComponent>*/}
              {/*    <li>*/}
              {/*      <FooterNextLink href={"/"}>Quy định đăng tin</FooterNextLink>*/}
              {/*    </li>*/}
              {/*    <li>*/}
              {/*      <FooterNextLink href={"/"}>Liên hệ</FooterNextLink>*/}
              {/*    </li>*/}
              {/*    <li>*/}
              {/*      <FooterNextLink href={"/"}>Báo giá</FooterNextLink>*/}
              {/*    </li>*/}
              {/*    <li>*/}
              {/*      <FooterNextLink href={"/"}>Trợ giúp</FooterNextLink>*/}
              {/*    </li>*/}
              {/*    <li>*/}
              {/*      <FooterNextLink href={"/"}>Sitemap</FooterNextLink>*/}
              {/*    </li>*/}
              {/*  </UlComponent>*/}
              {/*</Grid>*/}
              <Grid item xs={4}>
                <Typography mb={{ md: 14, xs: 6 }}>
                  <strong>Liên kết</strong>
                </Typography>
                <Box display={"flex"} alignItems={"center"} m={0} mb={{ md: 10, xs: 6 }}>
                  <StartIcon src="/assets/imgs/footer/discord.svg" alt="discord icon" />
                  <StartIcon src="/assets/imgs/footer/telegram.svg" alt="telegram icon" />
                  <StartIcon src="/assets/imgs/footer/twitter.svg" alt="twitter icon" />
                </Box>
                <Box>
                  <Typography mb={{ md: 10, xs: 6 }}>
                    <strong>Tải ứng dụng</strong>
                  </Typography>
                  <img src="/assets/imgs/footer/download_app.png" alt="" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box width={"100%"} borderBottom={"1px solid #fff"} mt={{ md: 20, xs: 16 }} mb={6} />
        <Box display={"flex"} justifyContent="space-between" pb={4}>
          <Typography fontSize={{ xs: 12, md: 16 }}>{new Date().getFullYear()} @ Lucis City</Typography>
        </Box>
      </Container>
    </FooterStyled>
  );
}
