import * as React from 'react';
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

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
]

interface WalletCardProps {
  src: string;
  name: string;
}

const WalletCard = (props: WalletCardProps) => {

  return (
    <Card
      elevation={0}
    >
      <Box p={1} sx={{display: 'flex', width: "100%"}}>
        <CardMedia
          component="img"
          sx={{width: 40, height: 40}}
          image={`${imgSrc + props.src}`}
          alt={props.name}
        />
        <Box pl={5} sx={{color: "#504C67", display: "flex", alignItems: "center"}} minWidth={200}>
          <Typography fontSize={16} fontWeight={400}>
            {props.name}
          </Typography>
        </Box>
      </Box>
    </Card>
  )
}


export default function ConnectWallet() {


  return (
    <React.Fragment>
      <Typography variant={"h3"}>
        Lựa chọn loại ví điện tử cho bạn
      </Typography>
      <Typography fontSize={16} fontWeight={400} my={5}>
        Bắt đầu bằng cách kết nối với một trong các ví bên dưới. Đảm bảo lưu trữ khóa riêng tư hoặc cụm từ hạt giống của
        bạn một cách an toàn. Không bao giờ chia sẻ chúng với bất cứ ai.
      </Typography>
      <Grid container spacing={1} mt={7}>
        {wallets.map((wallet) => (
          <Grid item key={wallet.name} sm={6} xs={12}>
            <WalletCard src={wallet.src} name={wallet.name}/>
          </Grid>
        ))}
      </Grid>
      <Box mt={10} sx={{display: "flex", justifyContent: "flex-end"}}>
        <Button variant="text" sx={{textTransform: "none"}}>
          Learn How to connect Wallet
        </Button>
      </Box>
    </React.Fragment>
  );
}