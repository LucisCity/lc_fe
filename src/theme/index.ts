import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode: "light",
    },
  });

export default theme;
