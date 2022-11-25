import { Box, Button, Container, Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Section } from ".";
import { useAnimation } from "../../hooks/use_animation";
import { BecomeInvestButton } from "./company_section";

const MainItemComponent = styled(Box)(({ theme }) => ({
  height: `100vh`,
  width: "100%",
}));

interface IProps {
  activeSection?: Section;
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
}));

export const CardSection = (props: IProps) => {
  const activeSection = props.activeSection;

  const animation = useAnimation();

  React.useEffect(() => {
    if (activeSection === Section.IntroductionCard) {
      animation.fadeIn("#intro-card-section");
    }
  }, [activeSection]);

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
          <Box position="absolute" component="section" height={"100%"} id="intro-card-section" top={0}>
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
              <Grid item xs={12} md={8} sx={{ height: "100%" }}>
                <Box
                  display="flex"
                  flexDirection={"column"}
                  justifyContent="center"
                  alignItems={"flex-start"}
                  gap={2}
                  height="100%"
                >
                  <Box style={{ position: "relative" }}>
                    <Typography
                      variant="h1"
                      sx={{ fontSize: 54, fontWeight: 700, color: "rgba(80, 76, 103, 1)", mb: 10 }}
                    >
                      THE HAWK CARD
                    </Typography>
                    <Typography sx={{ color: "rgba(80, 76, 103, 1)", mb: 10 }}>
                      Thẻ Hawk Card được phát triển bởi Lucis City giúp Nhà Đầu tư có thể trải <br /> nghiệm và hưởng
                      lợi nhuận từ toàn bộ các tiện ích trong Hệ sinh thái....
                    </Typography>
                    <Box mb={10}>
                      <Grid container spacing={3}>
                        <Grid item sm={4} xs={12}>
                          <CardItem elevation={0}>
                            <img src="/assets/imgs/landing/check-icon.svg" alt="check-icon" />
                            Cộng đồng Nhà Đầu tư đẳng cấp - cơ hội kết nối
                          </CardItem>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                          <CardItem elevation={0}>
                            <img src="/assets/imgs/landing/check-icon.svg" alt="check-icon" />
                            Tiềm năng vượt trội
                          </CardItem>
                        </Grid>
                        <Grid item sm={4} xs={12}>
                          <CardItem elevation={0}>
                            <img src="/assets/imgs/landing/check-icon.svg" alt="check-icon" />
                            Tăng cơ hội đầu tư
                          </CardItem>
                        </Grid>
                      </Grid>
                      <Grid container spacing={3} sx={{ mt: 0 }}>
                        <Grid item sm={3} xs={12}>
                          <CardItem elevation={0}>
                            <img src="/assets/imgs/landing/check-icon.svg" alt="check-icon" />
                            Lợi nhuận kép
                          </CardItem>
                        </Grid>
                        <Grid item sm={6} xs={12}>
                          <CardItem elevation={0}>
                            <img src="/assets/imgs/landing/check-icon.svg" alt="check-icon" />
                            Trải nghiệm tiện ích, đặc quyền chủ thẻ tích hợp trong hệ sinh thái
                          </CardItem>
                        </Grid>
                        <Grid item sm={3} xs={12}>
                          <CardItem elevation={0}>
                            <img src="/assets/imgs/landing/check-icon.svg" alt="check-icon" />
                            Đa dạng tiềm lực khách hàng
                          </CardItem>
                        </Grid>
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
