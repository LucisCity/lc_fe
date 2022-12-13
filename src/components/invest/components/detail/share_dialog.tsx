import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box, Typography } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";
import { useStores } from "../../../../store";
import { useDownload } from "../../../../hooks/use_download";
import { useCopyToClipboard } from "react-use";
import { useSnackbar } from "notistack";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const QR_ID = "invest_link_qr";

export default function ShareDialog() {
  const { userStore } = useStores();
  const [open, setOpen] = React.useState(false);
  const { captureAndDownloadElement } = useDownload();
  const [_, copy] = useCopyToClipboard();
  const { enqueueSnackbar } = useSnackbar();
  const [shareLink, setShareLink] = React.useState("demo");

  React.useEffect(() => {
    setShareLink(window.location.href);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onCopy = () => {
    copy(window?.location.href ?? "");
    enqueueSnackbar("Copied", { variant: "success" });
  };

  return (
    <>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button> */}
      <Button
        variant="contained"
        endIcon={<Box component="img" src="/assets/imgs/invest/icons/ic_share.svg" alt="" />}
        onClick={handleClickOpen}
      >
        Chia sẻ
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth
        maxWidth="xs"
        aria-describedby="alert-dialog-slide-description"
      >
        {/* <DialogTitle>{"Use Google's location service?"}</DialogTitle> */}
        <DialogContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="h5" mb="20px">
            Chia sẻ mã QR code này
          </Typography>
          <Box sx={{ position: "relative", background: "red", width: "207px", height: "207px" }}>
            <QRCodeCanvas id={QR_ID} value={shareLink} size={207} />
            {!userStore.isLogedIn ? (
              <>
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: "0px",
                    left: "0px",
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.71) 24.48%, #FFFFFF 100%);",
                  }}
                />
                <Box
                  component="img"
                  src="/assets/imgs/invest/icons/ic_eye_hidden.svg"
                  sx={{
                    position: "absolute",
                    left: "45%",
                    // right: "50%",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                />
              </>
            ) : null}
          </Box>
          {!userStore.isLogedIn ? (
            <>
              <Typography variant="h5" mt="32px">
                hoặc liên kết dưới đây
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.5, mt: "6px" }}>
                https://luciscity.io/******
              </Typography>
              <Button variant="contained" sx={{ mt: "29px" }}>
                Đăng nhập
              </Button>
              <Typography variant="h5" whiteSpace="pre-line" mt="23px" textAlign="center">
                {"Yêu cầu đăng nhập \nđể nhận QR Code & liên kết giới thiệu"}
              </Typography>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                sx={{ mt: "25px" }}
                onClick={() => {
                  captureAndDownloadElement(QR_ID);
                }}
              >
                Download QR code
              </Button>
              <Typography variant="h5" mt="19px">
                hoặc liên kết dưới đây
              </Typography>
              <Typography variant="body1" color="primary" sx={{ mt: "29px" }}>
                {window?.location.href ?? ""}
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: "8px" }}
                onClick={() => {
                  onCopy();
                }}
              >
                Coppy
              </Button>
            </>
          )}
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
}
