/* eslint-disable */
import { Box } from "@mui/system";
import { Grid, Paper, Typography } from "@mui/material";
import CustomPaginationActionsTable from "./components/table";
import React, { useEffect } from "react";
// import { useStores } from "../../store";
import Router from "next/router";

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

const DashBoardItem = () => {
  return (
    <>
      {tutorialStepData.map((item) => (
        <React.Fragment key={item.title}>
          <Grid item xs={4} height={"inherit"} my={{ md: 2 }}>
            <Paper
              elevation={item.title == "Tổng tài sản ước tính" ? 5 : 0}
              sx={{
                borderRadius: 4,
                px: { sm: 4, xs: 7 },
                // pl: {md: 4, sm: 4, xs: 1},
                py: { md: 7, xs: 3 },
                height: "100%",
                background: `${item.title == "Tổng tài sản ước tính" ? "#6555EE" : "#fff"}`,
                color: `${item.title == "Tổng tài sản ước tính" ? "#fff" : "#504C67"}`,
              }}
            >
              <Typography fontSize={{ lg: 16, md: 13.5, xs: 16 }} fontWeight={500}>
                {item.title}
              </Typography>
              <Typography fontSize={{ md: 30, xs: 20 }} fontWeight={600} my={{ lg: 4, sm: 2, xs: 0 }}>
                {item.content}
              </Typography>
            </Paper>
          </Grid>
        </React.Fragment>
      ))}
    </>
  );
};

export const ProfileDashboard = () => {
  // const { userStore } = useStores();
  //
  // useEffect(() => {
  //   if (!userStore.isLogedIn) {
  //     Router.push("/login");
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <Box mx={{ sm: 10, xs: 3 }} my={7}>
      <Typography fontWeight={700} fontSize={{ sm: 32, xs: 25 }} textAlign={{ sm: "left", xs: "center" }}>
        Dashboard
      </Typography>
      <Box mt={5} mb={3} mx={{ sm: 0, xs: 6 }}>
        <Grid container direction={{ sm: "row", xs: "column" }} spacing={3} height={"auto"}>
          <DashBoardItem />
        </Grid>
      </Box>
      <CustomPaginationActionsTable />
    </Box>
  );
};
