import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Button, Rating } from "@mui/material";
import useVote from "../../hooks/use_vote";

export default function VoteMenu() {
  const { menu, onOpenVoteMenu, value, setValue, onVote } = useVote();
  const [hoverValue, setHoverValue] = React.useState(-1);

  return (
    <React.Fragment>
      <IconButton
        onClick={onOpenVoteMenu}
        size="small"
        // sx={{ ml: 2 }}
      >
        <Box component="img" src="/assets/imgs/invest/icons/ic_star.svg" alt="" />
      </IconButton>
      <Menu
        anchorEl={menu.anchorEl}
        // id="account-menu"
        open={menu.open}
        onClose={menu.onClose}
        // onClick={menu.onClose}
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
              //   right: 14,
              left: "45%",
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
        <Box px="16px" py="8px" sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <Typography variant="h3" textAlign="center">
            {hoverValue != -1 ? hoverValue : value}
          </Typography>
          <Rating
            name="half-rating"
            defaultValue={value}
            precision={0.5}
            max={10}
            onChange={(event, newValue) => {
              console.log("newValue: ", newValue);
              setValue(newValue ?? 0);
            }}
            onChangeActive={(event, newValue) => {
              setHoverValue(newValue ?? 0);
            }}
          />
          <Typography variant="body2">[Rate] Click to rate this</Typography>
          <Box sx={{ display: "flex", gap: "8px" }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                height: "40px",
              }}
              onClick={onVote}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Menu>
    </React.Fragment>
  );
}
