import * as React from "react";
import { ChangeEvent, useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import SvgIcon from "../../common/svg_icon";
import { InputUnstyled } from "@mui/base";
import { FileUpload, useUserKyc } from "../../../hooks/profile/account/use_kyc";

interface VerifyBoxProps {
  fieldName: string;
  title: string;
  instruction: string;
  imgDesc: string;
  handleSelectFile: (file: FileUpload) => void;
  imageUrl?: string;
  disabled?: boolean;
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

    setSelectedFile(files?.[0]);
    props.handleSelectFile({ fieldName: props.fieldName, file: files?.[0] });
  };

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
            <img
              src={props.disabled ? props.imageUrl : preview}
              style={{ position: "absolute", width: "100%", height: "100%", borderRadius: 16 }}
            />
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
            <input
              type="file"
              onChange={onSelectFile}
              disabled={props.disabled}
              accept="image/png, image/jpeg, image/jpeg"
            />
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

const verifyBoxes = [
  {
    fieldName: "front_id",
    title: "Mặt trước thẻ CCCD/CMTND",
    imgDesc: "Ảnh mặt trước thẻ CCCD/CMTND",
    instruction: "Chụp ảnh mặt trước thẻ CCCD/CMT rõ ràng không bị chay, quăn mép, mờ chữ & hình ảnh",
  },
  {
    fieldName: "back_id",
    title: "Mặt sau thẻ CCCD/CMTND",
    imgDesc: "Ảnh mặt sau thẻ CCCD/CMTND",
    instruction: "Chụp ảnh mặt sau thẻ CCCD/CMT rõ ràng không bị chay, quăn mép, mờ chữ & hình ảnh",
  },
  {
    fieldName: "holding_id",
    title: "Ảnh chân dung cầm thẻ CCCD/CMTND mặt trước",
    imgDesc: "Ảnh người cầm thẻ CCCD/CMTND",
    instruction:
      "Chụp ảnh chân dung cầm thẻ CCCD/CMT mặt trước nhằm mục đích bảo mật, " +
      "ảnh sẽ được dùng để xác minh danh tính khi có xảy ra sự cố hoặc tranh chấp",
  },
];

type VerifyState = "NONE" | "SUCCESS" | "FAILED" | "PENDING";

export default function Verification() {
  const { data, error, loading, uploadImages } = useUserKyc();

  // console.log(`data ${JSON.stringify(data)}`);
  const [selectedFiles, setSelectedFiles] = React.useState<FileUpload[]>([]);
  const [verification, setVerification] = React.useState<VerifyState>("NONE");
  // console.log(`verification ${data["front_id"]}`);
  React.useEffect(() => {
    if (data?.status) {
      setVerification(data?.status);
    }
  }, [verification]);

  // console.log(`selectedFiles length ${JSON.stringify(selectedFiles)}`);
  const handleSelectFile = (file: FileUpload) => {
    setSelectedFiles([...selectedFiles, file]);
  };

  const handleUploadFiles = async () => {
    const success = await uploadImages(selectedFiles);
    if (success) {
      setVerification("PENDING");
    }
  };

  return (
    <Box color={"#9A9A9A"} fontWeight={400} fontSize={16}>
      <Typography sx={{ mt: 5, mb: 8 }} lineHeight={"18.75px"}>
        Để ngăn chặn robot, tài khoản rác ảnh hưởng tới quyền lợi khách hàng cá nhân, chúng tôi thực hiện KYC và cần các
        thông tin sau:
      </Typography>
      <Grid container spacing={5}>
        {verifyBoxes.map((i, idx) => (
          <Grid key={idx} item md={6} xs={12}>
            <VerifyBox
              title={i.title}
              instruction={i.instruction}
              imgDesc={i.imgDesc}
              fieldName={i.fieldName}
              handleSelectFile={handleSelectFile}
              imageUrl={data ? data[i.fieldName] : null}
              disabled={!!data}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} pt={11}>
        <Typography pb={5}>Thời gian xác minh danh tính có thể kéo dài 1 - 2 ngày.</Typography>
        {verification === "NONE" && (
          <Button variant="contained" onClick={handleUploadFiles}>
            Xác minh danh tính
          </Button>
        )}
        {verification === "PENDING" && <Button variant="outlined">Đang xử lý</Button>}
      </Box>
    </Box>
  );
}
