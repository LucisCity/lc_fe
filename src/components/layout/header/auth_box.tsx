import React from "react";
import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import UserStore from "../../../store/user.store";
import Link from "next/link";
import { Right } from "../../common/right";
import AvatarMenu from "./avatar_menu";
import { observer } from "mobx-react-lite";

export const AuthBox = observer(() => {
  const loading = !UserStore.isLoadedFromLocal;

  return (
    <Right>
      <IconButton sx={{ mr: 2 }}>
        <Box component="img" src="/assets/imgs/landing/global.svg" alt="i18n" />
      </IconButton>
      {loading ? null : !UserStore.isLoggedIn ? (
        <Button LinkComponent={Link} href={"/login"} variant="contained">
          Đăng nhập
        </Button>
      ) : (
        <AvatarMenu
          avatar={UserStore.user?.profile?.avatar?.toString()}
          username={UserStore.user?.profile?.display_name?.toString() ?? UserStore.user?.email?.toString()}
          onLogout={() => {
            UserStore.logout();
          }}
        />
      )}
    </Right>
  );
});
