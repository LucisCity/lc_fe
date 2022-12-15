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
import useResetPassword from "./hooks/use_reset_password";
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

export default function ResetPasswordPage() {
  const { loading, onReset, form } = useResetPassword();

  async function onSubmit(values: any) {
    onReset(values.password, values.confirm_pass);
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
            Reset password
          </Typography>
          <Box component="form" onSubmit={form.handleSubmit(onSubmit)} sx={{ mt: 1 }}>
            <TextField
              label="New password"
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
              label="Confirm new password"
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
            <LoadingButton loading={loading} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Confirm
            </LoadingButton>

            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
