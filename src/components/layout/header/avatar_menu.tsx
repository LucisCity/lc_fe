import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import useMenu from "../../../hooks/use_menu";
import { Avatar, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import Link from "next/link";

interface Props {
  avatar: string | undefined;
  onLogout: () => void;
}

export default function AvatarMenu(props: Props) {
  const menu = useMenu();

  function logout() {
    menu.onClose();
    props.onLogout();
  }
  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={menu.onOpen} sx={{ p: 0 }}>
          <Avatar src={props.avatar ?? ""} />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{
          mt: "45px",
          "& .MuiPaper-root": {
            minWidth: "150px",
          },
        }}
        anchorEl={menu.anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={menu.open}
        onClose={menu.onClose}
      >
        <MenuItem onClick={menu.onClose}>
          <Link href="/profile">
            <EditIcon />
            &nbsp; Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={menu.onClose}>
          <Link href="/profile">
            <SettingsIcon />
            &nbsp; Setting
          </Link>
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={logout}>
          <Link href="/login">
            <LogoutIcon />
            &nbsp; Logout
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
}
