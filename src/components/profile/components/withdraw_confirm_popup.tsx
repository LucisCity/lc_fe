import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { InputAdornment, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useWithdraw } from "../../../hooks/profile/use_withdraw";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import UserStore from "../../../store/user.store";
import TransactionHistoryStore from "../../../store/transaction_history.store";

export default function WithdrawConfirmPopup({ onClose }: { onClose: () => void }) {
  const { withdraw, isLoading, activeStep } = useWithdraw();
  const balance = UserStore.user?.wallet?.balance;
  const onWithdraw = async (data: any) => {
    if (data.amount && data?.amount > Number(balance)) {
      setError("amount", { type: "maxAmount", message: "Số lượng bạn nhập vượt quá số dư!" }, { shouldFocus: true });
      return;
    }
    try {
      const res = await withdraw(data.amount);
      TransactionHistoryStore.setNewTransaction(res?.transactionLog);
      onClose();
    } catch (e) {
      console.log(e);
    }
  };
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      amount: balance,
    },
  });

  return (
    <div>
      <Dialog open={true} fullWidth maxWidth={"xs"}>
        <DialogTitle>Rút tiền về ví</DialogTitle>
        <form onSubmit={handleSubmit(onWithdraw)}>
          <DialogContent>
            <Typography mb={1}>Số lượng tiền:</Typography>
            <TextField
              sx={{ mb: 4 }}
              {...register("amount", {
                required: "Số tiền không được bỏ trống!",
                valueAsNumber: true,
              })}
              autoFocus
              fullWidth
              type={"number"}
              variant="outlined"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              error={errors.amount?.type === "required" || errors.amount?.type === "maxAmount"}
              helperText={(errors.amount?.message as string) ?? ""}
            />
            <Stepper activeStep={activeStep} alternativeLabel>
              <Step>
                <StepLabel>Nhập số lượng</StepLabel>
              </Step>
              <Step>
                <StepLabel>Ký giao dịch</StepLabel>
              </Step>
              <Step>
                <StepLabel>Rút tiền</StepLabel>
              </Step>
            </Stepper>
          </DialogContent>
          <DialogActions>
            <Button disabled={isLoading} onClick={onClose}>
              Hủy
            </Button>
            <LoadingButton type={"submit"} loading={isLoading} variant={"contained"}>
              Xác nhận
            </LoadingButton>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
