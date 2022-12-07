import React from "react";
import { Box } from "@mui/system";
import { Card, Grid, Paper, Typography } from "@mui/material";
import { Background } from "../landing/components/background";
import { NavigationBar } from "./components/navbar";
import CustomPaginationActionsTable from "./components/table";

const DashBoard = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', backgroundColor: "#F9F9F9", width: {md: "75%", sx: "100%"}}}>
      <Box m={10}>
        <Typography fontWeight={700} fontSize={32}>Dashboard</Typography>
        <Box my={5}>
          <Grid container spacing={5} height={"auto"}>
            <TutorialStepComponent/>
          </Grid>
        </Box>
        <CustomPaginationActionsTable/>
      </Box>
    </Box>
  )
}
const tutorialStepData = [
  {
    title: "Tổng tài sản ước tính",
    content: "$ 362.454,21",
  },
  {
    title: "Số tiền đã đầu tư",
    content: "$ 22.851,09",
  },
  {
    title: "Số dư hiện tại",
    content: "$ 2.721,45",
  },
];

const TutorialStepComponent = () => {
  return (
    <>
      {tutorialStepData.map((item) => (
        <React.Fragment key={item.title}>
          <Grid item xs={4} height={"inherit"}>
            <Box component={Paper} elevation={0} borderRadius={4} p={4} height={"100%"}>
              <Typography sx={{fontSize: 16}}>
                {item.title}
              </Typography>
              <Typography fontSize={32} fontStyle="bold" my={4}>{item.content}</Typography>
            </Box>
          </Grid>
        </React.Fragment>
      ))}
    </>
  );
};


export const ProfilePage = () => {
  return (
    <>
      <Background
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: -1,
        }}
      />
      <Card
        // borderRadius={4}
        // mt={27}
        // mx={{ xs: 10, md: 35}}
        // width="inherit"
        // pl={{ xs: 5, sm: 10, md: 18, lg: 22 }}
        // pr={{ xs: 5, sm: 10, md: 18, lg: 22 }}
        // border={"1px solid #f9f9f9"}
        sx={{
          width: "inherit",
          my: {sm: 27, xs: 20},
          mx: {sm: "10%", xs: "5%"},
          display: "flex",
          flexDirection: {md: "row", xs: "column"},
          background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
          backdropFilter: "blur(16px)",
          borderRadius: 4
        }}
        // zIndex={2}
        // position={"relative"}
      >
        <NavigationBar/>
        {/*<Divider orientation="vertical" flexItem />*/}
        <DashBoard/>
      </Card>
    </>
  );
};
