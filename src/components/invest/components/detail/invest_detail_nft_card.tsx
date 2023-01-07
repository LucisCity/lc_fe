import { Alert, Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import { Center } from "../../../common/center";
import { NftInfoCard } from "../../../landing/nft_section";
import { useNft } from "../../hooks/use_nft";
import { ethers } from "ethers";
import { formatCurrency } from "../../../../utils/number.util";
import BuyNftPopup from "./buy_nft_popup";
import React from "react";
import { useAccount } from "wagmi";
import UserStore from "../../../../store/user.store";
import Link from "next/link";

const ProgressWaitData = ({ refetchContractData }: { refetchContractData: () => void }) => {
  const [progressValue, setProgressValue] = React.useState(0);
  // 10s refetch data from blockchain
  React.useEffect(() => {
    const id = setInterval(() => {
      refetchContractData();
      setProgressValue(0);
    }, 10 * 1000);
    const timer = setInterval(() => {
      setProgressValue((oldState) => oldState + 10);
    }, 1000);

    return () => {
      clearInterval(id);
      clearInterval(timer);
    };
  }, []);

  return <CircularProgress variant="determinate" size={20} value={progressValue} />;
};
export default function InvestDetailNftCard() {
  const { data, refetchContractData } = useNft();

  const [isDifferentAddress, setIsDifferentAddress] = React.useState(false);
  const [showAlertConnectWallet, setShowAlertConnectWallet] = React.useState(false);
  const [showPopup, setShowPopup] = React.useState(false);
  const { address, isConnected } = useAccount({});
  const userWalletAddress = UserStore.user?.wallet_address;
  const pricePerOne = React.useMemo(() => Number(ethers.utils.formatUnits(data?.[0] ?? 0)), [data?.[0]]);
  const totalSupply = React.useMemo(() => Number(data?.[1] ?? 0), [data?.[1]]);
  const totalSold = React.useMemo(() => Number(data?.[3] ?? 0), [data?.[3]]);
  const floorPrice = React.useMemo(() => data?.[0] ?? 0, [data?.[0]]);

  const onClosePopup = React.useCallback(() => setShowPopup(false), []);

  React.useEffect(() => {
    if (address !== userWalletAddress) {
      setIsDifferentAddress(true);
    } else {
      setIsDifferentAddress(false);
    }
  }, [address]);
  return (
    <>
      {showPopup && (
        <BuyNftPopup
          isDifferentAddress={isDifferentAddress}
          onClose={onClosePopup}
          floorPrice={floorPrice}
          availableItems={totalSupply - totalSold}
        />
      )}
      <Box
        sx={{
          width: ["100%", "404px"],
          background: "white",
          p: "18px",
          borderRadius: 4,
          mt: [6, 0],
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            mt: "10px",
          }}
        >
          <Typography variant="subtitle1" mt="12px">
            Tổng NFT đã bán
          </Typography>
          <ProgressWaitData refetchContractData={refetchContractData} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            mt: "10px",
          }}
        >
          <Typography variant="h3">{formatCurrency(pricePerOne * totalSold ?? 0)}</Typography>
          <Typography variant="caption">{`${totalSold}/${totalSupply}`} NFT đang bán</Typography>
        </Box>

        <Grid container spacing={2} mt={5}>
          <Grid item xs={6}>
            <NftInfoCard title="Giá trị" content={formatCurrency(totalSupply * pricePerOne)} bgColor="#CFD8F11F" />
          </Grid>
          <Grid item xs={6}>
            <NftInfoCard title="Tổng cung" content={totalSupply.toString()} bgColor="#CFD8F11F" />
          </Grid>
          <Grid item xs={6}>
            <NftInfoCard
              title="Đồng tiền chấp nhận"
              content="USDT"
              icon="/assets/imgs/landing/ic_usdt.svg"
              bgColor="#CFD8F11F"
            />
          </Grid>
          <Grid item xs={6}>
            <NftInfoCard title="Giá trên 1 NFT" content={formatCurrency(pricePerOne)} bgColor="#CFD8F11F" />
          </Grid>
          <Grid item xs={6}>
            <NftInfoCard title="Network" content="BSC" icon="/assets/imgs/landing/ic_bsc.svg" bgColor="#CFD8F11F" />
          </Grid>
          <Grid item xs={6}>
            <NftInfoCard title="Tài sản" content={"Bất động sản"} bgColor="#CFD8F11F" />
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Center>
                <Typography variant="caption" mt={4} mb={3}>
                  {formatCurrency(Number(ethers.utils.formatUnits(data?.[0] ?? 0)))} đầu tư với số vốn tối thiểu
                </Typography>
              </Center>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  height: "50px",
                }}
                endIcon={<Box component="img" src="/assets/imgs/landing/ic_next.svg" alt="" />}
                onClick={() => {
                  if (!userWalletAddress || !isConnected) {
                    setShowAlertConnectWallet(true);
                    return;
                  }
                  setShowPopup(true);
                }}
              >
                Mua NFT
              </Button>
              {showAlertConnectWallet && (
                <>
                  <Alert severity="error" sx={{ mt: 4 }}>
                    Bạn cần kết nối ví để mua NFT.
                  </Alert>
                  <Box display={"flex"} justifyContent={"flex-end"}>
                    <Button
                      component={Link}
                      href={"/profile/account?tab=connect_wallet"}
                      sx={{ textTransform: "capitalize" }}
                    >
                      Kết nối ví
                    </Button>
                  </Box>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
