/* eslint-disable */
import { Box, styled } from "@mui/system";
import { Button, Paper, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import { InputUnstyled } from "@mui/base";
import { inputUnstyledClasses } from "@mui/base/InputUnstyled";
import { useCopyToClipboard } from "react-use";
import { ReferralTable } from "./referral_table";

const Label = styled(Typography)(
  ({theme}) => ({
    color: '#504C67',
    fontWeight: 500,
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 7,
  })
);

interface ReferralLinkBoxProps {
  label: string;
  value: string;
}

const CustomInput = styled(InputUnstyled, {
  shouldForwardProp: (prop) => prop !== 'email',
})(({theme}) => `
  .${inputUnstyledClasses.input} {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #504C67;
    background: #fff;
    border: none;
    border-radius: 8px;
    height: ${useMediaQuery(theme.breakpoints.up('sm')) ? '50px' : '60px'};
    padding-left: 17px;
    
    // '&:hover': {
    //   background: "white";
    //   border-color: "white";
    // }
  }
`
);

const ReferralLinkBox = (props: ReferralLinkBoxProps) => {
  const [showCopiedNotion, setShowCopiedNotion] = React.useState(false);
  const [value, copy] = useCopyToClipboard();

  const handleCopyLink = () => {
    copy(props.value);
    setShowCopiedNotion(true);
    setTimeout(() => {
      setShowCopiedNotion(false);
    }, 500);
  }
  return (
    <>
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
          sx={{width: "100%"}}
          disabled={true}
          value={props.value}
        />
        <Button
          variant="contained"
          sx={{p: 0, width: {sm: 150, xs: 60}, ml: 2, height: {sm: 50, xs: 60}, position: "relative"}}
          onClick={handleCopyLink}
        >
          Copy link
          <Paper
            elevation={0}
            sx={{
              background: "rgba(223, 219, 221, 0.3)",
              position: "absolute",
              top: 52,
              display: showCopiedNotion ? "inline" : "none",
              fontSize: 12,
              px: 3,
            }}
          >
            Copied!
          </Paper>
        </Button>
      </Box>
    </>
  )
}

const linkBoxData: ReferralLinkBoxProps[] = [
  {
    label: "Link giới thiệu đăng ký",
    value: "https://luciscity.io/referral_richard/Signin/",
  },
  {
    label: "Link giới thiệu mua thẻ Galaxy Platinum",
    value: "https://luciscity.io/referral_richard/buy_card_galaxy_platinum/",
  }
]

export const ProfileReferral = () => {
  return (
    <Box mx={{sm: 10, xs: 3, fontWeight: 400}} my={8}>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "baseline"}} mb={2}>
        <Typography
          fontWeight={700}
          fontSize={{sm: 32, xs: 25}}
          textAlign={{sm: "left", xs: "center"}}
        >
          Referral
        </Typography>
      </Box>
      {linkBoxData.map((i) => (
        <ReferralLinkBox label={i.label} value={i.value} key={i.label}/>
      ))}
      <Divider
        variant="middle"
        sx={{
          my: 8,
          borderBottomWidth: 1,
          borderBottomColor: "#D9D9D9",
        }}
      />
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "baseline"}} mb={5}>
        <Typography
          variant={"h3"}
          textAlign={{sm: "left", xs: "center"}}
        >
          Danh sách Referral
        </Typography>
        <Typography fontWeight={400} color="#7A7A7A">21/2340 Referral</Typography>
      </Box>
      <ReferralTable/>
    </Box>
  )
}
