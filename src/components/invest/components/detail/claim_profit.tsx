import { Box, Button, Typography } from "@mui/material";

type Props = {
  enable: boolean;
};
// DCDCDC
export default function ClaimProfitCard(props: Props) {
  return (
    <Box id={"claim"} mt={6}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h3">Nhận lợi nhuận</Typography>
          <Box component="img" src="/assets/imgs/invest/icons/ic_info.svg" alt="" ml="6px" />
        </Box>
        <Typography variant="caption">02, Sep 2022 - 02, Nov 2022</Typography>
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
        <Typography variant="h3" color={props.enable === false ? "#DCDCDC" : "primary"}>
          $ 250.21
        </Typography>
        <Button variant="contained" disabled sx={{ background: props.enable === false ? "#DCDCDC" : "primary" }}>
          Claim
        </Button>
      </Box>
    </Box>
  );
}
