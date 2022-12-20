import * as React from 'react';
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import FormControlUnstyled from "@mui/base/FormControlUnstyled";
import { CustomInput } from "../components/custom_input";
import SvgIcon from "../../common/svg_icon";
import s from "./connect_bank.module.scss";

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
    <Card
      className={s.bankCard}
      elevation={0}
      sx={{display: 'flex', width: "100%", height: 120, mb: 4, p: 2}}
    >
      <CardMedia
        className={s.bankCardMedia}
        component="img"
        sx={{width: 167, aspectRatio: "1.6"}}
        image={props.cardImg}
        alt="bank card"
      />
      <Box
        sx={{display: "flex", flex: 1, justifyContent: "space-between", alignItems: "center"}}
      >
        <Box
          className={s.bankCardContent}
          pl={6}
          sx={{color: "#504C67"}}
          minWidth={200}
        >
          <Typography className={s.bankCardTextTitle} fontSize={14} fontWeight={600} pb={5}>
            {props.info.bankName}
          </Typography>
          <Typography className={s.bankCardTextSubtitle} fontSize={16} fontWeight={400} color="text.secondary" pb={2}>
            {props.info.cardId}
          </Typography>
          <Typography
            className={s.bankCardTextSubtitle}
            fontSize={16}
            fontWeight={400}
            color="text.secondary"
            sx={{textTransform: "uppercase"}}>
            {props.info.owner}
          </Typography>
        </Box>
        <Box
          className={s.closeButton}
          border="1.5px solid #504C67"
          width={22}
          height={22}
          mr={5}
          borderRadius={10}
          sx={{
            display: "flex",
            alignItems: "center",
            "&:hover": {
              background: "#F1F1F1",
            }
          }}
        >
          <CloseOutlinedIcon
            sx={{
              width: 15,
              ml: 0.5,
            }}
            color={"disabled"}
          />
        </Box>
      </Box>
    </Card>
  )
}

interface AddBankProps {
  handleAddBank: any;
}

const AddBank = (props: AddBankProps) => {
  return (
    <Card
      className={s.bankCard}
      elevation={0}
      sx={{
        display: 'flex',
        flexDirection: "row",
        width: "100%",
        height: 120,
        alignItems: "center",
        marginBottom: 6,
        "&:hover": {
          background: "#F3F3F3",
          cursor: "pointer",
        }
      }}
      onClick={() => props.handleAddBank()}
    >
      <Box
        className={s.bankCardMedia}
        m={2}
        sx={{
          display: 'flex',
          width: 167,
          aspectRatio: "1.6",
          background: '#F1F1F1',
          border: '1px dashed #D9D9D9',
          borderRadius: 2,
          alignItems: "center"
        }}
      >
        <Box m={"0 auto"}>
          <SvgIcon src="/assets/imgs/icon/card_add.svg"/>
        </Box>
      </Box>
      <Typography
        className={s.bankCardContent}
        fontSize={14}
        fontWeight={600}
        pl={7}
      >
        Thêm ngân hàng
      </Typography>
    </Card>
  )
}
const Label = styled(Typography)(
  ({theme}) => ({
    color: '#504C67',
    fontWeight: 500,
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 7,
  })
);

interface FieldProps {
  defaultValue: string;
  label: string;
}

const Field = (props: FieldProps) => {
  return (
    <FormControlUnstyled
      defaultValue={props.defaultValue}
    >
      <Label>{props.label}</Label>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <CustomInput
          type="text"
          sx={{width: "100%", zIndex: 2}}
        />
      </Box>
    </FormControlUnstyled>
  )
}

const formData = [
  {
    label: "Ngân hàng",
    value: "Techcombank",
  },
  {
    label: "Số tài khoản",
    value: "1234 9097 0098 7677",
  },
  {
    label: "Số thẻ",
    value: "3211 4321 0490 9900",
  },
  {
    label: "dd/yy",
    value: "07/23",
  },
  {
    label: "Tên chủ tài khoản",
    value: "Esther Richards",
  },
]

const AddBankForm = () => {
  return (
    <form>
      <Grid container spacing={{md: 0, xs: 2}} direction={{md: "row", xs: "column"}}>
        {formData.map((data) => (
          <Grid item sm={6} xs={12} key={data.label}>
            <Field label={data.label} defaultValue={data.value}/>
          </Grid>
        ))}
      </Grid>
      <Box my={11} display={"flex"} justifyContent={"center"}>
        <Button
          variant="contained"
        >
          <Typography variant={"h5"}>
            Thêm ngân hàng
          </Typography>
        </Button>
      </Box>
    </form>
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

  const [showForm, setShowForm] = React.useState(false);
  const handleAddBank = () => {
    // setShowForm(!showForm);
  }

  return (
    <React.Fragment>
      <Box mt={5}>
        {banksConnected.map((bank) => (
          <BankConnected key={bank.info.cardId} info={bank.info} cardImg={bank.cardImg}/>
        ))}
        <AddBank handleAddBank={handleAddBank}/>
      </Box>
      <Divider
        variant="middle"
        sx={{
          mb: 6,
          borderBottomWidth: 1,
          borderBottomColor: "#D9D9D9",
        }}
      />
      {showForm ? <AddBankForm/> : null}
    </React.Fragment>
  );
}