import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box, Typography } from "@mui/material";
import { QrReader } from "react-qr-reader";
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

export default function QRReaderDialog() {
  // const { userStore } = useStores();
  const [open, setOpen] = React.useState(false);
  const [result, setResult] = React.useState("No result");
  const [_, copy] = useCopyToClipboard();
  const { enqueueSnackbar } = useSnackbar();
  const browserHasCamera = React.useRef(false);

  const handleClickOpen = async () => {
    await navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then(() => {
        browserHasCamera.current = true;
      })
      .catch(() => {
        browserHasCamera.current = false;
      })
      .finally(() => {
        setOpen(true);
      });
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onCopy = () => {
    copy(result);
    enqueueSnackbar("Copied", { variant: "success" });
  };

  // console.log(browserHasCamera.current);

  return (
    <>
      <Button
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            px: 4,
          },
        })}
        variant={"contained"}
        endIcon={<Box component={"img"} src={"/assets/imgs/member/scan-qr.svg"} />}
        onClick={handleClickOpen}
      >
        Scan QR code
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
        <DialogContent sx={{ display: open ? "flex" : "none", flexDirection: "column", alignItems: "center" }}>
          {browserHasCamera.current ? (
            <>
              <Typography variant="h5" mb="20px">
                Quét mã QR
              </Typography>
              <QrReader
                onResult={(result, error) => {
                  if (!!result) {
                    setResult(result?.getText());
                  }

                  if (!!error) {
                    console.info(error);
                  }
                }}
                constraints={{ facingMode: "environment" }}
                containerStyle={{ width: "100%" }}
                videoContainerStyle={{ width: "100%" }}
                videoStyle={{ width: "100%" }}
              />
              <Typography variant="h5" my="20px">
                {result}
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: "8px" }}
                onClick={() => {
                  onCopy();
                }}
              >
                Copy
              </Button>
            </>
          ) : (
            <Typography variant={"h4"}>
              Thiết bị của bạn không hỗ trợ quét QR, vui lòng chuyển sang thiết bị có camera để trải nghiệm chức năng
              này
            </Typography>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
