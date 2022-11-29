import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function FabButton() {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "103px",
        right: "53px",
      }}
    >
      <Box>
        <Box component="img" src="/assets/imgs/landing/ic_zalo.svg" />
        <Box component="img" src="/assets/imgs/landing/ic_discoard.svg" />
        {/* //tele -fb */}
      </Box>
      <Fab
        sx={{
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(3px)",
          color: "primary" as "primary",
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}
