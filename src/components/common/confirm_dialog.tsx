import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useModal } from "../../hooks/use_modal";
import { DialogContentText, Typography } from "@mui/material";

export interface IProps {
  children?: any;
  content?: string;
  isOpen: boolean;
  action?: string[];
  title?: string;
  onClose: (accept?: boolean) => void;
}

export default function ConfirmDialog(props: IProps) {
  const actions = props.action ?? ["Ok", "Cancel"];

  return (
    <Dialog
      sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
      maxWidth="xs"
      //   TransitionProps={{ onEntering: handleEntering }}
      open={props.isOpen}
    >
      {props.title ? <DialogTitle>{props.title}</DialogTitle> : null}
      <DialogContent dividers>
        {props.content ? <DialogContentText>{props.content}</DialogContentText> : null}
        {props.children}
      </DialogContent>
      <DialogActions>
        {actions.map((item, idx) => (
          <Button
            key={`dialog_btn_item` + idx}
            // autoFocus
            onClick={() => {
              props.onClose(idx === 0);
            }}
          >
            {item}
          </Button>
        ))}
      </DialogActions>
    </Dialog>
  );
}
