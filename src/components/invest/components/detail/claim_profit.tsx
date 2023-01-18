import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";
import { ProjectProfitBalance } from "../../../../gql/graphql";
import { formatDate } from "../../../../utils/date.util";

type Props = {
  balance?: ProjectProfitBalance | { balance?: number; from?: string; to?: string };
  loading?: boolean;
  onClaim?: () => void;
};

export default function ClaimProfitCard({ balance, onClaim, loading }: Props) {
  const isDisable = !balance || balance.balance <= 0 || loading;
  return (
    <Box id={"claim"} mt={6}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h3">Nhận lợi nhuận</Typography>
          <Box component="img" src="/assets/imgs/invest/icons/ic_info.svg" alt="" ml="6px" />
        </Box>
        {!isDisable ? (
          <Typography variant="caption">{`${formatDate(balance?.from, "dd, MMM yyyy")} - ${formatDate(
            balance?.to,
            "dd, MMM yyyy",
          )}`}</Typography>
        ) : null}
      </Box>
      <Box
        sx={{
          height: "81px",
          background: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "8px",
          px: "18px",
          mt: "20px",
          // opacity: 0.5,
        }}
      >
        <Typography variant="h3" color={isDisable ? "#DCDCDC" : "primary"}>
          $ {balance?.balance ?? 0}
        </Typography>
        <LoadingButton
          variant="contained"
          disabled={isDisable}
          loading={loading}
          sx={{ background: isDisable ? "#DCDCDC" : "primary" }}
          onClick={onClaim}
        >
          Claim
        </LoadingButton>
      </Box>
    </Box>
  );
}
