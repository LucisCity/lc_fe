import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box, DialogActions, DialogTitle, IconButton, Typography } from "@mui/material";
import SvgIcon from "../../common/svg_icon";
import { useFileInput } from "../../../hooks/use_file_input";
import CloseIcon from "@mui/icons-material/Close";
import { useUploadAvatar } from "../hooks/use_upload_avatar";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ChangeAvatarDialog = () => {
  // const { userStore } = useStores();
  const { selectedFile, setSelectedFile, onSelectFile, preview } = useFileInput();
  const [open, setOpen] = React.useState(false);
  const { uploadImages } = useUploadAvatar();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // console.log(selectedFile);
    uploadImages({ fieldName: "avatar", file: selectedFile });
    setSelectedFile(null);
    setOpen(false);
  };

  const handleCancel = () => {
    setSelectedFile(null);
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="text"
        onClick={handleClickOpen}
        sx={{ textTransform: "none", color: "#fff", "&:hover": { background: "rgba(0,0,0,.5)" }, fontSize: 13, p: 0 }}
      >
        Thay đổi
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth
        maxWidth="xs"
        aria-describedby="alert-dialog-slide-description"
        sx={{
          // overFlow: "hidden",
          ".MuiPaper-root": { height: 320, overflowY: "unset" },
        }}
      >
        <DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0, overflowY: "unset", mt: 5 }}>
          <Button
            sx={{
              textTransform: "none",
              width: 180,
              m: "0 auto",
              aspectRatio: "1/1",
              borderRadius: 100,
              display: "flex",
              alignItems: "center",
              background: "#f3f3f3",
              cursor: "pointer",
              position: "relative",
            }}
          >
            {selectedFile && (
              <img
                src={preview}
                style={{ position: "absolute", width: "100%", height: "100%", borderRadius: 160 }}
                alt={"avatar upload"}
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
              <input type="file" onChange={onSelectFile} accept="image/png, image/jpeg, image/jpeg, image/gif" />
            </label>
            <Box
              pt={2}
              m={"0 auto"}
              width={"50%"}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "stretch",
                border: "1px dashed #626262",
                borderRadius: 400,
              }}
            >
              <Box mr={1}>
                <SvgIcon src="/assets/imgs/icon/document_upload.svg" />
              </Box>
              <Typography fontSize={13} color={"#000"}>
                Upload
              </Typography>
            </Box>
          </Button>
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "center", mb: 2, mt: 4 }}>
          <Button variant={"contained"} sx={{ background: "#009944", px: 7 }} onClick={handleSave}>
            Lưu
          </Button>
          <Button variant={"contained"} sx={{ background: "#cf000f", px: 7 }} onClick={handleCancel}>
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
