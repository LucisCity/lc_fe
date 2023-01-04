import * as React from "react";
import InputUnstyled, { inputUnstyledClasses } from "@mui/base/InputUnstyled";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Box, Button, Paper, Skeleton, Typography, useMediaQuery } from "@mui/material";
import { useGetAccountInfo, useUpdateAccountInfo } from "../../../hooks/profile/account/use_info";
import moment, { Moment } from "moment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { CalendarPicker } from "@mui/x-date-pickers";
import EventIcon from "@mui/icons-material/Event";
import { ClickAwayListener } from "@mui/base";
import { AccountInfo } from "../../../gql/graphql";
import { isEmpty } from "lodash";
import { useForm } from "react-hook-form";

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
    color: ${email ? "#c9c8cd" : "#504C67"};
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

const Label = styled(Typography)(() => ({
  color: "#504C67",
  fontWeight: 500,
  fontSize: 16,
  paddingTop: 10,
  paddingBottom: 7,
}));

interface DatePickerProps {
  defaultValue: Date;
  form: any;
}

function DatePicker(props: DatePickerProps) {
  const [date, setDate] = React.useState<Moment | null>(props.defaultValue ? moment(props.defaultValue) : null);
  const [showCalender, setShowCalender] = React.useState(false);

  const handleChange = (newValue: Moment | null) => {
    setDate(newValue);
    props.form.setValue("date_of_birth", newValue);
  };

  const handleShowCalenderPicker = () => {
    setShowCalender(!showCalender);
  };

  return (
    <Box position={"relative"}>
      <Input value={date ? moment(date).format("DD MMM, YYYY") : "--/--/--"} />
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
              right: { sm: "10%", xs: 0 },
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
  placeholder: string;
}

const fields: InfoField[] = [
  {
    value: "given_name",
    label: "Tên",
    placeholder: "Thanh",
  },
  {
    value: "family_name",
    label: "Họ",
    placeholder: "Nguyen",
  },
  {
    value: "user_name",
    label: "Username",
    placeholder: "lucis123",
  },
  {
    value: "date_of_birth",
    label: "Ngày sinh",
    placeholder: "1/1/2000",
  },
];

export default function InfoForm() {
  const form = useForm();

  const { dataAccountInfo, loadingAccountInfo, walletAddress } = useGetAccountInfo();

  const { updateAccountInfo } = useUpdateAccountInfo();

  async function onSubmit(values: any) {
    // e.preventDefault();
    await updateAccountInfo({
      variables: {
        input: values,
      },
      skip: isEmpty(values),
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} style={{ minHeight: 700 }}>
      <Grid container spacing={2}>
        {loadingAccountInfo ? (
          fields.map((field) => (
            <Grid item key={field.value} sm={field.label === "Email" ? 7 : 6} xs={12} mt={4}>
              <Skeleton variant="text" width={"50%"} />{" "}
              <Skeleton
                variant="rounded"
                height={50}
                sx={(theme) => ({
                  [theme.breakpoints.up("sm")]: {
                    width: "90%",
                  },
                  width: "100%",
                })}
              />
            </Grid>
          ))
        ) : (
          <>
            {fields.map((field) => {
              const fieldValue = (dataAccountInfo as any)?.[field.value] ?? "";
              return (
                <Grid item key={field.value} sm={field.label === "Email" ? 7 : 6} xs={12}>
                  <Label>{field.label}</Label>
                  {field.value === "date_of_birth" ? (
                    <DatePicker defaultValue={fieldValue} form={form} />
                  ) : (
                    <Input placeholder={field.placeholder} defaultValue={fieldValue} {...form.register(field.value)} />
                  )}
                </Grid>
              );
            })}
            <Grid item sm={7} xs={12}>
              <Label>Email</Label>
              <Input email={true} disabled={true} defaultValue={dataAccountInfo?.email ?? ""} />
            </Grid>
            <Grid item sm={7} xs={12}>
              <Label>Địa chỉ ví</Label>
              <Input email={true} disabled={true} defaultValue={walletAddress ?? ""} />
            </Grid>
          </>
        )}
      </Grid>
      <Box mt={{ sm: 15, xs: 10 }} display={"flex"} justifyContent={"center"}>
        <Button variant="contained" type={"submit"} disabled={!form.formState.isDirty}>
          <Typography variant={"h5"}>Cập nhật thông tin</Typography>
        </Button>
      </Box>
    </form>
  );
}
