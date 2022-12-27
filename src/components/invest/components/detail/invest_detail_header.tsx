import { Box, Button, Typography } from "@mui/material";
import ShareDialog from "./share_dialog";

interface IProps {
  title?: string;
  rate?: number;
  totalRate?: number;
  address?: string;
  favorites?: number;
}

export default function InvestDetailHeader(props: IProps) {
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
        <Button color="success" variant="contained" sx={{ ml: 6, textTransform: "none", fontWeight: 400, px: "12px" }}>
          Sinh lời
        </Button>
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
          <Box component="img" src="/assets/imgs/invest/icons/ic_star.svg" alt="" />
          <Typography variant="h5" ml="2px">
            {props.rate}
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
            {props.totalRate} Đánh giá
          </Typography>
          <Typography variant="h5" ml={7} sx={{ display: ["none", "inherit"] }}>
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
          <Button
            variant="contained"
            color={"secondary"}
            sx={{
              color: "#FF6C6C",
              width: "84px",
            }}
            endIcon={<Box component="img" src="/assets/imgs/invest/icons/ic_favorit.svg" alt="" />}
          >
            {props.favorites}
          </Button>
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
