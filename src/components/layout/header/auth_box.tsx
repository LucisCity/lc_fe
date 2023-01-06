import React from "react";
import { Badge, Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import UserStore from "../../../store/user.store";
import Link from "next/link";
import { Right } from "../../common/right";
import AvatarMenu from "./avatar_menu";
import { observer } from "mobx-react-lite";
import { ApolloError, useLazyQuery } from "@apollo/client";
import { useSubToUnseenNotiCount, useUnseenNotifications } from "../../../hooks/profile/use_notification";
import { isNumber } from "lodash";
import { GET_BALANCE } from "../../../hooks/profile/account/use_info";
import { useDisconnect } from "wagmi";
import { useRouter } from "next/router";

const NotificationBell = () => {
  const { dataUnseenNotis } = useUnseenNotifications();
  const { newData, loadingNewData } = useSubToUnseenNotiCount();
  // console.log(`new Data ${newData}`);
  // console.log(`dataUnseenNotis ${dataUnseenNotis}`);

  return (
    <Link href={"/profile/notification"}>
      <IconButton sx={{ mr: 4 }}>
        <Badge
          badgeContent={isNumber(newData) ? newData : dataUnseenNotis > 99 ? "99+" : dataUnseenNotis}
          color="error"
        >
          <Box component="img" src="/assets/imgs/landing/notification-bell.svg" alt="notification button" />
        </Badge>
      </IconButton>
    </Link>
  );
};

export const AuthBox = observer(() => {
  const { disconnect } = useDisconnect();
  const router = useRouter();
  const loading = !UserStore.isLoadedFromLocal;
  const balance = UserStore.user?.wallet?.balance;
  const [getBalance] = useLazyQuery(GET_BALANCE, {
    onCompleted: (res) => {
      UserStore.updateWallet(res?.getBalance);
    },
  });

  React.useEffect(() => {
    getBalance();
  }, []);

  return (
    <Right>
      <IconButton sx={{ mr: 2 }}>
        <Box component="img" src="/assets/imgs/landing/global.svg" alt="i18n" />
      </IconButton>
      {loading ? null : !UserStore.isLoggedIn ? (
        <Button LinkComponent={Link} href={`/login?redirect_url=${router.asPath}`} variant="contained">
          Đăng nhập
        </Button>
      ) : (
        <>
          <NotificationBell />
          <AvatarMenu
            balance={balance}
            avatar={UserStore.user?.profile?.avatar?.toString()}
            username={UserStore.user?.profile?.display_name?.toString() ?? UserStore.user?.email?.toString()}
            onLogout={() => {
              disconnect();
              UserStore.logout();
            }}
          />
        </>
      )}
    </Right>
  );
});
