import * as React from "react";
import { useWeb3Modal } from "@web3modal/react";
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import ConfirmDialog from "../../../common/confirm_dialog";
import { useAccount, useDisconnect } from "wagmi";
import { LoadingButton } from "@mui/lab";
import TextField from "@mui/material/TextField";
import UserStore from "../../../../store/user.store";
import { useWalletAddress } from "../../../../hooks/profile/account/use_info";
import { handleGraphqlErrors } from "../../../../utils/apolo.util";
import { useSnackbar } from "notistack";

const imgSrc = "/assets/imgs/account/wallet/";

const wallets = [
  {
    src: "metamask.png",
    name: "Metamask Wallet",
  },
  {
    src: "unknown.png",
    name: "Connect Wallet",
  },
  {
    src: "binance.png",
    name: "Binance Wallet",
  },
  {
    src: "coin98.png",
    name: "Coin98 Wallet",
  },
  {
    src: "coinbase.png",
    name: "Coinbase Wallet",
  },
  {
    src: "math.png",
    name: "Math Wallet",
  },
  {
    src: "trust.png",
    name: "Trust Wallet",
  },
  {
    src: "safe_pal.png",
    name: "Safe Pal Wallet",
  },
];

interface WalletCardProps {
  src: string;
  name: string;
}

const WalletCard = (props: WalletCardProps) => {
  return (
    <Card elevation={0}>
      <Box p={1} sx={{ display: "flex", width: "100%" }}>
        <CardMedia component="img" sx={{ width: 40, height: 40 }} image={`${imgSrc + props.src}`} alt={props.name} />
        <Box pl={5} sx={{ color: "#504C67", display: "flex", alignItems: "center" }} minWidth={200}>
          <Typography fontSize={16} fontWeight={400}>
            {props.name}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default function ConnectWallet() {
  const [isShowWarning, setIsShowWarning] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { disconnect } = useDisconnect();
  const { walletAddress, updateWalletAddress } = useWalletAddress({ errorCallback: disconnect });
  const web3Modal = useWeb3Modal();
  const userWalletAddress = walletAddress ?? UserStore.user?.wallet_address;
  const { address, isConnected, isConnecting } = useAccount({});

  React.useEffect(() => {
    if (address) {
      if (userWalletAddress && address === userWalletAddress) {
        return;
      }
      if (userWalletAddress && address !== userWalletAddress) {
        enqueueSnackbar("Bạn kết nối với không đúng địa chỉ.", {
          variant: "error",
        });
        disconnect();
        return;
      }

      updateWalletAddress({
        variables: {
          walletAddress: address,
        },
      }).then();
    }
  }, [address, userWalletAddress]);

  return (
    <React.Fragment>
      <ConfirmDialog
        isOpen={isShowWarning}
        title={"Kết nối ví"}
        onClose={(accept) => {
          if (accept) {
            web3Modal.open();
            setIsShowWarning(false);
            return;
          }
          setIsShowWarning(false);
        }}
      >
        {!!userWalletAddress ? (
          <>
            <Typography>Tài khoản của bạn đang liên kết với địa chỉ ví:</Typography>
            <Typography fontWeight={"700"}>{userWalletAddress}</Typography>
            <Typography>Bạn nên chắc chắn rằng sẽ kết nối đúng với địa chỉ ví này.</Typography>
          </>
        ) : (
          <Typography>
            Mỗi tài khoản chỉ có thể kết nối với 1 địa chỉ ví. Bạn nên chắc chắn về tài khoản sắp kết nối.
          </Typography>
        )}
      </ConfirmDialog>
      <Typography variant={"h3"} mt={5}>
        Lựa chọn loại ví điện tử cho bạn
      </Typography>
      <Typography fontSize={16} fontWeight={400} my={5}>
        Bắt đầu bằng cách kết nối với một trong các ví bên dưới. Đảm bảo lưu trữ khóa riêng tư hoặc cụm từ hạt giống của
        bạn một cách an toàn. Không bao giờ chia sẻ chúng với bất cứ ai.
      </Typography>
      {!isConnected ? (
        <LoadingButton
          loading={isConnecting && web3Modal.isOpen}
          variant={"contained"}
          onClick={() => setIsShowWarning(true)}
        >
          Kết nối ví
        </LoadingButton>
      ) : (
        <>
          <Typography variant={"h5"} mb={1}>
            Địa chỉ ví
          </Typography>
          <TextField variant={"outlined"} disabled value={address} fullWidth sx={{ mb: 2 }} />
          <Button variant={"outlined"} onClick={() => disconnect()}>
            Ngắt kết nối
          </Button>
        </>
      )}
      {/* <Grid container spacing={1} mt={7}>
        {wallets.map((wallet) => (
          <Grid item key={wallet.name} sm={6} xs={12}>
            <WalletCard src={wallet.src} name={wallet.name} />
          </Grid>
        ))}
      </Grid> */}
      <Box mt={10} sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="text" sx={{ textTransform: "none" }}>
          Learn How to connect Wallet
        </Button>
      </Box>
    </React.Fragment>
  );
}
