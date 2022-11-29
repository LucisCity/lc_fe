import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Section } from ".";
import { useAnimation } from "../../hooks/use_animation";
import AnimWhenVisible from "../anim";

const MainItemComponent = styled(Box)(({ theme }) => ({
  height: `100vh`,
  width: "100%",
}));

const TitleImage = styled("img")(({ theme }) => ({
  height: 180,
  paddingBottom: theme.spacing(12),
  [theme.breakpoints.down("md")]: {
    height: 160,
  },
}));

// export const BecomeInvestButton = styled(Button)(({ theme }) => ({
//   background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
//   filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2))",
//   backdropFilter: "blur(4px)",
//   borderRadius: 4,
//   height: 52,
//   width: 190,
//   boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
//   textTransform: "none",
//   fontSize: "16px",
//   fontWeight: 400,
//   color: "#504C67",
//   "&:hover": {
//     background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
//     cursor: "pointer",
//     boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
//   },
// }));

type Props = {
  index?: number;
};
export const CompanySection = (props: Props) => {
  return (
    <MainItemComponent
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
          <Box height={"100%"} component="section">
            <Grid container sx={{ height: "100%" }}>
              <Grid item xs={0} sm={3}></Grid>
              <Grid item xs={12} sm={6} sx={{ height: "100%" }}>
                <Box
                  display="flex"
                  flexDirection={"column"}
                  justifyContent="center"
                  alignItems={"flex-start"}
                  height="100%"
                >
                  <AnimWhenVisible variants={{ hidden: { opacity: 0, y: -100 } }} index={props.index}>
                    <TitleImage src="/assets/imgs/logo/logo-color.svg" alt="lucis - title" />
                  </AnimWhenVisible>
                  <Typography sx={{ mb: 22 }}>
                    Hệ sinh thái số bền vững mang lại lợi nhuận và giá trị cho Cộng đồng Mở ra cơ hội đầu tư vào thị
                    trường bất động sản đầy tiềm năng từ nhiều nền tảng trên toàn Thế giới.
                  </Typography>
                  <AnimWhenVisible
                    variants={{ hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } }}
                    index={props.index}
                  >
                    <Button
                      variant="contained"
                      endIcon={<img src="/assets/imgs/landing/arrow-circle-right.svg" alt="arrow" />}
                    >
                      Become an invest
                    </Button>
                  </AnimWhenVisible>
                </Box>
              </Grid>
              <Grid item xs={0} sm={3}></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </MainItemComponent>
  );
};
