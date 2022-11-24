import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = (mode: PaletteMode) =>
  createTheme({
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
            background: "#925FF0",
            borderRadius: 4,
            gap: 5,
            padding: `${theme.spacing(1)} ${theme.spacing(1)}`,
            ":hover": {
              background: "#A87FF3",
            },
          }),
        },
      },
    },
    spacing: 4,
  });

export default theme;
