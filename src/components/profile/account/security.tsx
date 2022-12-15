import * as React from 'react';
import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";
import { Box, Button, IconButton, Paper, Switch, SwitchProps, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { CustomInput } from "../components/custom_input";

const passwords = [
  'Richards_998',
  'Richards',
  'Richards',
]

const CustomSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({theme}) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#6555EE' : '#6555EE',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#6555EE',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    // @ts-ignore
    transition: theme.transitions.create(['background-color'], {
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
        <Typography variant={"h5"} color={"#504C67"}>{props.label}</Typography>
        <Typography variant={"h5"} fontWeight={400} color={"#D9D9D9"}>{props.desc}</Typography>
      </Box>
      <CustomSwitch defaultChecked/>
    </Paper>
  )
}

const Label = styled(Typography)(
  ({theme}) => ({
    color: '#504C67',
    fontWeight: 500,
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 7,
  })
);

interface PassFieldProps {
  defaultValue: string;
  label: string;
}

const PasswordField = (props: PassFieldProps) => {
  const [showPass, setShowPass] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControlUnstyled
      defaultValue={props.defaultValue}
    >
      <Label>{props.label}</Label>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignContent: "center",
          alignItems: "center",
          fontSize: 16,
          fontWeight: 500,
        }}
      >
        <CustomInput
          type={showPass ? "text" : "password"}
          sx={{width: "100%", zIndex: 2}}
          // style={{"-webkit-text-security": "square"}}
        />
        <IconButton
          sx={{
            // position: "absolute",
            zIndex: 3,
            right: {xl: "100px", md: "80px", xs: "55px"},
          }}
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {showPass ? <VisibilityOff/> : <Visibility/>}
        </IconButton>
      </Box>
    </FormControlUnstyled>
  )
}


export default function Security() {

  return (
    <form>
      <Grid container spacing={{sm: 0, xs: 2}} direction={{sm: "row", xs: "column"}}>
        <Grid item sm={6} xs={12}>
          <PasswordField label={"Nhập mật khẩu hiện tại"} defaultValue={passwords[0]}/>
        </Grid>
        <Grid item xs={12} container>
          <Grid item sm={6} xs={12}>
            <PasswordField label={"Nhập mật khẩu mới"} defaultValue={passwords[1]}/>
          </Grid>
          <Grid item sm={6} xs={12}>
            <PasswordField label={"Xác nhận mật khẩu mới"} defaultValue={passwords[2]}/>
          </Grid>
        </Grid>
      </Grid>
      <Box my={11} display={"flex"} justifyContent={"center"}>
        <Button
          variant="contained"
        >
          <Typography variant={"h5"}>
            Cập nhật thông tin
          </Typography>
        </Button>
      </Box>
      <Typography variant={"h3"} pt={2}>Xác minh hai bước</Typography>
      <AuthMethod label={"Xác thực 2FA"} desc={"Yêu cầu xác nhận 2FA khi đăng nhập tài khoản"}/>
      <AuthMethod label={"Xác minh tài khoản bằng SMS"} desc={"Yêu cầu xác nhận 2FA cho các giao dịch"}/>
    </form>
  );
}