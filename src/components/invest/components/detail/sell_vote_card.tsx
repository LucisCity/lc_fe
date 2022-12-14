import { Box, Button, Divider, Typography } from "@mui/material";
import { useState } from "react";
import { useCountdownTime } from "../../../../hooks/use_countdown";
import { formatDate } from "../../../../utils/date.util";
const DEMO_OFFET_TIME = 5 * 24 * 60 * 60 * 1000;
const timeEnd = new Date(new Date().getTime() + DEMO_OFFET_TIME);
export default function SellVoteCard() {
  const duration = useCountdownTime(timeEnd);
  const [voted, setVoted] = useState(false);

  return (
    <Box mt={6}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h3">Vote bán</Typography>
          <Box component="img" src="/assets/imgs/invest/icons/ic_info.svg" alt="" ml="6px" />
        </Box>
        <Typography variant="caption">{formatDate(timeEnd)}</Typography>
      </Box>
      <Box
        sx={{
          background: "white",
          borderRadius: "8px",
          p: "18px",
          mt: "20px",
        }}
      >
        <SellInfoItem title="Giá mua BĐS" content="$ 1,000,000.00" />
        <SellInfoItem title="Số mảnh bạn nắm dữ" content="52.000/2.000.000" />
        <SellInfoItem title="Tỉ lệ tương đương" content="2,6%" />
        <SellInfoItem title="Số tiền nhận về sau khi bán" content="$ 26,000.00" />
        <SellInfoItem
          title="Thời gian vote"
          content={`${duration.days}D : ${duration.hours}H : ${duration.minutes}M : ${duration.seconds}S LEFT`}
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
}

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
