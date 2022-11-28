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
            background: "#6555EE",
            borderRadius: 8,
            gap: 8,
            padding: `${theme.spacing(4)} ${theme.spacing(10)}`,
            fontWeight: 500,
            fontSize: 16,
            lineHeight: "100%",
            textTransform: "none",
            ":hover": {
              background: "#5946FF",
            },
          }),
        },
      },
    },
    spacing: 4,
  });

export default theme;
