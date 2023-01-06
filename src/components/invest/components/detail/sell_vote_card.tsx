import { Box, Button, Divider, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useCountdownTime } from "../../../../hooks/use_countdown";
import projectStore from "../../../../store/project.store";
import { formatDate } from "../../../../utils/date.util";
import { KMath } from "../../../../utils/math.util";
import { formatNumber } from "../../../../utils/number.util";
import useVoteSell from "../../hooks/use_vote_sell";
const DEMO_OFFET_TIME = 5 * 24 * 60 * 60 * 1000;

const SellVoteCard = observer(() => {
  const project = projectStore.projectDetail;
  const duration = useCountdownTime(project?.end_time_vote_sell);
  const [voted, setVoted] = useState(false);
  const { menu, onVote, voting } = useVoteSell();

  const nftBought = project?.nftBought;
  const receiveAmount = KMath.mul(project?.nft_price ?? 0, nftBought?.total_nft ?? 0).toNumber();

  return (
    <Box id={"vote"} mt={6}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h3">Vote bán</Typography>
          <Box component="img" src="/assets/imgs/invest/icons/ic_info.svg" alt="" ml="6px" />
        </Box>
        <Typography variant="caption">{formatDate(project?.end_time_vote_sell)}</Typography>
      </Box>
      <Box
        sx={{
          background: "white",
          borderRadius: "8px",
          p: "18px",
          mt: "20px",
        }}
      >
        <SellInfoItem title="Giá mua BĐS" content={`$${formatNumber(project?.price)}`} />
        <SellInfoItem title="Số mảnh bạn nắm dữ" content={formatNumber(nftBought?.total_nft)} />
        <SellInfoItem
          title="Tỉ lệ tương đương"
          content={`${formatNumber(
            KMath.div(nftBought?.total_nft ?? 0, project?.total_nft ?? 1)
              .multipliedBy(100)
              .toNumber(),
          )}`}
        />
        <SellInfoItem title="Số tiền nhận về sau khi bán" content={`$ ${formatNumber(receiveAmount)}`} />
        <SellInfoItem
          title="Thời gian vote"
          content={`${duration.days ?? 0}D : ${duration.hours ?? 0}H : ${duration.minutes ?? 0}M : ${
            duration.seconds ?? 0
          }S LEFT`}
          color="primary"
        />
        <Divider
          sx={{
            mt: "10px",
          }}
        />
        <Box sx={{ display: "flex", mt: "17px" }}>
          <Button
            variant="contained"
            sx={{ flex: 1 }}
            disabled={voted}
            onClick={() => {
              setVoted(true);
            }}
          >
            Yes
          </Button>
          <Button
            variant="contained"
            sx={{ background: "#C5CEE8", flex: 1, ml: "6px" }}
            disabled={voted}
            onClick={() => {
              setVoted(true);
            }}
          >
            No
          </Button>
        </Box>
      </Box>
    </Box>
  );
});

export default SellVoteCard;

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
