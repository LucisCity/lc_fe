import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Alert, InputAdornment, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { useBuyNft } from "../../hooks/use_nft";
import { BigNumber, ethers } from "ethers";
import { formatCurrency, formatNumber } from "../../../../utils/number.util";

const BuyNftPopup = ({
  onClose,
  floorPrice,
  availableItems,
  isDifferentAddress,
}: {
  onClose: () => void;
  floorPrice: BigNumber;
  availableItems: number;
  isDifferentAddress: boolean;
}) => {
  const {
    mintNft,
    approve,
    userAddress,
    contract,
    allowance,
    isLoadingApprove,
    balanceOfUsdt,
    balance,
    coinSymbol,
    isLoadingMintNft,
  } = useBuyNft();
  const {
    register,
    handleSubmit,
    setError,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      amount: 1,
    },
  });

  const [errorInput, setErrorInput] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const watchAmount = watch("amount");
  const isApprove = React.useMemo(() => {
    if (isNaN(watchAmount)) {
      return false;
    }
    if (watchAmount) {
      return (allowance as BigNumber)?.gte(ethers.utils.parseUnits(watchAmount.toString()));
    }
    return false;
  }, [watchAmount, allowance]);

  const totalOrder = React.useMemo(() => {
    if (watchAmount) {
      return ethers.utils.formatUnits(floorPrice.mul(watchAmount).toString());
    }
    return 0;
  }, [watchAmount, floorPrice]);

  const isBuy = React.useMemo(() => {
    if (watchAmount) {
      return (balanceOfUsdt as BigNumber)?.gte(floorPrice.mul(watchAmount).toString());
    }
    return false;
  }, [watchAmount, balanceOfUsdt, floorPrice]);

  React.useEffect(() => {
    if (isApprove) {
      setActiveStep(2);
    }
  }, [isApprove]);

  React.useEffect(() => {
    if (isNaN(watchAmount)) {
      setActiveStep(0);
    }
    if (watchAmount > availableItems) {
      setErrorInput(true);
      setError(
        "amount",
        { type: "maxAmount", message: "Số lượng bạn nhập vượt quá số lượng có NFT có sẵn." },
        { shouldFocus: true },
      );
    } else {
      clearErrors("amount");
      setErrorInput(false);
    }
  }, [watchAmount, errorInput, activeStep]);

  const onBuyNft = async (data: any) => {
    if (isApprove) {
      await mintNft?.({
        recklesslySetUnpreparedArgs: [userAddress, data.amount],
      });
      return;
    }
    await approve?.({
      recklesslySetUnpreparedArgs: [contract?.address, ethers.constants.MaxUint256],
    });
  };
  return (
    <div>
      <Dialog open={true} fullWidth maxWidth={"sm"}>
        <DialogTitle>Mua NFT</DialogTitle>
        <form onSubmit={handleSubmit(onBuyNft)}>
          <DialogContent>
            <Typography mb={1} variant={"h5"} component={"div"}>
              Số dư USDT: {formatCurrency(Number(ethers.utils.formatUnits(balanceOfUsdt ?? 0)))}
            </Typography>
            <Typography mb={1} variant={"h5"} component={"div"}>
              Số dư ví: {formatNumber(Number(ethers.utils.formatUnits(balance ?? 0)))} {coinSymbol ? coinSymbol : ""}
            </Typography>
            <Typography mb={1}>Số lượng mảnh:</Typography>
            <TextField
              sx={{ mb: 4 }}
              {...register("amount", {
                required: "Số tiền không được bỏ trống!",
                valueAsNumber: true,
              })}
              autoFocus
              fullWidth
              variant="outlined"
              error={errors.amount?.type === "required" || errors.amount?.type === "maxAmount"}
              helperText={(errors.amount?.message as string) ?? ""}
              onKeyDown={(event) => {
                if (event.key === "Backspace") {
                  return;
                }
                if (errorInput) {
                  event.preventDefault();
                }
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
            />
            <Typography mb={1} variant={"h5"}>
              Tổng thanh toán: {formatCurrency(Number(totalOrder.toString()))}
            </Typography>
            <Stepper activeStep={activeStep} alternativeLabel>
              <Step>
                <StepLabel>Nhập số lượng</StepLabel>
              </Step>
              <Step>
                <StepLabel>Chấp thuận thanh toán</StepLabel>
              </Step>
              <Step>
                <StepLabel>Mua</StepLabel>
              </Step>
            </Stepper>

            {!isNaN(watchAmount) && !isBuy && (
              <Alert severity="error" sx={{ mt: 4 }}>
                Bạn không đủ USDT để thực hiện giao dịch.
              </Alert>
            )}
            {isDifferentAddress && (
              <Alert severity="warning" sx={{ mt: 4 }}>
                Bạn đang sử dụng 1 địa chỉ ví khác với địa chỉ ví của tài khoản để mua NFT.
              </Alert>
            )}
          </DialogContent>
          <DialogActions>
            <Button disabled={isLoadingApprove || isLoadingMintNft} onClick={onClose}>
              Hủy
            </Button>
            {isApprove ? (
              <LoadingButton type={"submit"} disabled={!isBuy} loading={isLoadingMintNft} variant={"contained"}>
                Mua
              </LoadingButton>
            ) : (
              <LoadingButton
                type={"submit"}
                disabled={isNaN(watchAmount)}
                loading={isLoadingApprove}
                variant={"contained"}
              >
                Chấp thuận
              </LoadingButton>
            )}
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default React.memo(BuyNftPopup);
