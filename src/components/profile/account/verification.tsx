import * as React from "react";
import { ChangeEvent } from "react";
import { Box, Button, Grid, Skeleton, Typography } from "@mui/material";
import SvgIcon from "../../common/svg_icon";
import { FileUpload, useUserKyc } from "../../../hooks/profile/account/use_kyc";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useFileInput } from "../../../hooks/use_file_input";
import { useSnackbar } from "notistack";

interface VerifyBoxProps {
  fieldName: string;
  title: string;
  instruction: string;
  imgDesc: string;
  handleSelectFile: (file: any) => void;
  imageUrl?: string;
}

const VerifyBox = (props: VerifyBoxProps) => {
  const { imgDesc, instruction, title, handleSelectFile, imageUrl, fieldName } = props;
  const { selectedFile, setSelectedFile, preview } = useFileInput(imageUrl);

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) {
      setSelectedFile(undefined);
      handleSelectFile({ fieldName: fieldName, file: null });
      return;
    }

    setSelectedFile(files?.[0]);
    handleSelectFile({ fieldName: fieldName, file: files?.[0] });
  };

  return (
    <Box height={"100%"}>
      <Box>
        <Typography fontWeight={500} fontSize={20} color={"#000000"}>
          {title}
        </Typography>
        <Typography mt={2} mb={5} lineHeight={"18.75px"}>
          {instruction}
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
          {(!imageUrl ? selectedFile : true) && (
            <img
              src={preview}
              style={{ position: "absolute", width: "100%", height: "100%", borderRadius: 16 }}
              alt="kyc image"
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
              disabled={!!imageUrl}
              accept="image/png, image/jpeg, image/jpeg, image/gif"
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
              {imgDesc}
            </Typography>
          </Box>
        </Button>
      </Box>
    </Box>
  );
};

interface VerifyBoxSkeletonProps {
  title: string;
  instruction: string;
}

const VerifyBoxSkeleton = (props: VerifyBoxSkeletonProps) => {
  const { title, instruction } = props;

  return (
    <Box height={"100%"}>
      <Box>
        <Typography fontWeight={500} fontSize={20} color={"#000000"}>
          {title}
        </Typography>
        <Typography mt={2} mb={5} lineHeight={"18.75px"}>
          {instruction}
        </Typography>
      </Box>
      <Box
        sx={{
          width: { md: "100%" },
          aspectRatio: "3/2",
          borderRadius: 4,
          maxWidth: 385,
          display: "flex",
        }}
      >
        <Skeleton
          variant={"rounded"}
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: 4,
          }}
        ></Skeleton>
      </Box>
    </Box>
  );
};

const VerifyStatus = (props: { color: string; icon: any; text: string }) => {
  return (
    <Button
      variant="outlined"
      startIcon={props.icon}
      sx={{
        px: 7,
        color: props.color,
        border: "none",
        background: "#fff",
        "&:hover": { borderColor: props.color, background: "#fff" },
      }}
    >
      {props.text}
    </Button>
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

export default function Verification() {
  const { data, loading, uploadImages } = useUserKyc();
  const { enqueueSnackbar } = useSnackbar();

  // console.log(`data ${JSON.stringify(data)}`);
  const [selectedFiles, setSelectedFiles] = React.useState<FileUpload[]>([]);
  const [pendingStatus, setPendingStatus] = React.useState<boolean | null>();

  // console.log(`selectedFiles length ${JSON.stringify(selectedFiles)}`);
  const handleSelectFile = (file: FileUpload) => {
    setSelectedFiles([...selectedFiles.filter((i) => i.fieldName !== file.fieldName), file]);
  };

  const handleUploadFiles = async () => {
    // console.log(`selectedFiles ${selectedFiles}`);
    if (selectedFiles.length < 3 || selectedFiles.find((i) => !i.file)) {
      enqueueSnackbar("Vui lòng upload đủ 3 ảnh", { variant: "error" });
      return;
    }
    const success = await uploadImages(selectedFiles);
    if (success) {
      setPendingStatus(true);
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
            {loading ? (
              <VerifyBoxSkeleton title={i.title} instruction={i.instruction} />
            ) : (
              <VerifyBox
                title={i.title}
                instruction={i.instruction}
                imgDesc={i.imgDesc}
                fieldName={i.fieldName}
                handleSelectFile={handleSelectFile}
                imageUrl={data && data.status !== "FAILED" ? data[i.fieldName] : null}
              />
            )}
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }} pt={11}>
        <Typography pb={5}>Thời gian xác minh danh tính có thể kéo dài 1 - 2 ngày.</Typography>
        {loading ? (
          <Skeleton variant={"rounded"} />
        ) : pendingStatus ? (
          <VerifyStatus color={"#F7CB73"} icon={<HourglassTopIcon />} text={"Đang xử lý"} />
        ) : (
          <>
            {!data?.status && (
              <Button variant="contained" onClick={handleUploadFiles}>
                Xác minh danh tính
              </Button>
            )}
            {data?.status === "PENDING" && (
              <VerifyStatus color={"#F7CB73"} icon={<HourglassTopIcon />} text={"Đang xử lý"} />
            )}
            {data?.status === "SUCCESS" && (
              <VerifyStatus color={"#077E8C"} icon={<CheckCircleOutlineIcon />} text={"Đã xác minh"} />
            )}
            {data?.status === "FAILED" && (
              <Box display={"flex"}>
                <VerifyStatus color={"#D9512C"} icon={<ErrorOutlineIcon />} text={"Thất bại"} />
                <Button variant="contained" onClick={handleUploadFiles} sx={{ ml: 4, px: 7 }}>
                  Xác minh lại
                </Button>
              </Box>
            )}
          </>
        )}
      </Box>
    </Box>
  );
}
