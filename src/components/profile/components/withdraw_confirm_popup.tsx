import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import { useWithdraw } from "../../../hooks/profile/use_withdraw";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import UserStore from "../../../store/user.store";
import { useSnackbar } from "notistack";

export default function WithdrawConfirmPopup({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { withdraw, isLoading } = useWithdraw();
  const { enqueueSnackbar } = useSnackbar();
  const balance = UserStore.user?.wallet?.balance;
  const onWithdraw = async (data: any) => {
    await withdraw(data.amount);
  };
  const {
    register,
    watch,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      amount: 0,
    },
  });

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === "amount" && value > Number(balance)) {
        setError("amount", { type: "maxAmount", message: " Số lượng bạn nhập vượt quá số dư!" });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch]);
  return (
    <div>
      <Dialog open={open} onClose={onClose} fullWidth>
        <DialogTitle>Rút tiền về ví</DialogTitle>
        <form onSubmit={handleSubmit(onWithdraw)}>
          <DialogContent>
            <Typography mb={1}>Số lượng tiền:</Typography>
            <TextField
              {...register("amount", {
                required: true,
                valueAsNumber: true,
              })}
              autoFocus
              fullWidth
              type={"number"}
              variant="outlined"
            />
            {errors.amount && <span>This field is required</span>}
            {errors.amount?.type === "maxAmount" && <span>{errors.amount.message}</span>}
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Hủy</Button>
            <LoadingButton type={"submit"} loading={isLoading} variant={"contained"}>
              Xác nhận
            </LoadingButton>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
