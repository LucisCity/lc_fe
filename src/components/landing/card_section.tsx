import { Box, Button, Container, Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import AnimWhenVisible from "../anim";
import { CardAnimation } from "./components/card_animation";
import Link from "next/link";

const MainItemComponent = styled(Box)(({ theme }) => ({
  height: `100vh`,
  width: "100%",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    height: "auto",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

interface IProps {
  index?: number;
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
  height: 82,
  borderRadius: 8,
  padding: theme.spacing(3),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255, 255, 255, 0.5)",
  backdropFilter: "blur(3.5px)",
  img: {
    marginRight: theme.spacing(3),
  },
  [theme.breakpoints.down("md")]: {
    fontSize: 14,
    height: 62,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 12,
    height: 62,
  },
}));

const Title = styled("img")(({ theme }) => ({
  height: 25,
  [theme.breakpoints.down("sm")]: {
    height: 15,
  },
}));

const CardSupportTitle = styled("div")(({ theme }) => ({
  width: 60,
  height: 25,
  marginLeft: theme.spacing(3),
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
    text: "Cộng đồng Nhà Đầu tư đẳng cấp - cơ hội kết nối",
    delay: 0,
    sm: 4,
  },
  {
    text: "Tiềm năng vượt trội",
    delay: 0.2,
    sm: 4,
  },
  {
    text: "Tăng cơ hội đầu tư",
    delay: 0.4,
    sm: 4,
  },
];

const contentItems2 = [
  {
    text: "Lợi nhuận kép",
    delay: 0.6,
    sm: 3,
  },
  {
    text: "Trải nghiệm tiện ích, đặc quyền chủ thẻ tích hợp trong hệ sinh thái",
    delay: 0.8,
    sm: 6,
  },
  {
    text: "Đa dạng tiềm lực khách hàng",
    delay: 1,
    sm: 3,
  },
];

const ListContent = ({
  listContent,
  animeIndex,
}: {
  listContent: { text: string; delay: number; sm: number }[];
  animeIndex?: number;
}) => {
  return (
    <>
      {listContent.map((item, index) => (
        <Grid item xs={item.sm ?? 4} key={"list-content-card" + index}>
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
        </Grid>
      ))}
    </>
  );
};
export const CardSection = (props: IProps) => {
  const disabledBackground = props?.disabledBackground ?? false;
  const disabledReadmoreButton = props?.disabledReadmoreButton ?? false;
  const disabledAnimation = props?.disabledAnimation ?? false;
  return (
    <MainItemComponent
      sx={{
        background: !disabledBackground ? `url(${"assets/imgs/member/background.jpg"})` : "none",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
        width: "100%",
      }}
    >
      <Container sx={{ height: "100%", padding: "1px" }}>
        <Grid container sx={{ height: "100%" }} spacing={{ lg: 16, md: 12, sx: 0 }}>
          <Grid item xs={0} md={4} lg={3} width={"100%"}>
            <Box
              display="flex"
              justifyContent="center"
              position={"relative"}
              zIndex={1}
              alignItems={"center"}
              width={"100%"}
              height={"100%"}
            >
              <CardAnimation animationIndex={props.index} enable={!disabledAnimation} />
            </Box>
          </Grid>
          <Grid item xs={12} md={8} lg={8} sx={{ height: "100%" }}>
            <Box
              display="flex"
              flexDirection={"column"}
              justifyContent="center"
              // alignItems={"center"}
              gap={2}
              height="100%"
              sx={(theme) => ({
                [theme.breakpoints.down("md")]: {
                  justifyContent: "flex-start",
                  alignItems: "center",
                },
              })}
            >
              <AnimWhenVisible
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: -30, transition: { delay: 0 } },
                }}
                // transition={{ delay: item.delay, duration: 0.6 }}
                index={props.index}
                enable={!disabledAnimation}
              >
                <Box display="flex">
                  <Title src="/assets/imgs/landing/card_title.png" alt="galaxy card" />
                  <CardSupportTitle>Card</CardSupportTitle>
                </Box>
                <Typography
                  sx={(theme) => ({
                    color: "#6555EE",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    fontSize: 16,
                    [theme.breakpoints.down("sm")]: { fontSize: 14 },
                  })}
                  mt={2}
                >
                  đẳng cấp công nghệ
                </Typography>
                <Typography
                  sx={(theme) => ({ color: "rgba(80, 76, 103, 1)", [theme.breakpoints.down("sm")]: { fontSize: 12 } })}
                  mt={{ md: 8, xs: 4 }}
                  mb={{ md: 8, xs: 5 }}
                >
                  Thẻ Hawk Card được phát triển bởi Lucis City giúp Nhà Đầu tư có thể trải <br /> nghiệm và hưởng lợi
                  nhuận từ toàn bộ các tiện ích trong Hệ sinh thái....
                </Typography>
              </AnimWhenVisible>
              <Box mb={{ md: 9, xs: 5 }} width={"100%"} sx={{ overflowX: "auto" }}>
                <Grid container spacing={3} sx={(theme) => ({ [theme.breakpoints.down("sm")]: { width: 620 } })}>
                  <ListContent listContent={contentItems1} animeIndex={props?.index} />
                  <ListContent listContent={contentItems2} animeIndex={props?.index} />
                </Grid>
              </Box>
              <AnimWhenVisible
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 30, transition: { delay: 0 } },
                }}
                // transition={{ delay: item.delay, duration: 0.6 }}
                index={props.index}
                enable={!disabledAnimation}
              >
                <Box
                  display={"flex"}
                  sx={(theme) => ({
                    [theme.breakpoints.down("sm")]: {
                      flexDirection: "column",
                    },
                  })}
                  flexDirection={"row"}
                  pb={5}
                >
                  <Button
                    variant="contained"
                    endIcon={<img src="/assets/imgs/landing/arrow-circle-right.svg" alt="arrow" />}
                    LinkComponent={Link}
                    href={"/invest"}
                  >
                    Become an invest
                  </Button>
                  {!disabledReadmoreButton && (
                    <Button
                      LinkComponent={Link}
                      href={"/member"}
                      sx={{ textTransform: "capitalize", ml: 2, color: "#504C67" }}
                    >
                      Read more
                    </Button>
                  )}
                </Box>
              </AnimWhenVisible>
            </Box>
          </Grid>
          <Grid item xs={0} lg={1} />
        </Grid>
        <CoinImage src="/assets/imgs/landing/coin4.png" alt="" />
      </Container>
    </MainItemComponent>
  );
};
