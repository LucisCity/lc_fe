import { GoogleOAuthProvider } from "@react-oauth/google";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import useRegister from "./hooks/use_register";
import { LoadingButton } from "@mui/lab";

export default function RegisterPage() {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GG_CLIENT_ID ?? ""}>
      <RegisterForm />
    </GoogleOAuthProvider>
  );
}

function RegisterForm() {
  const { loading, onRegister, form } = useRegister();

  async function onSubmit(values: any) {
    onRegister(values.email, values.password, values.confirm_pass);
  }

  return (
    <Box component="form" onSubmit={form.handleSubmit(onSubmit)}>
      <Box
        sx={{
          background: `url(${"assets/imgs/landing/background-intro.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
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
            backgroundColor: "white",
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
          <TextField
            label="Confirm password"
            margin="normal"
            required
            fullWidth
            type="password"
            error={!!form.formState.errors["confirm_pass"]}
            helperText={form.formState.errors["confirm_pass"]?.message as string}
            {...form.register("confirm_pass", {
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
            Sign In
          </LoadingButton>
          <Button
            href="/"
            sx={{
              marginTop: 1,
            }}
          >
            Home
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
