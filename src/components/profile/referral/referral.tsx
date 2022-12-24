/* eslint-disable */
import { Box, styled } from "@mui/system";
import { Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import { InputUnstyled } from "@mui/base";
import { inputUnstyledClasses } from "@mui/base/InputUnstyled";
import { useCopyToClipboard } from "react-use";
import { ReferralTable } from "./referral_table";
import UserStore from "../../../store/user.store";

const Label = styled(Typography)(({ theme }) => ({
  color: "#504C67",
  fontWeight: 500,
  fontSize: 16,
  paddingTop: 10,
  paddingBottom: 7,
}));

interface ReferralLinkBoxProps {
  label: string;
}

const CustomInput = styled(InputUnstyled, {
  shouldForwardProp: (prop) => prop !== "email",
})(
  ({ theme }) => `
  .${inputUnstyledClasses.input} {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #504C67;
    background: #fff;
    border: none;
    border-radius: 8px;
    height: ${useMediaQuery(theme.breakpoints.up("sm")) ? "50px" : "60px"};
    padding-left: 17px;
    
    // '&:hover': {
    //   background: "white";
    //   border-color: "white";
    // }
  }
`,
);

const ReferralLinkBox = (props: ReferralLinkBoxProps) => {
  const [isCopy, setIsCopy] = React.useState(false);
  const [value, copy] = useCopyToClipboard();
  const [url, setUrl] = React.useState<string>("");
  const { user } = UserStore;
  const handleCopyLink = () => {
    copy(`${url}/register?r=${user?.ref_code}`);
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 2000);
  };

  React.useEffect(() => {
    if (typeof window !== undefined) {
      setUrl(window.location.origin);
    }
  }, []);
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
        <CustomInput type="text" sx={{ width: "100%" }} disabled={true} value={`${url}/register?r=${user?.ref_code}`} />
        <Button
          variant="contained"
          sx={{ p: 0, width: { sm: 150, xs: 60 }, ml: 2, height: { sm: 50, xs: 60 }, position: "relative" }}
          onClick={handleCopyLink}
          disabled={isCopy}
        >
          {!isCopy ? "Copy link" : "Copied!"}
        </Button>
      </Box>
    </>
  );
};

const linkBoxData: ReferralLinkBoxProps[] = [
  {
    label: "Link giới thiệu đăng ký",
  },
  {
    label: "Link giới thiệu mua thẻ Galaxy Platinum",
  },
];

export const ProfileReferral = () => {
  return (
    <Box mx={{ sm: 10, xs: 3, fontWeight: 400 }} my={8}>
      <Typography fontWeight={700} fontSize={{ sm: 32, xs: 25 }} textAlign={{ sm: "left", xs: "center" }} mb={2}>
        Referral
      </Typography>
      {linkBoxData.map((i) => (
        <ReferralLinkBox label={i.label} key={i.label} />
      ))}
      <Divider
        variant="middle"
        sx={{
          mt: 8,
          mb: 6,
          borderBottomWidth: 1,
          borderBottomColor: "#D9D9D9",
        }}
      />
      {/*<Box sx={{display: "flex", justifyContent: "space-between", alignItems: "baseline"}} mb={5}>*/}
      <Typography variant={"h3"} textAlign={{ sm: "left", xs: "center" }} mb={5}>
        Danh sách Referral
      </Typography>
      {/*  <Typography fontWeight={400} color="#7A7A7A">21/2340 Referral</Typography>*/}
      {/*</Box>*/}
      <ReferralTable rowsPerPage={10} />
    </Box>
  );
};
