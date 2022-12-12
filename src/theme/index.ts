import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { TYPO_THEME } from "./typo.theme";
import { COMPONENT_THEME } from "./component.theme";

// Create a theme instance.
const theme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      primary: {
        main: "#5946FF",
      },
      text: {
        primary: "#504C67",
        secondary: "#737373",
      },
      success: {
        main: "#00DA57",
        contrastText: "white",
      },
      background: {
        default: "#F3F8FF",
        // paper: "#F3F8FF", //F8F8F8
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 769,
        md: 1024,
        lg: 1200,
        xl: 1440,
      },
    },
    components: COMPONENT_THEME,
    typography: TYPO_THEME,
    spacing: 4,
  });

export default theme;
