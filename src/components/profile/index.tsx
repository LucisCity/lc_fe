/* eslint-disable */
import React from "react";
import { Card } from "@mui/material";
import { NavigationBar } from "./components/navbar";
import { ProfileDashboard } from "./dashboard";
import { Background } from "../common/background/background";
import ScrollPage from "../layout/scroll_page";
import { Box } from "@mui/system";
import { ProfileAccount } from "./account";

export const ProfilePage = () => {
  return (
    <ScrollPage pt={0}>
      <Background
        style={{
          position: "fixed",
          top: 0,
          width: "100vw",
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
          minHeight: 800,
          width: "inherit",
          mt: 4,
          mb: 15,
          mx: {sm: "10.5%", xs: "5%"},
          display: "flex",
          flexDirection: {md: "row", xs: "column"},
          background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
          backdropFilter: "blur(16px)",
          borderRadius: 4,
          borderLeft: "1px solid #fff",
          borderTop: "1px solid #fff",
          borderBottom: "1px solid #fff",
          borderRight: {md: "none", xs: "1px solid #fff"},
          zIndex: 2,
        }}
        elevation={0}
        // zIndex={2}
        // position={"relative"}
      >
        <NavigationBar/>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: "#f9f9f9",
          width: {md: "74%", sx: "100%"},
        }}>
          {/*<ProfileDashboard/>*/}
          <ProfileAccount/>
        </Box>
      </Card>
    </ScrollPage>
  );
};
