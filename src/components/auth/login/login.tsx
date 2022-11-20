import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { Center } from "../../common/center";
import useLogin from "./hooks/useLogin";
import LoginForm from "./LoginForm";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Lucis city
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const LoginPage = () => {
  const {} = useLogin();

  return (
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
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
