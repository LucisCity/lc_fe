/* eslint-disable */
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import { Button, Divider, Typography, useMediaQuery } from "@mui/material";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import React from "react";
import { useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import GridViewIcon from '@mui/icons-material/GridView';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SvgIcon from "../../common/svg_icon";

interface TabProps {
  href: string;
  textColor?: string;
  children?: any;
  background?: string;
  borderRadius?: number;
}

const Tab = (props: TabProps) => {

  const borderRadius = props.borderRadius ?? 8;
  return (
    <Button
      href={props.href}
      LinkComponent={Link}
      sx={{
        background: `${props.background ?? 'transparent'}`,
        ":hover": {
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(4px)",
          color: '#504C67',
        },
        color: `${props.textColor ?? '#504C67'}`,
        textTransform: "none",
        height: {md: "56px"},
        borderRadius: {borderRadius},
        display: "flex",
        justifyContent: {sm: "left", xs: "center"},
        width: {md: "auto", xs: "25%"},
        padding: {xl: 5, xs: 0},
      }}
    >
      {props.children}
    </Button>
  )
};


export const NavigationBar = () => {
  const theme = useTheme();
  // @ts-ignore
  const largeScreen = useMediaQuery(theme.breakpoints.up('md'));
  // @ts-ignore
  const smallScreen = useMediaQuery(theme.breakpoints.not('xs'));
  const avatarSize = {sm: "8.5vw", xs: "15vw"};

  // console.log("profile navbar render");
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: {md: 'column', sx: 'row'},
      width: {md: "26%", sx: "100%"},
      py: {md: 4},
      px: {md: 2},
      pt: {xs: 2},
    }}>
      <Box
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
        sx={{zIndex: 1}}
      >
        <Box px={2}>
          <Avatar
            src="https://www.cgv.vn/media/catalog/product/cache/3/image/1800x/71252117777b696995f01934522c402d/a/v/avatar-1615695904-2089-1615696022.jpg"
            sx={{height: avatarSize, width: avatarSize, m: "auto", mt: {md: 7}}}
          />
          <img width={"80%"} height={"12vh"} style={{display: "block", margin: "auto", marginTop: 26}}
               src="/assets/imgs/landing/card_title.png" alt="galaxy card"/>
          <Button
            variant="outlined"
            sx={{
              color: "#6555EE",
              textTransform: "none",
              background: "transparent",
              my: {md: 5},
              textAlign: "center",
              width: "100%",
              height: {md: "50px", xs: "fit-content"},
              p: {xs: 0},
              border: "2px solid",
            }}
            LinkComponent={Link}
            href="/verification"
          >
            <Typography fontSize={16} fontWeight={500}>Xác thực tài khoản</Typography>
          </Button>
        </Box>
        {largeScreen ?
          <Divider
            variant="middle"
            sx={{mx: 6, mb: 9, mt: 4, borderBottomWidth: 1, borderBottomColor: "#fff"}}
          /> :
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{borderRightWidth: 1, borderRightColor: "#fff"}}
          />
        }
        <Grid
          container
          direction={largeScreen ? "row" : "column-reverse"}
        >
          <Grid item xs={6} md={12}>
            <Stack
              direction={largeScreen ? "column" : "row"}
              spacing={{sm: 2}}
              mx={{sm: 2}}
            >
              <Tab
                href="/dashboard"
                background="#6555EE"
                textColor="#fff"
              >
                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center",mx: {lg: 7, md: 4, sm: 2, xs: 1}}}>
                  <SvgIcon src={"/assets/imgs/icon/dashboard.svg"}/>
                </Box>
                {smallScreen ?
                  <Typography fontSize={16} fontWeight={500}>Dashboard</Typography>
                  : null
                }
              </Tab>
              <Tab
                href="/account"
              >
                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center",mx: {lg: 7, md: 4, sm: 2, xs: 1}}}>
                  <SvgIcon src={"/assets/imgs/icon/user_account.svg"}/>
                </Box>
                {smallScreen ?
                  <Typography fontSize={16} fontWeight={500}>Tài khoản</Typography>
                  : null
                }
              </Tab>
              <Tab
                href="/investment"
              >
                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center",mx: {lg: 7, md: 4, sm: 2, xs: 1}}}>
                  <SvgIcon src={"/assets/imgs/icon/investment.svg"}/>
                </Box>
                {smallScreen ?
                  <Typography fontSize={16} fontWeight={500}>Sản phẩm đầu tư</Typography>
                  : null
                }
              </Tab>
              <Tab
                href="/notification"
              >
                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center",mx: {lg: 7, md: 4, sm: 2, xs: 1}}}>
                  <SvgIcon src={"/assets/imgs/icon/notification.svg"}/>
                </Box>
                {smallScreen ?
                  <Typography fontSize={16} fontWeight={500}>Thông báo</Typography>
                  : null
                }
              </Tab>
            </Stack>
          </Grid>
          <Grid
            item
            xs={6}
            md={12}
            mx={{sm: 2}}
            position={{md: "absolute"}}
            bottom={{md: 20}}
            width={{md: "23%"}}
          >
            <Box>
              <Tab
                href="/login"
                textColor="#000000"
                borderRadius={16}
                background="rgba(255, 255, 255, 0.2)"
              >
                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center",mx: {lg: 7, md: 4, sm: 2, xs: 1}}}>
                  <SvgIcon src={"/assets/imgs/icon/log_out.svg"}/>
                </Box>
                <Typography fontSize={16} fontWeight={500}>Đăng xuất</Typography>
              </Tab>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
