import { Box, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useCountdownTime } from "../../../../hooks/use_countdown";
import projectStore from "../../../../store/project.store";
import userStore from "../../../../store/user.store";
import { KMath } from "../../../../utils/math.util";
import { formatNumber } from "../../../../utils/number.util";

const ProfitRateCard = observer(() => {
  const project = projectStore.projectDetail;

  const nftBought = project?.nftBought;
  const receiveAmount = KMath.mul(project?.nft_price ?? 0, nftBought?.total_nft ?? 0).toNumber();

  const now = new Date();
  if (!userStore.isLoggedIn || !project?.ended) {
    return null;
  }

  return (
    <Box id={"vote"} mt={6}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h3">Tỉ lệ lợi nhuận</Typography>
          <Box component="img" src="/assets/imgs/invest/icons/ic_info.svg" alt="" ml="6px" />
        </Box>
        {/* <Typography variant="caption">{formatDate(project?.end_time_vote_sell)}</Typography> */}
      </Box>
      <Box
        sx={{
          background: "white",
          borderRadius: "8px",
          p: "18px",
          mt: "20px",
        }}
      >
        <SellInfoItem title="Giá bán" content={`$${formatNumber(project?.nft_price)}`} />
        <SellInfoItem
          title="Lợi nhuận"
          content={`$ ${formatNumber(
            KMath.plus(project.profitBalance?.balance, project.profitBalance?.balance_claimed).toNumber(),
          )}`}
        />
        <SellInfoItem title="Số tiền nhận về sau khi bán" content={`$ ${formatNumber(receiveAmount)}`} />
        <SellInfoItem title="Tỉ lệ lợi nhuận" content={`${formatNumber(projectStore.profitRate)}%`} />
      </Box>
    </Box>
  );
});

export default ProfitRateCard;

function SellInfoItem({ title, content, color }: { title: string; content: string; color?: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: "3px",
      }}
    >
      <Typography variant="body1">{title}</Typography>
      <Typography variant="h5" color={color}>
        {content}
      </Typography>
    </Box>
  );
}

function VoteCountdown({ endTime }: { endTime: Date | string | undefined }) {
  const duration = useCountdownTime(endTime);
  return (
    <SellInfoItem
      title="Thời gian vote"
      content={`${duration.days ?? 0}D : ${duration.hours ?? 0}H : ${duration.minutes ?? 0}M : ${
        duration.seconds ?? 0
      }S LEFT`}
      color="primary"
    />
  );
}
