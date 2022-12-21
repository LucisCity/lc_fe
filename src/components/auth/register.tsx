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
import { Divider, Stack } from "@mui/material";
import ConfirmDialog from "../common/confirm_dialog";
import { useModal } from "../../hooks/use_modal";
import { useRouter } from "next/router";

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Already have an account? "}
      <Link color="primary" href="/login">
        Sign In
      </Link>{" "}
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
  const { loading, onRegister, form, confirmModal, onClose } = useRegister();
  const router = useRouter();
  const { fbLogin, ggLogin } = useLogin();
  const loginGG = useGoogleLogin({
    onSuccess: (res) => ggLogin(res, form.getValues("ref_code")),
  });

  ///// SET REFERRAL CODE ///////
  const [refCode, setRefCode] = React.useState<string | null>(null);
  React.useEffect(() => {
    if (router.query?.referral_code && typeof localStorage !== undefined) {
      localStorage.setItem("referralCode", router.query?.referral_code as string);
      form.setValue("ref_code", router.query?.referral_code);
    }
  }, [router.query?.referral_code]);

  React.useEffect(() => {
    if (typeof localStorage !== undefined) {
      const refCode = localStorage.getItem("referralCode");
      if (refCode) {
        form.setValue("ref_code", refCode);
      }
    }
  }, []);
  /////////////////////////////////

  async function onSubmit(values: any) {
    onRegister(values.email, values.password, values.confirm_pass, values.ref_code);
  }

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={6.5}
        sx={{
          backgroundImage: "url(assets/imgs/landing/background-intro.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) => (t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5.5} component={Paper} elevation={6} square>
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
          <Stack direction={["column", "column", "row"]} gap={2} my="12px" sx={{ width: "100%" }}>
            <Button
              onClick={() => {
                loginGG();
              }}
              variant="outlined"
              sx={{
                // height: ["20px", "39px"],
                flex: ["auto", "1"],
                fontSize: ["14px", "12px", "12px", "14px"],
              }}
              startIcon={<Box component="img" src="/assets/imgs/auth/ic_google.svg" alt="" />}
            >
              Sign up with Google
            </Button>
            <FacebookLogin
              appId={process.env.NEXT_PUBLIC_FB_APP_ID ?? ""}
              // autoLoad
              callback={(res: any) => fbLogin(res, form.getValues("ref_code"))}
              render={(renderProps: any) => (
                <Button
                  variant="outlined"
                  sx={{
                    // height: "39px",
                    flex: ["auto", "1"],
                    fontSize: ["14px", "12px", "12px", "14px"],
                  }}
                  startIcon={<Box component="img" src="/assets/imgs/auth/ic_facebook.svg" alt="" />}
                  onClick={renderProps.onClick}
                >
                  Sign up with Facebook
                </Button>
              )}
            />
          </Stack>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
              width: "100%",
            }}
          >
            <Divider sx={{ flex: "1" }} />
            <Box>
              <Typography textAlign="center" variant="body1">
                Or
              </Typography>
            </Box>
            <Divider sx={{ flex: "1" }} />
          </Box>
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
            <TextField
              label="Ref code"
              margin="normal"
              // required
              fullWidth
              error={!!form.formState.errors["ref_code"]}
              helperText={form.formState.errors["ref_code"]?.message as string}
              {...form.register("ref_code", {
                // required: "This is required",
                // minLength: { value: 8, message: "Minimum length should be 8" },
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
      <ConfirmDialog
        isOpen={confirmModal.isOpen}
        onClose={onClose}
        action={["Ok"]}
        content="Register successfully, please check your email to verify your account"
      />
    </Grid>
  );
}
