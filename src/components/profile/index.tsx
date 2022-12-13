/* eslint-disable */
import React from "react";
import { Card, Grid } from "@mui/material";
import { ProfileNavBar } from "./components/navbar/navbar";
import { Background } from "../common/background/background";
import ScrollPage from "../layout/scroll_page";
import { Container } from "@mui/system";
import { useRouter } from "next/router";

export interface ProfileSubPage {
  name: string;
  href: string;
}

export const pages: Array<ProfileSubPage> = [
  {
    name: "Dashboard",
    href: "/profile/dashboard",
  },
  {
    name: "Tài khoản",
    href: "/profile/account",
  },
  {
    name: "Sản phẩm đầu tư",
    href: "/profile/investment",
  },
  {
    name: "Membership",
    href: "/profile/membership",
  },
  {
    name: "Referral",
    href: "/profile/news",
  },
  {
    name: "Thông báo",
    href: "/profile/notification",
  },
];

type Props = {
  children: any;
};

export const ProfileLayout = (props: Props) => {

  const router = useRouter();

  return (
    <ScrollPage pt={0}>
      <Container
      >
        <Background
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: -1,
          }}
        />
        <Card
          sx={{
            minHeight: 800,
            width: "inherit",
            mt: 4,
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
            <Grid item sm={3} xs={12}>
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
