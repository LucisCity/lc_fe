import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import React from "react";
import SvgIcon from "../../common/svg_icon";
import s from "./navbar.module.scss";
import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";
import UserStore from "../../../store/user.store";
import { AvatarBox } from "./avatar_box";
import { MobileDropDown } from "./mobile_dropdown";

interface TabProps {
  href: string;
  name: string;
  svgSrc: string;
  logoutButton?: boolean;
  active?: boolean;
  topLogoutButton?: boolean;
  onClick?: () => void;
}

export const NavBarTab = (props: TabProps) => {
  return (
    <Button
      className={`
        ${
          props.logoutButton
            ? props.topLogoutButton
              ? s.topLogoutButton
              : s.bottomLogoutButton
            : props.active
            ? s.active
            : s.default
        }
      `}
      onClick={props.onClick}
      href={props.href}
      LinkComponent={Link}
      sx={{
        ":hover": {
          background: props.active ? "#8272ff" : "rgba(255, 255, 255, 0.35)",
          // backdropFilter: "blur(4px)",
          // color: '#504C67',
        },
        textTransform: "none",
        // height: {md: "56px", sm: 50, xs: 38},
        height: 56,
        // display: { sm: "flex", xs: props.active ? "flex" : "none" },
        display: "flex",
        // justifyContent: {md: "left", sm: "center", xs: "center"},
        justifyContent: "left",
        width: { sm: "auto" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          ml: { md: 4, sm: 2, xs: 5 },
          mr: { md: 7, sm: 4, xs: 10 },
        }}
      >
        <SvgIcon src={props.svgSrc} />
      </Box>
      <Typography fontSize={16} fontWeight={500}>
        {props.name}
      </Typography>
    </Button>
  );
};

const iconSrc = "/assets/imgs/icon/";

interface Section {
  name: string;
  href: string;
  svgSrc: string;
}

export const TABS: Section[] = [
  {
    name: "Dashboard",
    href: "/profile/dashboard",
    svgSrc: iconSrc + "dashboard.svg",
  },
  {
    name: "Tài khoản",
    href: "/profile/account",
    svgSrc: iconSrc + "user_account.svg",
  },
  {
    name: "Sản phẩm đầu tư",
    href: "/profile/investment",
    svgSrc: iconSrc + "investment.svg",
  },
  {
    name: "Referral",
    href: "/profile/referral",
    svgSrc: iconSrc + "referral.svg",
  },
  {
    name: "Thông báo",
    href: "/profile/notification",
    svgSrc: iconSrc + "notification.svg",
  },
  {
    name: "Ứng dụng",
    href: "/profile/app",
    svgSrc: iconSrc + "notification.svg",
  },
];

export const ProfileNavBar = observer(() => {
  const router = useRouter();
  const [activeSection, setActiveSection] = React.useState<null | string>(null);
  React.useEffect(() => {
    if (router.query.section) {
      setActiveSection(`/profile/${router.query.section}`);
    }
  }, [router.query.section]);
  return (
    <Box
      sx={{
        py: { sm: 4, xs: 5 },
        px: { sm: 2 },
        pt: { xs: 2 },
        height: "100%",
      }}
    >
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
      />
      <Box
        className={s.cardBg}
        sx={{
          position: "absolute",
          width: "173px",
          height: "173px",
          left: "65%",
          top: "564px",
          background: "linear-gradient(180deg, #778AED 0%, #8274F9 0.01%, #6555EE 53.65%, #4A3CC1 98.44%)",
          filter: "blur(60px)",
          zIndex: -2,
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <AvatarBox />
        <Box
          sx={(theme) => ({
            [theme.breakpoints.up("sm")]: {
              display: "none",
            },
          })}
        >
          <MobileDropDown activeSection={activeSection} />
        </Box>
        <Stack
          direction="column"
          spacing={{ sm: 2, xs: 3 }}
          mx={{ sm: 2, xs: "5%" }}
          mt={{ sm: 0, xs: 3 }}
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              display: "none",
            },
            height: "100%",
          })}
          justifyContent={"space-between"}
        >
          <Stack
            direction="column"
            spacing={{ sm: 2, xs: 3 }}
            // display={{md: "block", xs: "flex"}}
            // alignItems={{xs: "flex-end"}}
            // pb={{md: 0, xs: 2}}
          >
            {TABS.map((i) => (
              <NavBarTab key={i.name} href={i.href} name={i.name} svgSrc={i.svgSrc} active={i.href === activeSection} />
            ))}
          </Stack>
          {UserStore.isLoggedIn ? (
            <NavBarTab
              href={"/login"}
              name={"Đăng xuất"}
              svgSrc={"/assets/imgs/icon/log_out.svg"}
              logoutButton={true}
              onClick={() => UserStore.logout()}
            />
          ) : null}
        </Stack>
      </Box>
    </Box>
  );
});
