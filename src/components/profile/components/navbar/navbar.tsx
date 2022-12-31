/* eslint-disable */
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import { Button, Divider, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import React from "react";
import Grid from "@mui/material/Grid";
import SvgIcon from "../../../common/svg_icon";
import s from "./navbar.module.scss";
import { useRouter } from "next/router";
import { observer } from "mobx-react-lite";
import UserStore from "../../../../store/user.store";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import VerifiedIcon from "@mui/icons-material/Verified";

interface TabProps {
  href: string;
  name: string;
  svgSrc: string;
  logoutButton?: boolean;
  active?: boolean;
  topLogoutButton?: boolean;
  onClick?: () => void;
}

const Tab = (props: TabProps) => {
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

interface MobileDropDownProps {
  activeSection: string | null;
}

const MobileDropDown = (props: MobileDropDownProps) => {
  const defaultDropdownValue = React.useMemo(
    () => tabs.find((i) => i.href === props.activeSection) ?? tabs[0],
    [props.activeSection],
  );
  const [showMobileDropdown, setShowMobileDropdown] = React.useState<boolean>(false);
  const handleShowMobileDropdown = () => {
    setShowMobileDropdown(!showMobileDropdown);
  };

  return (
    <Stack
      direction="column"
      spacing={{ sm: 2, xs: 3 }}
      mx={{ sm: 2, xs: "5%" }}
      mt={{ sm: 0, xs: 3 }}
      sx={{ height: "100%" }}
      justifyContent={"space-between"}
    >
      {/*<ClickAwayListener onClickAway={() => setShowMobileDropdown(false)}>*/}
      <Button
        sx={{
          textTransform: "none",
          height: 56,
          display: "flex",
          justifyContent: "space-between",
          width: { sm: "auto" },
          background: "#6555EE",
          color: "#ffffff",
          borderRadius: 2,
          ":hover": {
            background: "#6555EE",
          },
        }}
        onClick={handleShowMobileDropdown}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            ml: { md: 4, sm: 2, xs: 5 },
          }}
        >
          <SvgIcon src={defaultDropdownValue.svgSrc} />
          <Typography fontSize={16} fontWeight={500} ml={{ md: 7, sm: 4, xs: 10 }}>
            {defaultDropdownValue.name}
          </Typography>
        </Box>
        {showMobileDropdown ? <ExpandLess /> : <ExpandMore />}
      </Button>
      {/*</ClickAwayListener>*/}
      {showMobileDropdown ? (
        <Stack direction="column" spacing={{ sm: 2, xs: 3 }}>
          {tabs.map((tab) => (
            <Tab
              key={tab.name}
              href={tab.href}
              name={tab.name}
              svgSrc={tab.svgSrc}
              active={tab.href === props.activeSection}
              onClick={() => setShowMobileDropdown(false)}
            />
          ))}
        </Stack>
      ) : null}
    </Stack>
  );
};

const iconSrc = "/assets/imgs/icon/";

interface Section {
  name: string;
  href: string;
  svgSrc: string;
}

const tabs: Section[] = [
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

interface ProfileNavBarProps {
  activeSection?: string;
  // isLogin: boolean;
}

export const ProfileNavBar = observer((props: ProfileNavBarProps) => {
  const router = useRouter();
  const [activeSection, setActiveSection] = React.useState<null | string>(null);
  React.useEffect(() => {
    if (router.query.section) {
      setActiveSection(`/profile/${router.query.section}`);
    }
  }, [router.query.section]);
  const profile = UserStore.user?.profile;
  const verified = React.useMemo(() => !!UserStore.user?.kyc_verification?.find((i) => i.status === "SUCCESS"), []);
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
        {UserStore.isLoggedIn ? (
          <Grid px={{ sm: 2, xs: 0 }} py={{ sm: 0, xs: 4 }} container direction="row">
            <Grid item sm={12} xs={6} display={"flex"} flexDirection={"column"} alignItems={"center"}>
              <Avatar
                src={profile?.avatar?.toString() ?? ""}
                sx={{ height: "120px", width: "120px", m: "auto", mt: { md: 7, sm: 3 } }}
              />
              {profile?.display_name ? (
                <Typography variant={"h4"} fontWeight={400} pt={4} color={"#000"}>
                  {profile?.display_name}
                </Typography>
              ) : null}
              <Box mt={{ sm: 4, xs: 2 }} sx={{ display: "flex", justifyContent: "center" }}>
                <img width={"80%"} src="/assets/imgs/landing/card_title.png" alt="galaxy card" />
              </Box>
            </Grid>
            <Grid item sm={12} xs={6} px={{ sm: 0, xs: 3 }}>
              <Box display={"flex"} flexDirection={"column"} alignItems={"flex-end"}>
                <Tab
                  href={"/login"}
                  name={"Đăng xuất"}
                  svgSrc={"/assets/imgs/icon/log_out.svg"}
                  logoutButton={true}
                  topLogoutButton={true}
                  onClick={() => UserStore.logout()}
                />
                <Button
                  variant="outlined"
                  className={s.verifyButton}
                  sx={{
                    color: "#6555EE",
                    textTransform: "none",
                    background: "rgba(255, 255, 255, 0.3)",
                    mt: 5,
                    textAlign: "center",
                    width: { sm: "100%", xs: "auto" },
                    py: { xs: 0 },
                    px: 0,
                    border: "1px solid",
                  }}
                  LinkComponent={Link}
                  href="/profile/account?tab=verification"
                >
                  {verified ? (
                    <>
                      <VerifiedIcon />
                      <Typography fontSize={{ xs: 16 }} fontWeight={500}>
                        Đã xác thực
                      </Typography>
                    </>
                  ) : (
                    <Typography fontSize={{ xs: 16 }} fontWeight={500}>
                      Xác thực tài khoản
                    </Typography>
                  )}
                </Button>
              </Box>
              <Divider
                component={"div"}
                variant="middle"
                sx={(theme) => ({
                  [theme.breakpoints.down("sm")]: {
                    display: "none",
                  },
                  mx: 3,
                  mt: 9,
                  mb: 9,
                  borderBottomWidth: 1,
                  borderBottomColor: "#fff",
                })}
              />
            </Grid>
          </Grid>
        ) : null}
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
            {tabs.map((tab) => (
              <Tab
                key={tab.name}
                href={tab.href}
                name={tab.name}
                svgSrc={tab.svgSrc}
                active={tab.href === activeSection}
              />
            ))}
          </Stack>
          {UserStore.isLoggedIn ? (
            <Tab
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
