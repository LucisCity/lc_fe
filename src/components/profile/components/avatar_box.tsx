import UserStore from "../../../store/user.store";
import React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import { Button, Divider, Typography } from "@mui/material";
import s from "./avatar_box.module.scss";
import Link from "next/link";
import VerifiedIcon from "@mui/icons-material/Verified";
import { NavBarTab } from "./navbar";
import { ChangeAvatarDialog } from "./change_avatar_dialog";
import { observer } from "mobx-react-lite";
import { useVipCard } from "../../member/hooks/use_vipcard";
import { VipCardTier } from "../../../gql/graphql";

export const AvatarBox = observer(() => {
  const { loading: loadingVipCard, vipCard } = useVipCard();
  const profile = UserStore.user?.profile;
  const verified = React.useMemo(() => !!UserStore.user?.kyc_verification?.find((i) => i.status === "SUCCESS"), []);
  const userBadge = React.useMemo(() => {
    switch (vipCard?.tier) {
      case VipCardTier.GalaxyPlatinum:
        return "/assets/imgs/landing/card_title.png";
      default:
        return "/assets/imgs/landing/card_title.png";
    }
  }, [vipCard?.tier]);
  return (
    <>
      {UserStore.isLoggedIn ? (
        <Grid px={{ sm: 2, xs: 0 }} py={{ sm: 0, xs: 4 }} container direction="row">
          <Grid item sm={12} xs={6} display={"flex"} flexDirection={"column"} alignItems={"center"}>
            <Box
              sx={{
                position: "relative",
                m: "auto",
                mt: { md: 7, sm: 3 },
              }}
            >
              <Avatar
                src={profile?.avatar?.toString() ?? ""}
                sx={{
                  height: "120px",
                  width: "120px",
                }}
              />
              <Box
                className={s.avatarBox}
                sx={{
                  position: "absolute",
                  zIndex: 5,
                  height: "120px",
                  width: "120px",
                  top: 0,
                  borderRadius: 100,
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,.4)",
                    transition: "background-color .2s ease-in-out",
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box className={s.changeButton}>
                  <ChangeAvatarDialog />
                </Box>
              </Box>
            </Box>
            {profile?.display_name ? (
              <Typography variant={"h4"} fontWeight={400} pt={4} color={"#000"}>
                {profile?.display_name}
              </Typography>
            ) : null}
            {loadingVipCard
              ? null
              : vipCard && (
                  <Box
                    component={"img"}
                    src={userBadge}
                    alt="premium badge"
                    mt={{ sm: 4, xs: 2 }}
                    sx={{ width: "80%", display: "flex", justifyContent: "center" }}
                  />
                )}
          </Grid>
          <Grid item sm={12} xs={6} px={{ sm: 0, xs: 3 }}>
            <Box display={"flex"} flexDirection={"column"} alignItems={"flex-end"}>
              <NavBarTab
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
                      Đã xác minh
                    </Typography>
                  </>
                ) : (
                  <Typography fontSize={{ xs: 16 }} fontWeight={500}>
                    Xác minh danh tính
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
    </>
  );
});
