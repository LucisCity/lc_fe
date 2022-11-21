import { Avatar, Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { Center } from "../../common/center";
import useLogin from "./hooks/use_login";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoginForm from "./login_form";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useForm } from "react-hook-form";
import { useGoogleLogin } from "@react-oauth/google";
//@ts-ignore
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

const LoginPage = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GG_CLIENT_ID ?? ""}>
      <LoginForm />
    </GoogleOAuthProvider>
  );
  return (
    <div>
      <Box
        sx={{
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              padding: "24px",
              backgroundColor: "white",
              minWidth: "100%",
              maxWidth: "416px",
            }}
          >
            <Typography component="h1" variant="h5">
              Account Login
            </Typography>
            <Typography>Welcome back, thank you !</Typography>
            <LoginForm />
            <Center>
              <Link href="/forgot">
                <Button variant="text">Forgot Password?</Button>
              </Link>

              <Link href="/register">
                <Button variant="text">Register now</Button>
              </Link>
            </Center>
            <Center>
              <Link href="/">
                <Button variant="text">Go to home</Button>
              </Link>
            </Center>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default LoginPage;
