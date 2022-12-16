import { Box } from "@mui/material";
import Router from "next/router";
import { useEffect } from "react";
import UserStore from "../../store/user.store";

export default function LogoutPage() {
  useEffect(() => {
    UserStore.logout();
    Router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Box></Box>;
}
