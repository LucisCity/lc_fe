import * as React from 'react';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SvgIcon from "../../common/svg_icon";
import { Button, ListItem, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import UserStore from "../../../store/user.store";
import Link from "next/link";
import ScrollPage from "../../layout/scroll_page";


const iconSrc = "/assets/imgs/icon/";
const tabs = [
  {
    name: "Dashboard",
    href: "/profile/dashboard",
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
    href: "/profile/app",
    svgSrc: iconSrc + 'notification.svg',
  },
]

interface ListItemProps {
  children: any;
  name: string;
  href: string;
  svgSrc: string;
}

const CollapseItem = (props: ListItemProps) => {
  const {children, name, href, svgSrc} = props;

  const [open, setOpen] = React.useState(!!children);
  const router = useRouter();
  // console.log(`href ${href}`);

  React.useEffect(() => {
    if (!children) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [children]);

  const handleClick = () => {
    // console.log(`clicked href ${href}`);
    const activeSection = router.query.section ? `/profile/${router.query.section}` : "/profile";
    // console.log(`activeSection ${activeSection}`);
    if (activeSection !== href) {
      router.push(href);
    } else {
      setOpen(!open);
    }
  }

  // console.log(`${name} open=${open}`)

  return (
    <React.Fragment>
      <ListItem
        onClick={handleClick}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: open ? "#6555EE" : "#F9F9F9",
          color: open ? "#fff" : "#504C67",
        }}
      >
        <Box display={"flex"}>
          <SvgIcon src={svgSrc}/>
          <Typography
            fontSize={16} fontWeight={500} ml={8}
          >
            {name}
          </Typography>
        </Box>
        <Box>
          {open ? <ExpandLess/> : <ExpandMore/>}
        </Box>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </React.Fragment>
  )
}

const UserItem = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <React.Fragment>
      <ListItem
        onClick={handleClick}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: open ? "#6555EE" : "#F9F9F9",
          color: open ? "#fff" : "#504C67",
        }}
      >
        <Box display={"flex"}>
          <Avatar
            src="https://images.pexels.com/photos/236599/pexels-photo-236599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            sx={{height: "25px", width: "25px", m: "auto", mr: 8}}
          />
          <Typography
            fontSize={16} fontWeight={500}
          >
            [username]
          </Typography>
        </Box>
        <Box>
          {open ? <ExpandLess/> : <ExpandMore/>}
        </Box>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Grid py={4} container direction="row">
            <Grid item xs={6}>
              <Avatar
                src="https://images.pexels.com/photos/236599/pexels-photo-236599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                sx={{height: "120px", width: "120px", m: "auto"}}
              />
              <Box mt={2} sx={{display: "flex", justifyContent: "center"}}>
                <img width={"80%"} src="/assets/imgs/landing/card_title.png" alt="galaxy card"/>
              </Box>
            </Grid>
            <Grid item xs={6} px={3}>
              <Button
                onClick={() => UserStore.logout()}
                href={"/login"}
                LinkComponent={Link}
                sx={{
                  color: "#000000",
                  borderRadius: 4,
                  background: "#fff",
                  textTransform: "none",
                  height: 56,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <SvgIcon src={"/assets/imgs/icon/log_out.svg"}/>
                <Typography fontSize={16} fontWeight={500} ml={3}>
                  Đăng xuất
                </Typography>
              </Button>
              {UserStore.isLoggedIn ? (
                <Button
                  variant="outlined"
                  sx={{
                    color: "#6555EE",
                    textTransform: "none",
                    background: "rgba(255, 255, 255, 0.3)",
                    mt: 5,
                    textAlign: "center",
                    width: "100%",
                    py: {xs: 6},
                    border: "1px solid",
                  }}
                  LinkComponent={Link}
                  href="/verification"
                >
                  <Typography fontSize={{xs: 16}} fontWeight={500}>
                    Xác thực tài khoản
                  </Typography>
                </Button>
              ) : null}
            </Grid>
          </Grid>
        </List>
      </Collapse>
    </React.Fragment>
  )
}

interface CollapseMenuProps {
  // activeSection: string;
  children: any;
}

export default function CollapseMenu(props: CollapseMenuProps) {
  const {children} = props;
  const router = useRouter();
  const activeSection = router.query.section ? `/profile/${router.query.section}` : "/profile";
  const loading = !UserStore.isLoadedFromLocal;

  // console.log(`active tab ${activeSection}`);
  return (
    <ScrollPage>
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
      {loading ? null : UserStore.isLoggedIn ? (
        <List
          sx={(theme) => ({
            background: "#F9F9F9",
            padding: 0,
            [theme.breakpoints.up("sm")]: {
              display: "none",
            },
          })}
        >
          <UserItem/>
          {tabs.map((i) => (
            <CollapseItem
              key={i.href}
              name={i.name}
              href={i.href}
              svgSrc={i.svgSrc}
            >
              {activeSection === i.href ? children : null}
            </CollapseItem>
          ))}
        </List>
      ) : (
        <Box
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant={"h3"} mb={4} textAlign={"center"}>
            Bạn phải đăng nhập mới có thể xem thông tin.
          </Typography>
          <Button LinkComponent={Link} href={"/login"} variant={"contained"}>
            Đăng nhập
          </Button>
        </Box>
      )}
    </ScrollPage>
  );
}