import React from "react";
import { Box, styled } from "@mui/system";
import { CardSection } from "../landing/card_section";
import { Avatar, Container, Grid, Paper, Typography } from "@mui/material";

const Main = styled("main")(({ theme }) => ({
  background: "",
}));
export const MemberPage = () => {
  return (
    <Main
      sx={{
        background: `url(${"assets/imgs/member/background.jpg"})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
        width: "100%",
      }}
    >
      <CardSection disabledBackground={true} disabledAnimation={true} disabledReadmoreButton={true} />
      <Box pb={10} position={"relative"}>
        <Container>
          <Box
            borderRadius={4}
            pt={10}
            pb={10}
            pl={22}
            pr={22}
            border={"1px solid #fff"}
            sx={{
              background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
              backdropFilter: "blur(16px)",
            }}
            zIndex={2}
            position={"relative"}
          >
            <Typography
              variant={"h1"}
              mb={8}
              sx={{
                display: "flex",
                fontWeight: 600,
                textTransform: "uppercase",
                fontSize: 20,
                justifyContent: "center",
              }}
            >
              Become our membership to gain benefits
            </Typography>
            <Box>
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <Box
                    component={Paper}
                    bgcolor={"rgba(255, 255, 255, 0.5)"}
                    sx={{ backdropFilter: "blur(15px)" }}
                    elevation={0}
                    pt={5}
                    pb={5}
                    pl={5}
                  >
                    <Typography>Maximum investment</Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box
                    component={Paper}
                    bgcolor={"rgba(255, 255, 255, 0.5)"}
                    sx={{ backdropFilter: "blur(15px)" }}
                    elevation={0}
                    pt={5}
                    pb={5}
                    pl={5}
                  >
                    <Typography>$100,000</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    component={Paper}
                    bgcolor={"rgba(255, 255, 255, 0.5)"}
                    sx={{ backdropFilter: "blur(15px)" }}
                    elevation={0}
                    pt={5}
                    pb={5}
                    pl={5}
                  >
                    <Typography>Vault token discount</Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box
                    component={Paper}
                    bgcolor={"rgba(255, 255, 255, 0.5)"}
                    sx={{ backdropFilter: "blur(15px)" }}
                    elevation={0}
                    pt={5}
                    pb={5}
                    pl={5}
                  >
                    <Typography>3%</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    component={Paper}
                    bgcolor={"rgba(255, 255, 255, 0.5)"}
                    sx={{ backdropFilter: "blur(15px)" }}
                    elevation={0}
                    pt={5}
                    pb={5}
                    pl={5}
                  >
                    <Typography>Transaction fee discount</Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box
                    component={Paper}
                    bgcolor={"rgba(255, 255, 255, 0.5)"}
                    sx={{ backdropFilter: "blur(15px)" }}
                    elevation={0}
                    pt={5}
                    pb={5}
                    pl={5}
                  >
                    <Typography>8%</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    component={Paper}
                    bgcolor={"rgba(255, 255, 255, 0.5)"}
                    sx={{ backdropFilter: "blur(15px)" }}
                    elevation={0}
                    pt={5}
                    pb={5}
                    pl={5}
                  >
                    <Typography>Discount on rental price</Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box
                    component={Paper}
                    bgcolor={"rgba(255, 255, 255, 0.5)"}
                    sx={{ backdropFilter: "blur(15px)" }}
                    elevation={0}
                    pt={5}
                    pb={5}
                    pl={5}
                  >
                    <Typography>No</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    component={Paper}
                    bgcolor={"rgba(255, 255, 255, 0.5)"}
                    sx={{ backdropFilter: "blur(15px)" }}
                    elevation={0}
                    pt={5}
                    pb={5}
                    pl={5}
                  >
                    <Typography>Discount on rental price</Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box
                    component={Paper}
                    bgcolor={"rgba(255, 255, 255, 0.5)"}
                    sx={{ backdropFilter: "blur(15px)" }}
                    elevation={0}
                    pt={5}
                    pb={5}
                    pl={5}
                  >
                    <Typography>No</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    component={Paper}
                    bgcolor={"rgba(255, 255, 255, 0.5)"}
                    sx={{ backdropFilter: "blur(15px)" }}
                    elevation={0}
                    pt={5}
                    pb={5}
                    pl={5}
                  >
                    <Typography>Discount on rental price</Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box
                    component={Paper}
                    bgcolor={"rgba(255, 255, 255, 0.5)"}
                    sx={{ backdropFilter: "blur(15px)" }}
                    elevation={0}
                    pt={5}
                    pb={5}
                    pl={5}
                  >
                    <Typography>No</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    component={Paper}
                    bgcolor={"rgba(255, 255, 255, 0.5)"}
                    sx={{ backdropFilter: "blur(15px)" }}
                    elevation={0}
                    pt={5}
                    pb={5}
                    pl={5}
                  >
                    <Typography>Discount on rental price</Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box
                    component={Paper}
                    bgcolor={"rgba(255, 255, 255, 0.5)"}
                    sx={{ backdropFilter: "blur(15px)" }}
                    elevation={0}
                    pt={5}
                    pb={5}
                    pl={5}
                  >
                    <Typography>No</Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box
                    component={Paper}
                    bgcolor={"rgba(255, 255, 255, 0.5)"}
                    sx={{ backdropFilter: "blur(15px)" }}
                    elevation={0}
                    pt={5}
                    pb={5}
                    pl={5}
                  >
                    <Typography>Discount on rental price</Typography>
                  </Box>
                </Grid>
                <Grid item xs={8}>
                  <Box
                    component={Paper}
                    bgcolor={"rgba(255, 255, 255, 0.5)"}
                    sx={{ backdropFilter: "blur(15px)" }}
                    elevation={0}
                    pt={5}
                    pb={5}
                    pl={5}
                  >
                    <Typography>No</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        <Box
          sx={{
            width: 256,
            height: 256,
            background: "linear-gradient(316.44deg, #6555EE 16.28%, #ECD34F 88.6%)",
            borderRadius: "50%",
            filter: "blur(6px)",
            position: "absolute",
            right: 250,
            top: -100,
            zIndex: 1,
          }}
        />
      </Box>
      <Box
        bgcolor={"rgba(101, 85, 238, 1)"}
        sx={{
          backgroundImage: `url("/assets/imgs/landing/line_background.svg")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
        }}
      >
        <Container>
          <Box pt={20} pb={20}>
            <Typography
              variant={"h1"}
              sx={{
                display: "flex",
                fontWeight: 700,
                textTransform: "uppercase",
                fontSize: 32,
                justifyContent: "flex-start",
                color: "#fff",
              }}
            >
              Hướng dẫn mua <br /> thẻ thành viên
            </Typography>
            <Box pt={12}>
              <Grid container spacing={5}>
                <Grid item xs={12} md={3}>
                  <Box component={Paper} elevation={0} borderRadius={4} p={8}>
                    <Box>
                      <Avatar sx={{ bgcolor: "rgba(101, 85, 238, 1)" }}>1</Avatar>
                    </Box>
                    <Typography sx={{ fontWeight: 600, fontSize: 20 }} mb={10} mt={4}>
                      Contrary to popular
                    </Typography>
                    <Typography>
                      {`There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't.`}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box component={Paper} elevation={0} borderRadius={4} p={8}>
                    <Box>
                      <Avatar sx={{ bgcolor: "rgba(101, 85, 238, 1)" }}>1</Avatar>
                    </Box>
                    <Typography sx={{ fontWeight: 600, fontSize: 20 }} mb={10} mt={4}>
                      Contrary to popular
                    </Typography>
                    <Typography>
                      {`There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't.`}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box component={Paper} elevation={0} borderRadius={4} p={8}>
                    <Box>
                      <Avatar sx={{ bgcolor: "rgba(101, 85, 238, 1)" }}>1</Avatar>
                    </Box>
                    <Typography sx={{ fontWeight: 600, fontSize: 20 }} mb={10} mt={4}>
                      Contrary to popular
                    </Typography>
                    <Typography>
                      {`There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't.`}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Box component={Paper} elevation={0} borderRadius={4} p={8}>
                    <Box>
                      <Avatar sx={{ bgcolor: "rgba(101, 85, 238, 1)" }}>1</Avatar>
                    </Box>
                    <Typography sx={{ fontWeight: 600, fontSize: 20 }} mb={10} mt={4}>
                      Contrary to popular
                    </Typography>
                    <Typography>
                      {`There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't.`}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>
    </Main>
  );
};
