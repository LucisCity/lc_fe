import { Button, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import useLogin from "./hooks/use_login";

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const { login, submitting } = useLogin();

  async function onSubmit(values: any) {
    return login(values.password, values.email);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="email"
        margin="normal"
        required
        fullWidth
        label="Email Address"
        autoComplete="email"
        autoFocus
        error
        // defaultValue="Hello World"
        helperText={errors["email"]?.message as string}
        {...register("email", {
          required: "This is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />

      <TextField
        id="password"
        margin="normal"
        required
        fullWidth
        label="Password"
        placeholder="Password"
        // autoComplete="email"
        // autoFocus
        error
        // defaultValue="Hello World"
        helperText={errors["password"]?.message as string}
        {...register("password", {
          required: "This is required",
        })}
      />
      <LoadingButton
        loading={isSubmitting}
        loadingIndicator="Loading…"
        type="submit"
      >
        Login
      </LoadingButton>
    </form>
  );
}
