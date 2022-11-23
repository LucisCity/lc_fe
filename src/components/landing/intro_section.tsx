import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Section } from ".";
import { useAnimation } from "../../hooks/use_animation";

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
  top: -150,
  right: -100,
}));

export const IntroSection = (props: IProps) => {
  const activeSection = props.activeSection;

  const animation = useAnimation();

  React.useEffect(() => {
    if (activeSection === Section.IntroductionCompany) {
      animation.fadeOut("#intro-card-section");
      animation.fadeIn("#intro-company-section");
    } else if (activeSection === Section.IntroductionCard) {
      animation.fadeIn("#intro-card-section");
      animation.fadeOut("#intro-company-section");
    }
  }, [activeSection]);

  return (
    <MainItemComponent
      sx={{
        background: `url(${"/landing/intro-luciscity.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left",
        width: "100%",
      }}
    >
      <Container sx={{ height: "100%" }}>
        <Box position="relative" height={"100%"}>
          <Box height={"100%"} component="section" id="intro-company-section" sx={{ opacity: 0 }}>
            <Grid container sx={{ height: "100%" }}>
              <Grid item xs={3}></Grid>
              <Grid item xs={6} sx={{ height: "100%" }}>
                <Box
                  display="flex"
                  flexDirection={"column"}
                  justifyContent="center"
                  alignItems={"flex-start"}
                  gap={2}
                  height="100%"
                >
                  <Typography variant="h1">Lucis City</Typography>
                  <Typography>
                    Hệ sinh thái số bền vững mang lại lợi nhuận và giá trị cho Cộng đồng Mở ra cơ hội đầu tư vào thị
                    trường bất động sản đầy tiềm năng từ nhiều nền tảng trên toàn Thế giới.
                  </Typography>
                  <Button variant="outlined">Become invest</Button>
                </Box>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          </Box>
          <Box
            position="absolute"
            component="section"
            height={"100%"}
            id="intro-card-section"
            top={0}
            sx={{ opacity: 0 }}
          >
            <Grid container sx={{ height: "100%" }}>
              <Grid item xs={3} sx={{ height: "100%" }}>
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
              <Grid item xs={9} sx={{ height: "100%" }}>
                <Box
                  display="flex"
                  flexDirection={"column"}
                  justifyContent="center"
                  alignItems={"flex-start"}
                  gap={2}
                  height="100%"
                >
                  <div style={{ position: "relative" }}>
                    <Typography variant="h2">THE HAWK CARD ĐẲNG CẤP CÔNG NGHỆ</Typography>
                    <Typography>
                      Thẻ Hawk Card được phát triển bởi Lucis City giúp Nhà Đầu tư có thể trải nghiệm và hưởng lợi nhuận
                      từ toàn bộ các tiện ích trong Hệ sinh thái....
                    </Typography>
                    <Button variant="outlined">Become invest</Button>
                    <StarImage2 src="/star1.png" alt="" />
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </MainItemComponent>
  );
};
