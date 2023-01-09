import { Box, Button, Typography } from "@mui/material";
import VoteMenu from "./vote_menu";
import ShareDialog from "./share_dialog";
import { LoadingButton } from "@mui/lab";
import { AppEmitter } from "../../../../utils/emitter";
import EMITER_KEY from "../../../../config/emiter.key";

interface IProps {
  title?: string;
  vote?: number;
  totalVote?: number;
  address?: string;
  follows?: number;
  takeProfitStartTime?: string;
  toggleFollow?: () => void;
  voting?: boolean;
}

export default function InvestDetailHeader(props: IProps) {
  function onOpenMap() {
    AppEmitter.emit(EMITER_KEY.openMap);
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: ["space-between", "flex-start"],
          mt: 6,
        }}
      >
        <Typography variant="h2">{props.title}</Typography>
        {props.takeProfitStartTime && new Date() > new Date(props.takeProfitStartTime) ? (
          <Button
            color="success"
            variant="contained"
            sx={{ ml: 6, textTransform: "none", fontWeight: 400, px: "12px" }}
          >
            Sinh lời
          </Button>
        ) : null}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: [6, 0],
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <Box component="img" src="/assets/imgs/invest/icons/ic_star.svg" alt="" /> */}
          <VoteMenu />

          <Typography variant="h5" ml="2px">
            {props.vote ?? 0}
          </Typography>
          <Box
            sx={{
              background: "black",
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              mx: 4,
              display: ["none", "inherit"],
            }}
          />
          <Typography variant="h5" sx={{ display: ["none", "inherit"] }}>
            {props.totalVote} Đánh giá
          </Typography>
          <Typography variant="h5" ml={7} sx={{ display: ["none", "inherit"], cursor: "pointer" }} onClick={onOpenMap}>
            {props.address}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          <LoadingButton
            variant="contained"
            color={"secondary"}
            sx={{
              color: "#FF6C6C",
              width: "84px",
            }}
            endIcon={
              props.voting ? null : <Box component="img" src="/assets/imgs/invest/icons/ic_favorit.svg" alt="" />
            }
            loading={props.voting}
            onClick={props.toggleFollow}
          >
            {props.follows}
          </LoadingButton>
          {/* <Button
            variant="contained"
            endIcon={<Box component="img" src="/assets/imgs/invest/icons/ic_share.svg" alt="" />}
          >
            Chia sẻ
          </Button> */}
          <ShareDialog />
        </Box>
      </Box>
    </>
  );
}
