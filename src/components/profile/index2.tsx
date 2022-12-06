import React from "react";
import { Box, styled } from "@mui/system";
import { Button, Card, Divider, Grid, Paper, Typography } from "@mui/material";
import { Background } from "../landing/components/background";
import Avatar from "@mui/material/Avatar";
import Stack from '@mui/material/Stack';
import Link from "next/link";
import { useRouter } from 'next/router'
import CustomPaginationActionsTable from "./components/table";

interface IProps {
  href?: string;
  value?: string;
}

const SideBarNavigation = () => {
  return(
    <Box sx={{ display: 'flex', flexDirection: 'column', width: "25%" }}>
      <Box p={5}>
        <Avatar
          src="https://www.cgv.vn/media/catalog/product/cache/3/image/1800x/71252117777b696995f01934522c402d/a/v/avatar-1615695904-2089-1615696022.jpg"
          sx={{ height: "120px", width: "120px", m: "auto", mt: 10}}
        />
        <Typography align="center">Galaxy Platinum</Typography>
        <Stack spacing={2} mx={2}>
          <Button
            variant="outlined"
            sx={{color: "#6555EE", textTransform: "none", backgroundColor: "transparent", my: 5, textAlign: "center"}}
            LinkComponent={Link}
            href="/verification"
          >
            <Typography fontSize={16} fontWeight={500}>Xác thực tài khoản</Typography>
          </Button>
          <Divider variant="middle" color="#ffffff"/>
          <Button
            variant="contained"
            LinkComponent={Link}
            href="/dashboard"
          >
            <Typography fontSize={16} fontWeight={500}>Dashboard</Typography>
          </Button>
          <Button
            sx={{color: "#504C67", textTransform: "none", height: {md: "45px"}}}
            LinkComponent={Link}
            href="/account"
          >
            <Typography fontSize={16} fontWeight={500}>Tài khoản</Typography>
          </Button>
          <Button
            sx={{color: "#504C67", textTransform: "none", height: {md: "45px"}}}
            LinkComponent={Link}
            href="/investment"
          >
            <Typography fontSize={16} fontWeight={500}>Sản phẩm đầu tư</Typography>
          </Button>
          <Button
            sx={{color: "#504C67", textTransform: "none", height: {md: "45px"}}}
            LinkComponent={Link}
            href="/notification"
          >
            <Typography fontSize={16} fontWeight={500}>Thông báo</Typography>
          </Button>
          <Button
            variant="contained"
            LinkComponent={Link}
            href="/login"
            sx={{position: "absolute", bottom: "30px"}}
          >
            <Typography fontSize={16} fontWeight={500}>Đăng xuất</Typography>
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

const DashBoard = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', backgroundColor: "#F9F9F9", width:  "75%" }}>
      <Box m={10}>
        <Typography fontWeight={700} fontSize={32}>Dashboard</Typography>
        <Box my={5}>
          <Grid container spacing={5} height={"auto"}>
            <TutorialStepComponent />
          </Grid>
        </Box>
        <CustomPaginationActionsTable />
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
              <Typography sx={{ fontSize: 16 }}>
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


export const ProfilePage1 = () => {
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
          my: 27,
          mx: 35,
          display: "flex",
          background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
          backdropFilter: "blur(16px)",
        }}
        // zIndex={2}
        // position={"relative"}
      >
        <SideBarNavigation />
        {/*<Divider orientation="vertical" flexItem />*/}
        <DashBoard />
      </Card>
    </>
  );
};
