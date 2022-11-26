import { Box, Button, Container, Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Section } from ".";
import { useAnimation } from "../../hooks/use_animation";
import AnimWhenVisible from "../anim";
import { BecomeInvestButton } from "./company_section";

const MainItemComponent = styled(Box)(({ theme }) => ({
  height: `100vh`,
  width: "100%",
}));

interface IProps {
  index?: number;
}

const StarImage1 = styled("img")(() => ({
  position: "absolute",
  left: -30,
  bottom: -30,
}));

const StarImage2 = styled("img")(() => ({
  position: "absolute",
  top: -100,
  right: 0,
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
  // [theme.breakpoints.between("sm", "md")]: {
  //   height: 62,
  // },
}));

const CardSupportTitle = styled("div")(({ theme }) => ({
  background: `url("/assets/imgs/landing/card_support_title.png")`,
  width: 60,
  height: 25,
  marginLeft: theme.spacing(3),
}));

const contentItems1 = [
  {
    text: "Cộng đồng Nhà Đầu tư đẳng cấp - cơ hội kết nối",
    delay: 0,
    sm: 4,
  },
  {
    text: "Tiềm năng vượt trội",
    delay: 0.3,
    sm: 4,
  },
  {
    text: "Tăng cơ hội đầu tư",
    delay: 0.6,
    sm: 4,
  },
];

const contentItems2 = [
  {
    text: "Lợi nhuận kép",
    delay: 0.9,
    sm: 3,
  },
  {
    text: "Trải nghiệm tiện ích, đặc quyền chủ thẻ tích hợp trong hệ sinh thái",
    delay: 1.2,
    sm: 6,
  },
  {
    text: "Đa dạng tiềm lực khách hàng",
    delay: 1.5,
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
        <Grid item xs={12} sm={item.sm ?? 4} key={"list-content-card" + index}>
          <AnimWhenVisible
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30, transition: { delay: 0 } },
            }}
            transition={{ delay: item.delay, duration: 0.6 }}
            index={animeIndex}
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
  return (
    <MainItemComponent
      sx={{
        background: `url(${"assets/imgs/landing/background-card.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left",
        width: "100%",
      }}
    >
      <Container sx={{ height: "100%" }}>
        <Box position="relative" height={"100%"}>
          <Box height={"100%"}>
            <Grid container sx={{ height: "100%" }}>
              <Grid item xs={0} md={3} sx={{ height: "100%" }}>
                <Box
                  display="flex"
                  flexDirection={"column"}
                  justifyContent="center"
                  alignItems={"flex-start"}
                  gap={2}
                  height="100%"
                >
                  <div style={{ position: "relative" }}>
                    <img src="/card.png" alt="" />
                    <StarImage1 src="/star2.png" alt="" />
                  </div>
                </Box>
              </Grid>
              <Grid item xs={12} sm={8} sx={{ height: "100%" }}>
                <Box
                  display="flex"
                  flexDirection={"column"}
                  justifyContent="center"
                  alignItems={"flex-start"}
                  gap={2}
                  height="100%"
                >
                  <Box style={{ position: "relative" }}>
                    <Box display="flex">
                      <img src="/assets/imgs/landing/galaxy_card.svg" alt="galaxy card" />
                      <CardSupportTitle />
                    </Box>
                    <Typography
                      sx={{ color: "#6555EE", textTransform: "uppercase", fontWeight: 600, fontSize: 16 }}
                      mt={2}
                    >
                      đẳng cấp công nghệ
                    </Typography>
                    <Typography sx={{ color: "rgba(80, 76, 103, 1)" }} mt={8} mb={9}>
                      Thẻ Hawk Card được phát triển bởi Lucis City giúp Nhà Đầu tư có thể trải <br /> nghiệm và hưởng
                      lợi nhuận từ toàn bộ các tiện ích trong Hệ sinh thái....
                    </Typography>
                    <Box mb={9}>
                      <Grid container spacing={3}>
                        <ListContent listContent={contentItems1} animeIndex={props?.index} />
                      </Grid>
                      <Grid container spacing={3} sx={{ mt: 0 }}>
                        <ListContent listContent={contentItems2} animeIndex={props?.index} />
                      </Grid>
                    </Box>
                    <Box>
                      <BecomeInvestButton variant="contained">
                        Become invest
                        <img src="/assets/imgs/landing/arrow-circle-right.svg" alt="arrow" />
                      </BecomeInvestButton>
                      <Button sx={{ textTransform: "capitalize", ml: 2, color: "#504C67" }}>Read more</Button>
                    </Box>
                    <StarImage2 src="/star1.png" alt="" />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={1} />
            </Grid>
          </Box>
        </Box>
      </Container>
    </MainItemComponent>
  );
};
