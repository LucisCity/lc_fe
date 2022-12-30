import * as React from "react";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Box, Button, IconButton, Paper, Switch, SwitchProps, TextField, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
// @ts-ignore
import { useChangePassword } from "../../../hooks/profile/account/use_security";

const CustomSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#6555EE" : "#6555EE",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#6555EE",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    // @ts-ignore
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

interface AuthMethodProps {
  label: string;
  desc: string;
}

const AuthMethod = (props: AuthMethodProps) => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignContent: "center",
        alignItems: "center",
        my: 3,
        px: 5,
        py: 4,
      }}
    >
      <Box flexGrow={1}>
        <Typography variant={"h5"} color={"#504C67"}>
          {props.label}
        </Typography>
        <Typography variant={"h5"} fontWeight={400} color={"#D9D9D9"}>
          {props.desc}
        </Typography>
      </Box>
      <CustomSwitch disabled={true} />
    </Paper>
  );
};

const Label = styled(Typography)(({ theme }) => ({
  color: "#504C67",
  fontWeight: 500,
  fontSize: 16,
  paddingTop: 10,
  paddingBottom: 7,
}));

interface PassFieldProps {
  label: string;
  value: string;
  form: any;
}

const PasswordField = (props: PassFieldProps) => {
  const { label, form, value } = props;
  const [showPass, setShowPass] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Label>{label}</Label>
      <Box
        position={"relative"}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignContent: "center",
          alignItems: "center",
          fontSize: 16,
          fontWeight: 500,
          pr: { sm: "10%", xs: 0 },
        }}
      >
        <TextField
          fullWidth
          margin="normal"
          type={showPass ? "text" : "password"}
          error={!!form.formState.errors[value]}
          helperText={form.formState.errors[value]?.message as string}
          {...form.register(value, {
            required: "This is required",
            minLength: { value: 8, message: "Minimum length should be 8" },
          })}
          InputProps={{
            style: {
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.5,
              color: "#504C67",
              background: "#fff",
              border: "none",
              borderRadius: 8,
              height: "50px",
              paddingLeft: 2,
            },
          }}
        />
        <IconButton
          sx={{
            position: "absolute",
            right: { sm: "15%", xs: 20 },
            top: 21,
          }}
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {showPass ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </Box>
    </>
  );
};

export default function Security() {
  const { form, onChangePass, loading } = useChangePassword();

  async function onSubmit(values: any) {
    // e.preventDefault();
    // console.log(`values ${JSON.stringify(values)}`);
    await onChangePass(values.oldPass, values.newPass, values.confirmPass);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Grid container spacing={{ sm: 0, xs: 2 }} direction={{ sm: "row", xs: "column" }}>
        <Grid item sm={6} xs={12}>
          <PasswordField label={"Nhập mật khẩu hiện tại"} form={form} value="oldPass" />
        </Grid>
        <Grid item xs={12} container>
          <Grid item sm={6} xs={12}>
            <PasswordField label={"Nhập mật khẩu mới"} form={form} value="newPass" />
          </Grid>
          <Grid item sm={6} xs={12}>
            <PasswordField label={"Xác nhận mật khẩu mới"} form={form} value="confirmPass" />
          </Grid>
        </Grid>
      </Grid>
      <Box my={11} display={"flex"} justifyContent={"center"}>
        <Button variant="contained" type={"submit"}>
          <Typography variant={"h5"}>Đổi mật khẩu</Typography>
        </Button>
      </Box>
      <Typography variant={"h3"} pt={2}>
        Xác minh hai bước
      </Typography>
      <AuthMethod label={"Xác thực 2FA"} desc={"Yêu cầu xác nhận 2FA khi đăng nhập tài khoản"} />
      <AuthMethod label={"Xác minh tài khoản bằng SMS"} desc={"Yêu cầu xác nhận 2FA cho các giao dịch"} />
    </form>
  );
}
