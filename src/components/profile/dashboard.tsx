/* eslint-disable */
import { Box } from "@mui/system";
import { Grid, Paper, Typography } from "@mui/material";
import CustomPaginationActionsTable from "./components/table";
import React from "react";

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
          <Grid item xs={4} height={"inherit"} my={2}>
            <Paper
              elevation={item.title == "Tổng tài sản ước tính" ? 5 : 0}
              sx={{
                borderRadius: 4,
                px: 4,
                py: 7,
                height: "100%",
                background: `${item.title == "Tổng tài sản ước tính"? "#6555EE" : "#fff"}`,
                color: `${item.title == "Tổng tài sản ước tính"? "#fff" : '#504C67'}`,
              }}
            >
              <Typography sx={{fontSize: 16}} fontWeight={500}>
                {item.title}
              </Typography>
              <Typography fontSize={32} fontWeight={600} my={4}>{item.content}</Typography>
            </Paper>
          </Grid>
        </React.Fragment>
      ))}
    </>
  );
};

export const DashBoard = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: "#f9f9f9",
      width: {md: "74%", sx: "100%"},
    }}>
      <Box mx={10} my={7}>
        <Typography fontWeight={700} fontSize={32}>Dashboard</Typography>
        <Box mt={5} mb={3}>
          <Grid container spacing={3} height={"auto"}>
            <DashBoardItem/>
          </Grid>
        </Box>
        <CustomPaginationActionsTable/>
      </Box>
    </Box>
  )
}
