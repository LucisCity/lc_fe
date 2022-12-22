/* eslint-disable */
import React from "react";
import { Card, Grid } from "@mui/material";
import { ProfileNavBar } from "./components/navbar/navbar";
import ScrollPage from "../layout/scroll_page";
import { Box, Container } from "@mui/system";
import s from "./index.module.sass";
import UserStore from "../../store/user.store";
import { observer } from "mobx-react-lite";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";

type Props = {
  children: any;
};

export const ProfileLayout = observer((props: Props) => {
  const loading = !UserStore.isLoadedFromLocal;

  return (
    <ScrollPage>
      {/*<Background />*/}
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
      <Container component="div" className={s.profileC}>
        <Card
          sx={{
            minHeight: { sm: 900 },
            width: "inherit",
            mb: 15,
            display: "flex",
            background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
            backdropFilter: "blur(16px)",
            borderRadius: 4,
            borderLeft: "1px solid #fff",
            borderTop: "1px solid #fff",
            borderBottom: "1px solid #fff",
            borderRight: { md: "none", xs: "1px solid #fff" },
          }}
          elevation={0}
        >
          <Grid container>
            <Grid
              item
              sm={3}
              xs={12}
              sx={{
                WebkitBackfaceVisibility: "hidden",
                MozBackfaceVisibility: "hidden",
                WebkitTransform: "translate3d(0, 0, 0)",
                MozTransform: "translate3d(0, 0, 0)",
              }}
            >
              <ProfileNavBar />
            </Grid>
            <Grid
              item
              sm={9}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#f9f9f9",
                WebkitBackfaceVisibility: "hidden",
                MozBackfaceVisibility: "hidden",
                WebkitTransform: "translate3d(0, 0, 0)",
                MozTransform: "translate3d(0, 0, 0)",
              }}
            >
              {loading ? null : UserStore.isLoggedIn ? (
                props.children
              ) : (
                <Box
                  height={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Typography variant={"h3"} mb={4}>
                    Bạn phải đăng nhập mới có thể xem thông tin.
                  </Typography>
                  <Button LinkComponent={Link} href={"/login"} variant={"contained"}>
                    Đăng nhập
                  </Button>
                </Box>
              )}
            </Grid>
          </Grid>
        </Card>
      </Container>
    </ScrollPage>
  );
});
