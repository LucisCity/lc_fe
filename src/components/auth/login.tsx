import { GoogleOAuthProvider } from "@react-oauth/google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import useRegister from "./hooks/use_register";
import { LoadingButton } from "@mui/lab";
import useLogin from "./hooks/use_login";
//@ts-ignore
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { useGoogleLogin } from "@react-oauth/google";

export default function LoginPage() {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GG_CLIENT_ID ?? ""}>
      <RegisterForm />
    </GoogleOAuthProvider>
  );
}

function RegisterForm() {
  const { loading, onLogin, fbLogin, ggLogin, form } = useLogin();
  const loginGG = useGoogleLogin({
    onSuccess: ggLogin,
    // ux_mode: "popup",
    // flow: "auth-code",
  });

  async function onSubmit(values: any) {
    // e.preventDefault();
    onLogin(values.email, values.password);
  }

  return (
    <Box component="form" onSubmit={form.handleSubmit(onSubmit)}>
      <Box
        sx={{
          backgroundColor: "#41434A",
          padding: "24px",
        }}
      >
        <Box
          maxWidth="416px"
          sx={{
            margin: "0px auto",
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#131520",
            padding: "24px",
            borderRadius: "4px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5">Register</Typography>

          <TextField
            label="Email Address"
            margin="normal"
            required
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
            required
            fullWidth
            type="password"
            error={!!form.formState.errors["password"]}
            helperText={form.formState.errors["password"]?.message as string}
            {...form.register("password", {
              required: "This is required",
              minLength: { value: 8, message: "Minimum length should be 8" },
            })}
          />

          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              marginTop: 1,
            }}
            loading={loading}
            disabled={!form.formState.isValid}
          >
            Login In
          </LoadingButton>
          <Stack>
            <FacebookLogin
              appId={process.env.NEXT_PUBLIC_FB_APP_ID ?? ""}
              // autoLoad
              callback={fbLogin}
              render={(renderProps: any) => (
                <Button sx={{ marginTop: 2 }} onClick={renderProps.onClick}>
                  Continue with Facebook
                </Button>
              )}
            />
            <Button
              onClick={() => {
                loginGG();
              }}
            >
              Continue with Google
            </Button>
            <Button href="/forgot">Forgot password?</Button>
            <Button href="/register">{"Don't have an account? Sign Up"}</Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
