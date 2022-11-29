import React from "react";
import { Box, styled } from "@mui/system";
import { CardSection } from "../landing/card_section";
import { Container, Grid, Paper, Typography } from "@mui/material";

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
      <Box pb={10}>
        <Container>
          <Box
            bgcolor={"linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)"}
            borderRadius={16}
            pt={10}
            pb={10}
            pl={22}
            pr={22}
            border={"1px solid #fff"}
            sx={{
              backdropFilter: "blur(16px)",
            }}
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
      </Box>
    </Main>
  );
};
