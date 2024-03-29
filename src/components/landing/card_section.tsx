import { Box, Button, Container, Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import AnimWhenVisible from "../anim";
import { CardAnimation } from "./components/card_animation";
import Link from "next/link";
import { headerHeight } from "../layout/header";
import { Center } from "../common/center";

const MainItemComponent = styled(Box)(({ theme }) => ({
  height: `100vh`,
  width: "100%",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

interface IProps {
  index?: number;
  fullscreen?: boolean;
  disabledBackground?: boolean;
  disabledReadmoreButton?: boolean;
  disabledAnimation?: boolean;
}

const CoinImage = styled("img")(({ theme }) => ({
  position: "absolute",
  top: 100,
  right: 200,
  [theme.breakpoints.down("lg")]: {
    right: 100,
  },
  [theme.breakpoints.down("md")]: {
    top: 0,
    right: 0,
  },
}));

const CardItem = styled(Paper)(({ theme }) => ({
  height: 60,
  borderRadius: 8,
  padding: theme.spacing(3),
  display: "flex",
  alignItems: "center",
  // justifyContent: "center",
  background: "rgba(255, 255, 255, 0.5)",
  backdropFilter: "blur(3.5px)",
  fontSize: 14,
  img: {
    marginRight: theme.spacing(3),
  },
  [theme.breakpoints.down("md")]: {
    // fontSize: 14,
    // height: 62,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    height: 50,
  },
}));

const Title = styled("img")(({ theme }) => ({
  height: 25,
  [theme.breakpoints.down("sm")]: {
    height: 18,
  },
  [theme.breakpoints.down("md")]: {
    height: 20,
  },
}));

const CardSupportTitle = styled("div")(({ theme }) => ({
  width: 60,
  height: 25,
  marginBottom: theme.spacing(2),
  borderRadius: 4,
  border: "1px solid #fff",
  background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 12,
  fontWeight: 500,
  lineHeight: 1,
  [theme.breakpoints.down("sm")]: {
    fontSize: 10,
    width: 40,
    height: 20,
  },
}));

const contentItems1 = [
  {
    text: "Cộng đồng Nhà Đầu tư đẳng cấp - Cơ hội kết nối",
    delay: 0,
    width: 215,
  },
  {
    text: "Tiềm năng vượt trội",
    delay: 0.2,
    width: 185,
  },
];

const contentItems2 = [
  {
    text: "Đặc quyền chủ thẻ tích hợp trong hệ sinh thái",
    delay: 0.8,
    width: 275,
  },
  {
    text: "Lợi nhuận kép",
    delay: 0.6,
    width: 150,
  },
];

const contentItems3 = [
  {
    text: "Đa dạng tiềm lực khách hàng",
    delay: 1,
    width: 170,
  },
  {
    text: "Tăng cơ hội đầu tư",
    delay: 0.8,
    width: 180,
  },
];

const ListContent = ({
  listContent,
  animeIndex,
}: {
  listContent: { text: string; delay: number; width: number }[];
  animeIndex?: number;
}) => {
  return (
    <Box display={"flex"} mb={3}>
      {listContent.map((item, index) => (
        <Box key={"list-content-card" + index} mr={3} sx={(theme) => ({ width: item.width })}>
          <AnimWhenVisible
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30, transition: { delay: 0 } },
            }}
            transition={{ delay: item.delay, duration: 0.6 }}
            index={animeIndex}
            enable={false}
          >
            <CardItem elevation={0}>
              <img src="/assets/imgs/landing/check-icon.svg" alt="check-icon" />
              {item.text}
            </CardItem>
          </AnimWhenVisible>
        </Box>
      ))}
    </Box>
  );
};
export const CardSection = (props: IProps) => {
  const disabledBackground = props?.disabledBackground ?? false;
  const disabledReadmoreButton = props?.disabledReadmoreButton ?? false;
  const disabledAnimation = props?.disabledAnimation ?? false;
  return (
    <MainItemComponent
      className={props.fullscreen ? "fullscreenPage" : undefined}
      sx={{
        "--page-padding-top": props.fullscreen ? `${headerHeight}px` : 0, // landing always on PC always has header 90px
        background: !disabledBackground ? `url(${"assets/imgs/background/6.jpg"})` : "none",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
        width: "100%",
      }}
    >
      <Box
        sx={{
          background: disabledBackground ? `url(${"assets/imgs/landing/card_ellipse.svg"})` : "none",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          // zIndex: 1,
        }}
      />
      <Container sx={{ height: "100%", padding: "0px 0" }}>
        <Center>
          <Grid container sx={{ height: "100%" }} spacing={{ md: 12, sx: 0 }}>
            <Grid item xs={12} sm={6} width={"100%"}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems={{ xs: "flex-end", sm: "center" }}
                width={"100%"}
                height={"100%"}
              >
                <CardAnimation animationIndex={props.index} enable={!disabledAnimation} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ height: "100%" }}>
              <AnimWhenVisible
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 100, transition: { delay: 0 } },
                }}
                transition={{ duration: 1, delay: props.index ? 0.2 : 0 }}
                index={props.index}
                // enable={props?.enable ?? true}
                enable={true}
                style={{ height: "100%" }}
              >
                <Box
                  display="flex"
                  flexDirection={"column"}
                  justifyContent="center"
                  // alignItems={"center"}
                  gap={2}
                  height="100%"
                  sx={(theme) => ({
                    [theme.breakpoints.down("sm")]: {
                      justifyContent: "flex-start",
                      alignItems: "center",
                    },
                  })}
                >
                  <Box>
                    <CardSupportTitle>Card</CardSupportTitle>
                    <Title src="/assets/imgs/landing/card_title.png" alt="galaxy card" />
                  </Box>
                  <Typography
                    variant={"h4"}
                    sx={(theme) => ({
                      color: "#6555EE",
                      textTransform: "uppercase",
                      fontWeight: 700,
                    })}
                    mt={2}
                    fontSize={{ md: 18, xs: 16 }}
                  >
                    đẳng cấp công nghệ
                  </Typography>
                  <Typography
                    variant={"h5"}
                    // sx={(theme) => ({ color: "rgba(80, 76, 103, 1)" })}
                    mt={{ md: 5, xs: 5 }}
                    mb={{ md: 3, xs: 3 }}
                  >
                    Galaxy Platinum Card được phát triển bởi Lucis City giúp Nhà Đầu tư có thể trải nghiệm và hưởng lợi
                    nhuận từ toàn bộ các tiện ích trong Hệ sinh thái.
                  </Typography>
                  <Box
                    mb={{ md: 9, xs: 5 }}
                    width={"100%"}
                    sx={{ overflowX: "auto" }}
                    display={"flex"}
                    justifyContent={{ xs: "flex-start", sm: "flex-start", md: "flex-start" }}
                  >
                    <Box sx={(theme) => ({ [theme.breakpoints.down("sm")]: { width: 620 } })}>
                      {/*<Box>*/}
                      {/*  <Grid container spacing={3}>*/}
                      {/*    {contentItems1.map((item, index) => (*/}
                      {/*      <Grid item xs={12} sm={6} key={"content_" + index}>*/}
                      {/*        <CardItem elevation={0}>*/}
                      {/*          <img src="/assets/imgs/landing/check-icon.svg" alt="check-icon" />*/}
                      {/*          {item.text}*/}
                      {/*        </CardItem>*/}
                      {/*      </Grid>*/}
                      {/*    ))}*/}
                      {/*    {contentItems2.map((item, index) => (*/}
                      {/*      <Grid item xs={12} sm={6} key={"content_" + index}>*/}
                      {/*        <CardItem elevation={0}>*/}
                      {/*          <img src="/assets/imgs/landing/check-icon.svg" alt="check-icon" />*/}
                      {/*          {item.text}*/}
                      {/*        </CardItem>*/}
                      {/*      </Grid>*/}
                      {/*    ))}*/}
                      {/*    {contentItems3.map((item, index) => (*/}
                      {/*      <Grid item xs={12} sm={6} key={"content_" + index}>*/}
                      {/*        <CardItem elevation={0}>*/}
                      {/*          <img src="/assets/imgs/landing/check-icon.svg" alt="check-icon" />*/}
                      {/*          {item.text}*/}
                      {/*        </CardItem>*/}
                      {/*      </Grid>*/}
                      {/*    ))}*/}
                      {/*  </Grid>*/}
                      <ListContent listContent={contentItems1} animeIndex={props?.index} />
                      <ListContent listContent={contentItems2} animeIndex={props?.index} />
                      <ListContent listContent={contentItems3} animeIndex={props?.index} />
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    width={{ sm: "100%", xs: 270 }}
                    justifyContent={{ xs: "flex-start", sm: "center", md: "flex-start" }}
                    flexDirection={{ sm: "row", xs: "column" }}
                    pb={{ xs: 5, md: 0 }}
                    gap={3}
                  >
                    <Button
                      variant="contained"
                      endIcon={<img src="/assets/imgs/landing/arrow-circle-right.svg" alt="arrow" />}
                      LinkComponent={Link}
                      href={"/contact"}
                    >
                      Trở thành thành viên
                    </Button>
                    {!disabledReadmoreButton && (
                      <Button
                        LinkComponent={Link}
                        href={"/member"}
                        sx={{ textTransform: "capitalize", ml: 2, color: "#504C67" }}
                      >
                        Xem thêm
                      </Button>
                    )}
                  </Box>
                </Box>
              </AnimWhenVisible>
            </Grid>
          </Grid>
        </Center>
        {/*<CoinImage src="/assets/imgs/landing/coin4.png" alt="" />*/}
      </Container>
    </MainItemComponent>
  );
};
