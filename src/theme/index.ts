import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode: "dark",
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
  });

export default theme;
