import React from "react";
import { Box } from "@mui/system";
import { Container, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid";
import ScrollPage from "../layout/scroll_page";
import Typography from "@mui/material/Typography";
import StackAnim from "../anim/stack_anim";

export const MarketplacePage = () => {
  return (
    <ScrollPage>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: -1,
          background: `url("/assets/imgs/background/6.jpg")`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      />
      <Container>
        <StackAnim order={0}>
        <Box
          sx={{
            height: 200,
            background: "rgba(255, 255, 255, 0.5)",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mb: 10,
            textAlign: "center",
            // position: "absolute",
            // top: "50%",
            // left: "50%",
            // transform: "translate(-50%, -50%)",
          }}
        >
          <Typography color="#999" variant={"h2"}>
            Coming Soon
          </Typography>
          <Typography color="#999">
            Where you can trade your investment package or NFT items here
          </Typography>
        </Box>
        </StackAnim>
        <Box position={"relative"}>
          <Grid container spacing={6}>
            {Array.from({ length: 8 }).map((item, index) => (
              <Grid key={"mtp" + index} item lg={3} md={4} sm={6} xs={12}>
                <StackAnim order={index + 1}>
                <Box
                  sx={{
                    background: "rgba(255, 255, 255, 0.5)",
                    borderRadius: 2,
                  }}
                >
                  <Skeleton variant="rounded" height={130} sx={{ mb: 3, bgcolor: "rgba(238, 238, 238, 1)" }} />
                  <Box p={2}>
                    <Skeleton sx={{ bgcolor: "rgba(238, 238, 238, 1)" }} variant="rounded" height={30} width="70%" />
                    <Skeleton sx={{ bgcolor: "rgba(238, 238, 238, 1)" }} width="30%" />
                    <Skeleton sx={{ bgcolor: "rgba(238, 238, 238, 1)", mt: 2, mb: 2 }} height={5} />
                    <Box display={"flex"} justifyContent={"center"}>
                      <Skeleton variant="circular" width={15} height={15} />
                    </Box>
                  </Box>
                </Box>
                </StackAnim>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ScrollPage>
  );
};
