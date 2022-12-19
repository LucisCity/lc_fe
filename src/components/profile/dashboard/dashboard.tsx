/* eslint-disable */
import { Box } from "@mui/system";
import { Grid, Paper, Typography } from "@mui/material";
import DashboardTable from "./dashboard_table";
import React from "react";
// import { useStores } from "../../store";
import SvgIcon from "../../common/svg_icon";

const iconSrc = "/assets/imgs/icon/";

const tutorialStepData = [
  {
    title: "Tổng tài sản ước tính",
    content: "$ 362.454,21",
    svgSrc: iconSrc + "total_asset.svg",
  },
  {
    title: "Số tiền đã đầu tư",
    content: "$ 22.851,09",
    svgSrc: iconSrc + "invested_amount.svg",
  },
  {
    title: "Số dư hiện tại",
    content: "$ 2.721,45",
    svgSrc: iconSrc + "surplus.svg",
  },
  {
    title: "Tỉ suất lợi nhuận",
    content: "$ 2.721,45",
    svgSrc: iconSrc + "profit.svg",
  },
];

const DashBoardItems = () => {
  return (
    <>
      {tutorialStepData.map((item, index) => (
        <React.Fragment key={item.title}>
          <Grid item xs={12} sm={6} md={3} height={"inherit"} my={{md: 2}}>
            <Paper
              elevation={index === 0 ? 5 : 0}
              sx={{
                borderRadius: 4,
                px: {sm: 4, xs: 7},
                // pl: {md: 4, sm: 4, xs: 1},
                py: 5,
                height: "100%",
                background: `${index === 0 ? "#6555EE" : "#fff"}`,
                color: `${index === 0 ? "#fff" : "#504C67"}`,
              }}
            >
              <Box
                width={40}
                height={40}
                sx={{background: index === 0 ? "#fff" : "#504C67"}}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={2}
              >
                <SvgIcon src={item.svgSrc}/>
              </Box>
              <Typography fontSize={{lg: 16, md: 13, xs: 16}} my={2}>
                {item.title}
              </Typography>
              <Typography fontSize={{lg: 25, md: 20, xs: 30}} fontWeight={600}>
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
  return (
    <Box mx={{sm: 10, xs: 3}} my={7}>
      <Typography fontWeight={700} fontSize={{sm: 32, xs: 25}} textAlign={{sm: "left", xs: "center"}}>
        Dashboard
      </Typography>
      <Box mt={5} mx={{sm: 0, xs: 6}}>
        <Grid container direction={{sm: "row", xs: "column"}} spacing={2} height={"auto"}>
          <DashBoardItems/>
        </Grid>
      </Box>
      <Typography variant={"h3"} textAlign={{sm: "left", xs: "center"}} my={5}>
        Lịch sử giao dịch
      </Typography>
      <DashboardTable/>
    </Box>
  );
};
