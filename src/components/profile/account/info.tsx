import * as React from "react";
import FormControlUnstyled from "@mui/base/FormControlUnstyled";
import InputUnstyled, { inputUnstyledClasses } from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Box, Button, InputAdornment, Typography, useMediaQuery, Paper } from "@mui/material";
import { useAccountInfo } from "../../../hooks/profile/account/use_info";
import moment, { Moment } from "moment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { CalendarPicker, DesktopDatePicker } from "@mui/x-date-pickers";
import EventIcon from "@mui/icons-material/Event";
import { ClickAwayListener } from "@mui/base";
import { AccountInfo } from "../../../gql/graphql";

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const Input = styled(InputUnstyled)<{ email?: boolean }>(
  ({ email, theme }) => `
  .${inputUnstyledClasses.input} {
    width: ${useMediaQuery(theme.breakpoints.up("sm")) ? "90%" : "100%"};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${email ? "#787494" : "#504C67"};
    background: ${email ? "#504C67" : "#ECECEC"};
    border: none;
    border-radius: 8px;
    height: 50px;
    // padding: 12px 12px;
    padding-left: 17px;
    

    // '&:hover': {
    //   background: ${theme.palette.mode === "dark" ? "" : grey[100]};
    //   border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    // }
  }
`,
);

// const CustomInput = React.forwardRef(function CustomInput(
//   props: InputUnstyledProps,
//   ref: React.ForwardedRef<HTMLDivElement>,
// ) {
//   return (
//     <InputUnstyled slots={{input: Input}} {...props} ref={ref}/>
//   );
// });

const Label = styled(Typography)(({ theme }) => ({
  color: "#504C67",
  fontWeight: 500,
  fontSize: 16,
  paddingTop: 10,
  paddingBottom: 7,
}));

interface DatePickerProps {
  defaultValue: Date;
}

function DatePicker(props: DatePickerProps) {
  const [date, setDate] = React.useState<Moment | null>(moment(props.defaultValue));
  const [showCalender, setShowCalender] = React.useState(false);

  const handleChange = (newValue: Moment | null) => {
    setDate(newValue);
  };

  const handleShowCalenderPicker = () => {
    setShowCalender(!showCalender);
  };

  return (
    <Box position={"relative"}>
      <Input value={moment(date).format("DD MMM, YYYY")} />
      <Box
        sx={{
          position: "absolute",
          top: 7.5,
          right: { md: 50, sm: "15%", xs: 10 },
          borderRadius: 10,
          width: 35,
          height: 35,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ":hover": {
            background: "rgba(197, 195, 195, 0.55)",
            cursor: "pointer",
          },
        }}
        onClick={handleShowCalenderPicker}
      >
        <EventIcon />
      </Box>
      {showCalender ? (
        <ClickAwayListener onClickAway={() => setShowCalender(false)}>
          <Paper
            sx={{
              background: "#fff",
              zIndex: 5,
              position: "absolute",
            }}
          >
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <CalendarPicker date={date} onChange={handleChange} />
            </LocalizationProvider>
          </Paper>
        </ClickAwayListener>
      ) : null}
    </Box>
  );
}

interface InfoField {
  value: string;
  label: string;
}

const fields: InfoField[] = [
  {
    value: "given_name",
    label: "Tên",
  },
  {
    value: "family_name",
    label: "Họ",
  },
  {
    value: "user_name",
    label: "Nickname",
  },
  {
    value: "date_of_birth",
    label: "Ngày sinh",
  },
  {
    value: "email",
    label: "Email",
  },
];

const placeHolderData: AccountInfo = {
  email: "hiep@example.com",
  date_of_birth: new Date(),
  display_name: "Display Name",
  family_name: "Family Name",
  user_name: "username",
  given_name: "Given Name",
  user_id: "0",
};

export default function InfoForm() {
  const { dataAccountInfo } = useAccountInfo();
  // console.log(`dataAccountInfo ${JSON.stringify(dataAccountInfo)}`);
  const data = dataAccountInfo ?? placeHolderData;

  return (
    <form>
      <Grid container spacing={2}>
        {fields.map((field) => {
          // @ts-ignore
          const fieldValue = data.hasOwnProperty(field.value) ? dataAccountInfo[field.value] : null;
          return (
            <Grid item key={field.value} sm={field.label === "Email" ? 7 : 6} xs={12}>
              <Label>{field.label}</Label>
              {field.value === "email" ? (
                <Input email={true} disabled={true} defaultValue={fieldValue} />
              ) : field.value === "date_of_birth" ? (
                <DatePicker defaultValue={fieldValue} />
              ) : (
                <Input defaultValue={fieldValue} />
              )}
            </Grid>
          );
        })}
      </Grid>
      <Box mt={{ sm: 15, xs: 10 }} display={"flex"} justifyContent={"center"}>
        <Button variant="contained">
          <Typography variant={"h5"}>Cập nhật thông tin</Typography>
        </Button>
      </Box>
    </form>
  );
}
