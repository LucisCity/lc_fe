import { LoadingButton } from "@mui/lab";
import { Box, Divider, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useCountdownTime } from "../../../../hooks/use_countdown";
import projectStore from "../../../../store/project.store";
import userStore from "../../../../store/user.store";
import { formatDate } from "../../../../utils/date.util";
import { KMath } from "../../../../utils/math.util";
import { formatNumber } from "../../../../utils/number.util";
import useVoteSell from "../../hooks/use_vote_sell";

const SellVoteCard = observer(() => {
  const project = projectStore.projectDetail;

  const { onVote, voting, voteType, setVoteType, voted } = useVoteSell();
  const nftBought = project?.nftBought;
  const receiveAmount = KMath.mul(project?.nft_price ?? 0, nftBought?.total_nft ?? 0).toNumber();

  const now = new Date();
  if (
    !userStore.isLoggedIn ||
    !project?.start_time_vote_sell ||
    !project.end_time_vote_sell ||
    now < project.start_time_vote_sell ||
    now > project.end_time_vote_sell
  ) {
    return null;
  }

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
        <VoteCountdown endTime={project?.end_time_vote_sell} />
        {voted || !nftBought || nftBought.is_sell_voted === true || nftBought.total_nft < 1 ? null : (
          <>
            <Divider
              sx={{
                mt: "10px",
              }}
            />

            <Box sx={{ display: "flex", mt: "17px" }}>
              <LoadingButton
                variant="contained"
                sx={{ flex: 1 }}
                onClick={() => {
                  setVoteType("accept");
                  onVote(true);
                }}
                loading={voting && voteType === "accept"}
              >
                Yes
              </LoadingButton>
              <LoadingButton
                variant="contained"
                sx={{ background: "#C5CEE8", flex: 1, ml: "6px" }}
                onClick={() => {
                  setVoteType("deny");
                  onVote(false);
                }}
                loading={voting && voteType === "deny"}
              >
                No
              </LoadingButton>
            </Box>
          </>
        )}
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
