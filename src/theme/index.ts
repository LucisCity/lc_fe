import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { TYPO_THEME } from "./typo.theme";

// Create a theme instance.
const theme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      text: {
        primary: "#504C67",
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 768,
        md: 1024,
        lg: 1200,
        xl: 1440,
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          containedPrimary: ({ theme }) => ({
            background: "#6555EE",
            borderRadius: 8,
            gap: 8,
            padding: `${theme.spacing(4)} ${theme.spacing(10)}`,
            fontWeight: 500,
            fontStyle: "normal",
            fontSize: 16,
            lineHeight: "100%",
            textTransform: "none",
            ":hover": {
              background: "#5946FF",
            },
          }),
        },
      },

      // container
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: "24px !important",
            paddingRight: "24px !important",
          },
        },
      },
    },
    typography: TYPO_THEME,
    spacing: 4,
  });

export default theme;
