import * as React from 'react';
import { Box, Card, CardContent, CardMedia, Paper, Typography } from "@mui/material";

interface BankConnectedProps {
  info: {
    bankName: string;
    cardId: string;
    owner: string;
  }
  cardImg: string;
}

const BankConnected = (props: BankConnectedProps) => {
  return (
    <Card elevation={0} sx={{display: 'flex', width: 770, height: 120, mb: 4}}>
      <Box p={2} sx={{display: 'flex'}}>
        <CardMedia
          component="img"
          sx={{width: 167, height: 105}}
          image={props.cardImg}
          alt="bank card"
        />
        <Box pl={6} sx={{color: "#504C67"}}>
          <Typography fontSize={14} fontWeight={600} pb={5}>
            {props.info.bankName}
          </Typography>
          <Typography fontSize={16} fontWeight={400} color="text.secondary" pb={2}>
            {props.info.cardId}
          </Typography>
          <Typography fontSize={16} fontWeight={400} color="text.secondary" sx={{textTransform: "uppercase"}}>
            {props.info.owner}
          </Typography>
        </Box>
      </Box>
    </Card>
  )
}

const AddBank = () => {
  return (
    <Card elevation={0} sx={{display: 'flex', width: 770, height: 120}}>
      <Box
        p={2}
        sx={{
          display: 'flex',
          width: 167,
          height: 105,
          background: '#F1F1F1',
          border: '1px dashed #D9D9D9',
          borderRadius: 2,
        }}
      >
      </Box>
    </Card>
  )
}

const banksConnected: BankConnectedProps[] = [
  {
    info:
      {
        bankName: "Techcombank",
        cardId: "4567 8760 3291 4451",
        owner: "Richards Esther",
      },
    cardImg: "https://i.imgur.com/TJ8ZNqk.png",
  }
]

export default function ConnectBank() {

  return (
    <React.Fragment>
      {banksConnected.map((bank) => (
        <BankConnected key={bank.info.cardId} info={bank.info} cardImg={bank.cardImg}/>
      ))}
      <AddBank/>
    </React.Fragment>
  );
}