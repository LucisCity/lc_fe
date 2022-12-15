import * as React from 'react';
import { Box, Button, Grid, Typography } from "@mui/material";
import SvgIcon from "../../common/svg_icon";


interface VerifyBoxProps {
  title: string;
  instruction: string;
  imgDesc: string;
}

const VerifyBox = (props: VerifyBoxProps) => {

  // const [img, setImg] = React.useState({file: null, imagePreviewUrl: null});

  const handleUploadImg = (e: Event) => {
    // if (!e.target) return;
    // e.preventDefault();
    // const reader = new FileReader();
    // const file = (e.target as HTMLInputElement)?.files[0];
    // reader.onloadend = () => {
    //   setImg({
    //     file: file,
    //     imagePreviewUrl: reader.result
    //   });
    // }
    // reader.readAsDataURL(file);
  }

  return (
    <Box
      height={"100%"}
      // sx={{
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "space-between"
      // }}
    >
      <Box>
        <Typography fontWeight={500} fontSize={20} color={"#000000"}>
          {props.title}
        </Typography>
        <Typography mt={2} mb={5} lineHeight={"18.75px"}>
          {props.instruction}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{
            textTransform: "none",
            background: "#fff",
            width: {md: "100%"},
            aspectRatio: "3/2",
            borderRadius: 4,
            maxWidth: 385,
            display: "flex",
            alignItems: "center",
            "&:hover": {
              background: "#f3f3f3",
              cursor: "pointer",
            }
          }}
        >
          {/*<input hidden accept="image/*" multiple type="file" onChange={handleUploadImg}/>*/}
          <Box
            p={5}
            m={"0 auto"}
            width={"70%"}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              border: "1px dashed #626262",
              borderRadius: 4,
            }}
          >
            <Box mr={3}>
              <SvgIcon src="/assets/imgs/icon/document_upload.svg"/>
            </Box>
            <Typography color={"#9A9A9A"} lineHeight={"18.75px"} fontSize={{md: 16, sm: 14, xs: 16}}>
              {props.imgDesc}
            </Typography>
          </Box>
        </Button>
      </Box>
    </Box>
  )
}

const verifyBoxes: VerifyBoxProps[] = [
  {
    title: "Mặt trước thẻ CCCD/CMTND",
    imgDesc: "Ảnh mặt trước thẻ CCCD/CMTND",
    instruction: "Chụp ảnh mặt trước thẻ CCCD/CMT rõ ràng không bị chay, quăn mép, mờ chữ & hình ảnh",
  },
  {
    title: "Mặt sau thẻ CCCD/CMTND",
    imgDesc: "Ảnh mặt sau thẻ CCCD/CMTND",
    instruction: "Chụp ảnh mặt sau thẻ CCCD/CMT rõ ràng không bị chay, quăn mép, mờ chữ & hình ảnh",
  },
  {
    title: "Ảnh chân dung cầm thẻ CCCD/CMTND mặt trước",
    imgDesc: "Ảnh người cầm thẻ CCCD/CMTND",
    instruction: "Chụp ảnh chân dung cầm thẻ CCCD/CMT mặt trước nhằm mục đích bảo mật, " +
      "ảnh sẽ được dùng để xác minh danh tính khi có xảy ra sự cố hoặc tranh chấp",
  },
]

export default function Verification(props: VerificationProps) {

  return (
    <Box color={"#9A9A9A"} fontWeight={400} fontSize={16}>
      <Typography sx={{mt: 5, mb: 8}} lineHeight={"18.75px"}>
        Để ngăn chặn robot, tài khoản rác ảnh hưởng tới quyền lợi khách hàng cá nhân,
        chúng tôi thực hiện KYC và cần các thông tin sau:
      </Typography>
      <Grid container spacing={5}>
        <Grid item md={6} xs={12}>
          <VerifyBox title={verifyBoxes[0].title} instruction={verifyBoxes[0].instruction}
                     imgDesc={verifyBoxes[0].imgDesc}/>
        </Grid>
        <Grid item md={6} xs={12}>
          <VerifyBox title={verifyBoxes[1].title} instruction={verifyBoxes[1].instruction}
                     imgDesc={verifyBoxes[1].imgDesc}/>
        </Grid>
        <Grid item sm={3} sx={{display: {sm: "inline", xs: "none"}}}></Grid>
        <Grid item md={6} xs={12}>
          <VerifyBox title={verifyBoxes[2].title} instruction={verifyBoxes[2].instruction}
                     imgDesc={verifyBoxes[2].imgDesc}/>
        </Grid>
      </Grid>
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}} pt={11}>
        <Typography pb={5}>
          Thời gian xác minh danh tính có thể kéo dài 1 - 2 ngày.
        </Typography>
        <Button
          variant="contained"
        >
          Xác nhận danh tính
        </Button>
      </Box>
    </Box>
  );
}