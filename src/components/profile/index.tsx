/* eslint-disable */
import React from "react";
import { Card, Grid } from "@mui/material";
import { ProfileNavBar } from "./components/navbar/navbar";
import { Background } from "../common/background/background";
import ScrollPage from "../layout/scroll_page";
import { Container } from "@mui/system";
import { useRouter } from "next/router";
import s from "./index.module.sass"

type Props = {
  children: any;
};

export const ProfileLayout = (props: Props) => {

  const router = useRouter();

  return (
    <ScrollPage>
      <Background/>
      <Container component="div" className={s.profileC}>
        <Card
          sx={{
            minHeight: 900,
            width: "inherit",
            mb: 15,
            display: "flex",
            background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
            backdropFilter: "blur(16px)",
            borderRadius: 4,
            borderLeft: "1px solid #fff",
            borderTop: "1px solid #fff",
            borderBottom: "1px solid #fff",
            borderRight: {md: "none", xs: "1px solid #fff"},
          }}
          elevation={0}
        >
          <Grid container>
            <Grid item sm={3} xs={12} sx={{
              WebkitBackfaceVisibility: "hidden",
              MozBackfaceVisibility: "hidden",
              WebkitTransform: "translate3d(0, 0, 0)",
              MozTransform: "translate3d(0, 0, 0)",
            }}>
              <ProfileNavBar activeTab={router.pathname === "/profile" ? "/profile/dashboard" : router.pathname}/>
            </Grid>
            <Grid
              item
              sm={9}
              xs={12}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: "#f9f9f9",

                WebkitBackfaceVisibility: "hidden",
                MozBackfaceVisibility: "hidden",
                WebkitTransform: "translate3d(0, 0, 0)",
                MozTransform: "translate3d(0, 0, 0)",
              }}
            >
              {props.children}
            </Grid>
          </Grid>
        </Card>
      </Container>
    </ScrollPage>
  );
};
