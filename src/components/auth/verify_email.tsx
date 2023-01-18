import * as React from "react";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import useVerifyEmail from "./hooks/use_verify_email";

export default function VerifyEmailPage() {
  const { loading } = useVerifyEmail();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        backgroundImage: "url(assets/imgs/landing/background-intro.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {loading ? <CircularProgress /> : null}
    </Box>
  );
}
