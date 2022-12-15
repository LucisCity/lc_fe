import { Box } from "@mui/material";
import Router from "next/router";
import { useEffect } from "react";
import { useStores } from "../../store";

export default function LogoutPage() {
  const { userStore } = useStores();

  useEffect(() => {
    userStore.logout();
    Router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Box></Box>;
}
