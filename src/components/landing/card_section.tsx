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
