import { Avatar, Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import useLogin from "./hooks/use_login";
import { useGoogleLogin } from "@react-oauth/google";
//@ts-ignore
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "next/link";

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const { login, fbLogin, ggLogin } = useLogin();

  const loginGG = useGoogleLogin({
    onSuccess: ggLogin,
    // eslint-disable-next-line camelcase
    ux_mode: "popup",
    // flow: "auth-code",
  });

  async function onSubmit(values: any) {
    return login(values.password, values.email);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          backgroundColor: "grey",
          padding: "24px",
        }}
      >
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
              padding: "24px",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign In
              </Button>
              <Stack>
                <FacebookLogin
                  appId={process.env.NEXT_PUBLIC_FB_APP_ID ?? ""}
                  // autoLoad
                  callback={fbLogin}
                  render={(renderProps: any) => <Button onClick={renderProps.onClick}>Continue with Facebook</Button>}
                />
                <Button
                  onClick={() => {
                    loginGG();
                  }}
                >
                  Continue with Google
                </Button>
              </Stack>
              <Grid container>
                <Grid item xs>
                  <Link href="#">Forgot password?</Link>
                </Grid>
                <Grid item>
                  <Link href="#">{"Don't have an account? Sign Up"}</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </Box>
    </form>
  );
}

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="/">
        Lucis city
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
