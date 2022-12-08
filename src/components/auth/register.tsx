import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import useRegister from "./hooks/use_register";
import { LoadingButton } from "@mui/lab";
import useLogin from "./hooks/use_login";
//@ts-ignore
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Stack } from "@mui/material";

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://bc68.fun/">
        LucisCity
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function LoginPage() {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GG_CLIENT_ID ?? ""}>
      <SignInSide />
    </GoogleOAuthProvider>
  );
}

function SignInSide() {
  const { fbLogin, ggLogin } = useLogin();
  const loginGG = useGoogleLogin({
    onSuccess: ggLogin,
    // ux_mode: "popup",
    // flow: "auth-code",
  });
  const { loading, onRegister, form } = useRegister();

  async function onSubmit(values: any) {
    onRegister(values.email, values.password, values.confirm_pass);
  }

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(assets/imgs/landing/background-intro.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Stack direction="row" width="100%" spacing="8px" my="12px">
            <Button
              onClick={() => {
                loginGG();
              }}
              variant="outlined"
              sx={{
                height: "39px",
                flex: "1",
              }}
              startIcon={<Box component="img" src="/assets/imgs/auth/ic_google.svg" alt="" />}
            ></Button>
            <FacebookLogin
              appId={process.env.NEXT_PUBLIC_FB_APP_ID ?? ""}
              // autoLoad
              callback={fbLogin}
              render={(renderProps: any) => (
                <Button
                  variant="outlined"
                  sx={{
                    height: "39px",
                    flex: "1",
                  }}
                  onClick={renderProps.onClick}
                >
                  <Box component="img" src="/assets/imgs/auth/ic_facebook.svg" alt="" />
                </Button>
              )}
            />
          </Stack>
          <Box component="form" onSubmit={form.handleSubmit(onSubmit)} sx={{ mt: 1 }}>
            <TextField
              label="Email Address"
              margin="normal"
              // required
              fullWidth
              variant="outlined"
              error={!!form.formState.errors["email"]}
              helperText={form.formState.errors["email"]?.message as string}
              {...form.register("email", {
                required: "This is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <TextField
              label="Password"
              margin="normal"
              // required
              fullWidth
              type="password"
              error={!!form.formState.errors["password"]}
              helperText={form.formState.errors["password"]?.message as string}
              {...form.register("password", {
                required: "This is required",
                minLength: { value: 8, message: "Minimum length should be 8" },
              })}
            />
            <TextField
              label="Confirm password"
              margin="normal"
              // required
              fullWidth
              type="password"
              error={!!form.formState.errors["confirm_pass"]}
              helperText={form.formState.errors["confirm_pass"]?.message as string}
              {...form.register("confirm_pass", {
                required: "This is required",
                minLength: { value: 8, message: "Minimum length should be 8" },
              })}
            />
            {/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /> */}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>

            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
