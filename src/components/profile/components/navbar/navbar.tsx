/* eslint-disable */
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import { Button, Divider, Typography, useMediaQuery } from "@mui/material";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import React from "react";
import { useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import SvgIcon from "../../../common/svg_icon";
import s from "./navbar.module.scss";

interface TabProps {
  href: string;
  name: string;
  svgSrc: string;
  logoutButton?: boolean;
  active?: boolean;
  topLogoutButton?: boolean;
}

const Tab = (props: TabProps) => {

  return (
    <Button
      className={`
        ${props.logoutButton ?
        (props.topLogoutButton ? s.topLogoutButton : s.bottomLogoutButton) :
        (props.active ? s.active : s.default)}
      `}
      href={props.href}
      LinkComponent={Link}
      sx={{
        ":hover": {
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(4px)",
          color: '#504C67',
        },
        textTransform: "none",
        // height: {md: "56px", sm: 50, xs: 38},
        height: 56,
        display: "flex",
        // justifyContent: {md: "left", sm: "center", xs: "center"},
        justifyContent: "left",
        width: {sm: "auto"},
      }}
      // onClick={handleButtonClick}
    >
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        ml: {md: 4, sm: 2, xs: 5},
        mr: {md: 7, sm: 4, xs: 10}
      }}>
        <SvgIcon src={props.svgSrc}/>
      </Box>
      <Typography
        fontSize={16} fontWeight={500}
      >
        {props.name}
      </Typography>
    </Button>
  )
};

const iconSrc = "/assets/imgs/icon/";
const tabs = [
  {
    name: "Dashboard",
    href: "/profile",
    svgSrc: iconSrc + 'dashboard.svg',
  },
  {
    name: "Tài khoản",
    href: "/profile/account",
    svgSrc: iconSrc + 'user_account.svg',
  },
  {
    name: "Sản phẩm đầu tư",
    href: "/profile/investment",
    svgSrc: iconSrc + 'investment.svg',
  },
  {
    name: "Referral",
    href: "/profile/referral",
    svgSrc: iconSrc + 'referral.svg',
  },
  {
    name: "Thông báo",
    href: "/profile/notification",
    svgSrc: iconSrc + 'notification.svg',
  },
  {
    name: "Ứng dụng",
    href: "/profile/application",
    svgSrc: iconSrc + 'notification.svg',
  },
]

interface ProfileNavBarProps {
  activeTab: string;
}

export const ProfileNavBar = (props: ProfileNavBarProps) => {

  return (
    <React.Fragment>
      <Box sx={{
        py: {sm: 4, xs: 5},
        px: {sm: 2},
        pt: {xs: 2},
        height: "100%",
      }}>
        <Box
          className={s.cardBg}
          sx={{
            position: "absolute",
            width: "193px",
            height: "193px",
            left: "0px",
            top: "90px",
            background: "radial-gradient(57.77% 87.77% at 31.87% 41.97%, #FFBC6C 0%, #6555EE 100%)",
            filter: "blur(40px)",
            zIndex: -2,
          }}
        >
        </Box>
        <Box
          className={s.cardBg}
          sx={{
            position: "absolute",
            width: "193px",
            height: "193px",
            left: "17%",
            top: "464px",
            background: "linear-gradient(180deg, #778AED 0%, #8274F9 0.01%, #6555EE 53.65%, #4A3CC1 98.44%)",
            filter: "blur(60px)",
            zIndex: -2,
          }}
        >
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Grid px={{sm: 2, xs: 0}} py={{sm: 0, xs: 4}} container direction="row">
            <Grid item sm={12} xs={6}>
              <Avatar
                src="https://images.pexels.com/photos/236599/pexels-photo-236599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                sx={{height: "120px", width: "120px", m: "auto", mt: {md: 7, sm: 3}}}
              />
              <Box
                mt={{sm: 6, xs: 2}}
                sx={{display: "flex", justifyContent: "center"}}
              >
                <img width={"80%"}
                     src="/assets/imgs/landing/card_title.png" alt="galaxy card"/>
              </Box>
            </Grid>
            <Grid item sm={12} xs={6} px={{sm: 0, xs: 3}}>
              <Tab
                href={"/login"}
                name={"Đăng xuất"}
                svgSrc={"/assets/imgs/icon/log_out.svg"}
                logoutButton={true}
                topLogoutButton={true}
              />
              <Button
                variant="outlined"
                sx={{
                  color: "#6555EE",
                  textTransform: "none",
                  background: "transparent",
                  my: 5,
                  textAlign: "center",
                  width: "100%",
                  // height: {sm: "50px", xs: "fit-content"},
                  py: {xs: 6},
                  px: {xs: 0},
                  border: "1px solid",
                }}
                LinkComponent={Link}
                href="/verification"
              >
                <Typography fontSize={{xs: 16}} fontWeight={500}>
                  Xác thực tài khoản
                </Typography>
              </Button>
              <Divider
                variant="middle"
                sx={{
                  mx: 3,
                  mt: 4,
                  mb: 9,
                  borderBottomWidth: 1,
                  borderBottomColor: "#fff",
                  display: {sm: "block", xs: "none"},
                }}
              />
              {/*// <Divider*/}
              {/*//   orientation="vertical"*/}
              {/*//   variant="middle"*/}
              {/*//   flexItem*/}
              {/*//   sx={{borderRightWidth: 1, borderRightColor: "#fff"}}*/}
              {/*// />*/}
            </Grid>
          </Grid>
          <Grid
            // px={2}
            container
            sx={{flex: 1}}
          >
            <Grid
              item xs={12}
              sx={{height: "100%"}}
            >
              <Stack
                direction="column"
                spacing={{sm: 2, xs: 3}}
                mx={{sm: 2, xs: "5%"}}
                mt={{sm: 0, xs: 3}}
                sx={{height: "100%"}}
                justifyContent={"space-between"}
                // display={{md: "block", xs: "flex"}}
                // alignItems={{xs: "flex-end"}}
                // pb={{md: 0, xs: 2}}
              >
                <Stack
                  direction="column"
                  spacing={{sm: 2, xs: 3}}
                  // display={{md: "block", xs: "flex"}}
                  // alignItems={{xs: "flex-end"}}
                  // pb={{md: 0, xs: 2}}
                >
                  {tabs.map((tab) => (
                    <Tab key={tab.name} href={tab.href} name={tab.name} svgSrc={tab.svgSrc}
                         active={tab.href === props.activeTab}/>
                  ))}
                </Stack>
                <Tab
                  href={"/login"}
                  name={"Đăng xuất"}
                  svgSrc={"/assets/imgs/icon/log_out.svg"}
                  logoutButton={true}
                />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  )
}
