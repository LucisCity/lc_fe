import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import useMenu from "../../../hooks/use_menu";
import { Avatar, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import Link from "next/link";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { formatCurrency } from "../../../utils/number.util";

interface Props {
  avatar: string | undefined;
  username: string | undefined;
  balance: string | undefined;
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
        anchorEl={menu.anchorEl}
        // anchorOrigin={{
        //   vertical: "top",
        //   horizontal: "right",
        // }}
        // keepMounted
        // transformOrigin={{
        //   vertical: "top",
        //   horizontal: "right",
        // }}
        open={menu.open}
        onClose={menu.onClose}
        // sx={{
        //   mt: "45px",
        //   "& .MuiPaper-root": {
        //     minWidth: "150px",
        //   },
        // }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link href="/profile">
          <MenuItem>
            <Avatar src={props.avatar ?? ""} />
            <Box>
              {props.username ?? "My account"}
              <Typography component={"p"}>Số dư: {formatCurrency(props.balance ?? 0)}</Typography>
            </Box>
          </MenuItem>
        </Link>

        <Divider />
        <Link href="/profile/account">
          <MenuItem>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            Setting
          </MenuItem>
        </Link>

        <MenuItem onClick={logout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
