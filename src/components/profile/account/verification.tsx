import * as React from "react";
import { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import SvgIcon from "../../common/svg_icon";
import { InputUnstyled } from "@mui/base";

interface VerifyBoxProps {
  title: string;
  instruction: string;
  imgDesc: string;
}

const VerifyBox = (props: VerifyBoxProps) => {
  const [selectedFile, setSelectedFile] = useState<any>();
  const [preview, setPreview] = useState<any>();

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(files[0]);
  };

  // const onFileUpload = () => {
  //
  //   // Create an object of formData
  //   const formData = new FormData();
  //
  //   // Update the formData object
  //   formData.append(
  //     "myFile",
  //     selectedFile,
  //   );
  //
  //   // Details of the uploaded file
  //   console.log(selectedFile);
  //
  //   // Request made to the backend api
  //   // Send formData object
  //   axios.post("api/uploadfile", formData);
  // };

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
        {/*<input hidden accept="image/*" multiple type="file"/>*/}
        <Button
          sx={{
            textTransform: "none",
            background: "#fff",
            width: { md: "100%" },
            aspectRatio: "3/2",
            borderRadius: 4,
            maxWidth: 385,
            display: "flex",
            alignItems: "center",
            "&:hover": {
              background: "#f3f3f3",
              cursor: "pointer",
            },
            position: "relative",
          }}
        >
          {selectedFile && (
            <img src={preview} style={{ position: "absolute", width: "100%", height: "100%", borderRadius: 16 }} />
          )}
          <label
            style={{
              border: "1px solid red",
              position: "absolute",
              opacity: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <InputUnstyled type="file" onChange={onSelectFile} />
          </label>
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
              <SvgIcon src="/assets/imgs/icon/document_upload.svg" />
            </Box>
            <Typography color={"#9A9A9A"} lineHeight={"18.75px"} fontSize={{ md: 16, sm: 14, xs: 16 }}>
              {props.imgDesc}
            </Typography>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

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
    instruction:
      "Chụp ảnh chân dung cầm thẻ CCCD/CMT mặt trước nhằm mục đích bảo mật, " +
      "ảnh sẽ được dùng để xác minh danh tính khi có xảy ra sự cố hoặc tranh chấp",
  },
];

export default function Verification() {
  return (
    <Box color={"#9A9A9A"} fontWeight={400} fontSize={16}>
      <Typography sx={{ mt: 5, mb: 8 }} lineHeight={"18.75px"}>
        Để ngăn chặn robot, tài khoản rác ảnh hưởng tới quyền lợi khách hàng cá nhân, chúng tôi thực hiện KYC và cần các
        thông tin sau:
      </Typography>
      <Grid container spacing={5}>
        {verifyBoxes.map((i, idx) => (
          <Grid key={idx} item md={6} xs={12}>
            <VerifyBox title={i.title} instruction={i.instruction} imgDesc={i.imgDesc} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} pt={11}>
        <Typography pb={5}>Thời gian xác minh danh tính có thể kéo dài 1 - 2 ngày.</Typography>
        <Button variant="contained">Xác minh danh tính</Button>
      </Box>
    </Box>
  );
}
