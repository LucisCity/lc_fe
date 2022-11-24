import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Section } from ".";
import { useAnimation } from "../../hooks/use_animation";

const MainItemComponent = styled(Box)(({ theme }) => ({
  height: `100vh`,
  width: "100%",
}));

export const BecomeInvestButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
  filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))",
  backdropFilter: "blur(4px)",
  borderRadius: 4,
  height: 52,
  width: 190,
  boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  textTransform: "capitalize",
  fontSize: "16px",
  fontWeight: 400,
  color: "#504C67",
  "&:hover": {
    background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
    cursor: "pointer",
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },
}));
interface IProps {
  activeSection?: Section;
}

export const CompanySection = (props: IProps) => {
  const activeSection = props.activeSection;

  const animation = useAnimation();

  React.useEffect(() => {
    if (activeSection === Section.IntroductionCompany) {
      animation.fadeIn("#company-content-section");
      // animation.fadeIn("#company-section");
    } else {
      animation.fadeOut("#company-content-section");
      // animation.fadeOut("#company-section");
    }
  }, [activeSection]);

  return (
    <MainItemComponent
      id="company-section"
      sx={{
        background: `url(${"assets/imgs/landing/background-intro.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left",
        width: "100%",
      }}
    >
      <Container sx={{ height: "100%" }}>
        <Box position="relative" height={"100%"}>
          <Box height={"100%"} component="section" id="company-content-section" sx={{ opacity: 0 }}>
            <Grid container sx={{ height: "100%" }}>
              <Grid item xs={3}></Grid>
              <Grid item xs={6} sx={{ height: "100%" }}>
                <Box
                  display="flex"
                  flexDirection={"column"}
                  justifyContent="center"
                  alignItems={"flex-start"}
                  height="100%"
                >
                  <Typography variant="h1" sx={{ color: "#504C67", fontWeight: 700, fontSize: 64, mb: 20 }}>
                    Lucis <span style={{ color: "#fff" }}>City</span>
                  </Typography>
                  <Typography sx={{ mb: 10 }}>
                    Hệ sinh thái số bền vững mang lại lợi nhuận và giá trị cho Cộng đồng Mở ra cơ hội đầu tư vào thị
                    trường bất động sản đầy tiềm năng từ nhiều nền tảng trên toàn Thế giới.
                  </Typography>
                  <BecomeInvestButton variant="contained">
                    Become invest
                    <img src="/assets/imgs/landing/arrow-circle-right.svg" alt="arrow" />
                  </BecomeInvestButton>
                </Box>
              </Grid>
              <Grid item xs={3}></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </MainItemComponent>
  );
};
