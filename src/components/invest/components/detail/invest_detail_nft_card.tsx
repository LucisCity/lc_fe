import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { Center } from "../../../common/center";
import { NftInfoCard } from "../../../landing/nft_section";

export default function InvestDetailNftCard() {
  return (
    <Box
      id={"buy"}
      sx={{
        width: ["100%", "404px"],
        background: "white",
        p: "18px",
        borderRadius: 4,
        mt: [6, 0],
      }}
    >
      <Typography variant="subtitle1" mt="12px">
        Tổng NFT đã bán
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          mt: "10px",
        }}
      >
        <Typography variant="h3">$126,214.01</Typography>
        <Typography variant="caption">126,214 NFT đang bán</Typography>
      </Box>

      <Grid container spacing={2} mt={5}>
        <Grid item xs={6}>
          <NftInfoCard title="Total raise" content="$ 45,948.55" bgColor="#CFD8F11F" />
        </Grid>
        <Grid item xs={6}>
          <NftInfoCard title="Total supply" content="2M Tokens" bgColor="#CFD8F11F" />
        </Grid>
        <Grid item xs={6}>
          <NftInfoCard
            title="Accepted currency"
            content="$45,948.55"
            icon="/assets/imgs/landing/ic_usdt.svg"
            bgColor="#CFD8F11F"
          />
        </Grid>
        <Grid item xs={6}>
          <NftInfoCard title="Price per token" content="$ 1" bgColor="#CFD8F11F" />
        </Grid>
        <Grid item xs={6}>
          <NftInfoCard title="Network" content="BSC" icon="/assets/imgs/landing/ic_bsc.svg" bgColor="#CFD8F11F" />
        </Grid>
        <Grid item xs={6}>
          <NftInfoCard title="Asset" content="1" bgColor="#CFD8F11F" />
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Center>
              <Typography variant="caption" mt={4} mb={3}>
                1 USDT minimum investment
              </Typography>
            </Center>
            <Link href="/nft/1">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  height: "50px",
                }}
                endIcon={<Box component="img" src="/assets/imgs/landing/ic_next.svg" alt="" />}
              >
                Mua NFT
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
