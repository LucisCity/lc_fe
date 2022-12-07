import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import { Button, Divider, Typography, useMediaQuery } from "@mui/material";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import GridViewIcon from '@mui/icons-material/GridView';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const ItemStack = styled(Paper, {shouldForwardProp: (propsName) => propsName !== "active"})<{ active?: boolean }>(
  ({theme, active}) => ({
    display: "flex",
    alignItems: "center",
    padding: `${theme.spacing(5)} ${theme.spacing(3)}`,
    color: theme.palette.text.secondary,
    borderRadius: 8,
    background: "transparent",
    ":hover": {
      background: "rgba(255, 255, 255, 0.5)",
      backdropFilter: "blur(4px)",
    },
    ...(active && {
      background: "rgba(255, 255, 255, 0.5)",
      backdropFilter: "blur(4px)",
    }),
  }),
);


export const NavigationBar = () => {
  const theme = useTheme();
  // @ts-ignore
  const largeScreen = useMediaQuery(theme.breakpoints.up('md'));
  // @ts-ignore
  const smallScreen = useMediaQuery(theme.breakpoints.not('xs'));

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: {md: 'column', sx: 'row'},
      width: {md: "25%", sx: "100%"},
      p: {md: 5},
      pt: {xs: 2}
    }}>
      <Box px={2}>
        <Avatar
          src="https://www.cgv.vn/media/catalog/product/cache/3/image/1800x/71252117777b696995f01934522c402d/a/v/avatar-1615695904-2089-1615696022.jpg"
          sx={{height: {sm: "10vw", xs: "15vw"}, width: {sm: "10vw", xs: "15vw"}, m: "auto", mt: {md: 10}}}
        />
        <Typography align="center">Galaxy Platinum</Typography>
        <Button
          variant="outlined"
          sx={{
            color: "#6555EE",
            textTransform: "none",
            backgroundColor: "transparent",
            my: {md: 5},
            textAlign: "center",
            width: "100%",
            height: {md: "45px", xs: "fit-content"},
            p: {xs: 0}
          }}
          LinkComponent={Link}
          href="/verification"
        >
          <Typography fontSize={16} fontWeight={500}>Xác thực tài khoản</Typography>
        </Button>
      </Box>
      <Divider variant="middle" sx={{mb: 7, mt: 2, borderBottomWidth: 1.5, backgroundColor: "white"}}/>
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
            <Button
              variant="contained"
              LinkComponent={Link}
              href="/dashboard"
            >
              <GridViewIcon/>
              {smallScreen ?
                <Typography fontSize={16} fontWeight={500}>Dashboard</Typography>
                : null
              }
            </Button>
            <Button
              sx={{color: "#504C67", textTransform: "none", height: {md: "45px"}}}
              LinkComponent={Link}
              href="/account"
            >
              <AccountCircleOutlinedIcon/>
              {smallScreen ?
                <Typography fontSize={16} fontWeight={500}>Tài khoản</Typography>
                : null
              }
            </Button>
            <Button
              sx={{color: "#504C67", textTransform: "none", height: {md: "45px"}}}
              LinkComponent={Link}
              href="/investment"
            >
              <PaidOutlinedIcon/>
              {smallScreen ?
                <Typography fontSize={16} fontWeight={500}>Sản phẩm đầu tư</Typography>
                : null
              }
            </Button>
            <Button
              sx={{color: "#504C67", textTransform: "none", height: {md: "45px"}}}
              LinkComponent={Link}
              href="/notification"
            >
              <NotificationsActiveOutlinedIcon/>
              {smallScreen ?
                <Typography fontSize={16} fontWeight={500}>Thông báo</Typography>
                : null
              }
            </Button>
          </Stack>
        </Grid>
        <Grid
          item
          xs={6}
          md={12}
          mx={{sm: 2}}
          mt={{md: 50}}
        >
          <Button
            variant="contained"
            LinkComponent={Link}
            href="/login"
            sx={{width: "100%"}}
            startIcon={<LogoutOutlinedIcon/>}
          >
            <Typography fontSize={16} fontWeight={500}>Đăng xuất</Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
