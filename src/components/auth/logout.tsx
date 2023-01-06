import { Box } from "@mui/material";
import Router from "next/router";
import { useEffect } from "react";
import { useDisconnect } from "wagmi";
import UserStore from "../../store/user.store";

export default function LogoutPage() {
  const { disconnect } = useDisconnect();

  useEffect(() => {
    UserStore.logout();
    disconnect();
    Router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Box></Box>;
}
