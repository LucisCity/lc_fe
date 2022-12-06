import React from "react";
import { Box, styled } from "@mui/system";
import { Button, Card, Divider, Grid, Paper, Typography } from "@mui/material";
import { Background } from "../landing/components/background";
import Avatar from "@mui/material/Avatar";
import Stack from '@mui/material/Stack';
import Link from "next/link";
import { useRouter } from 'next/router'

interface IProps {
  href?: string;
  value?: string;
}

const SideBarNavigation = () => {
  return(
    <Grid item xs={3}>
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
        <Divider variant="middle" color="#fff"/>
        <Button
          variant="contained"
          LinkComponent={Link}
          href="/dashboard"
          sx={{mt: 5}}
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
        >
          <Typography fontSize={16} fontWeight={500}>Đăng xuất</Typography>
        </Button>
      </Stack>
    </Grid>
  )
}

const DashBoard = () => {
  return (
    <Grid item xs={9} sx={{color: "#fff"}}>
      <Typography>Dashboard</Typography>
      <Grid>

      </Grid>
    </Grid>
  )
}

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
      <Grid
          container
          spacing={0}
          borderRadius={4}
          mt={27}
          mx={{ xs: 10, md: 35}}
          width="inherit"
          // pl={{ xs: 5, sm: 10, md: 18, lg: 22 }}
          // pr={{ xs: 5, sm: 10, md: 18, lg: 22 }}
          border={"1px solid #f9f9f9"}
          sx={{
            background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
            backdropFilter: "blur(16px)",
          }}
          zIndex={2}
          position={"relative"}
        >
          <SideBarNavigation />
          {/*<Divider orientation="vertical" flexItem />*/}
          <DashBoard />
        </Grid>
    </>
  );
};
