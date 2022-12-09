/* eslint-disable */
import React from "react";
import { Card } from "@mui/material";
import { Background } from "../landing/components/background";
import { NavigationBar } from "./components/navbar";
import { DashBoard } from "./dashboard";

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
        }}
        elevation={0}
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
