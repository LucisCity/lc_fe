import { Box, Button, Typography } from "@mui/material";

export default function InvestDetailHeader() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 6,
        }}
      >
        <Typography variant="h2">Navaland Max</Typography>
        <Button color="success" variant="contained" sx={{ ml: 6 }}>
          Sinh lời
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box component="img" src="/assets/imgs/invest/icons/ic_star.svg" alt="" />
          <Typography variant="h5">.</Typography>
          <Typography variant="h5" mx={3}>
            120 Đánh giá
          </Typography>
          <Typography variant="h5" ml={7}>
            2118 Thornridge Cir. Syracuse, Connecticut 35624
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
            235
          </Button>
          <Button
            variant="contained"
            endIcon={<Box component="img" src="/assets/imgs/invest/icons/ic_share.svg" alt="" />}
          >
            Chia sẻ
          </Button>
        </Box>
      </Box>
    </>
  );
}
