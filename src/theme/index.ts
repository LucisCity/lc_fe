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
        sm: 769,
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
            height: 50,
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
            [theme.breakpoints.down("lg")]: {
              height: 40,
              fontSize: 14,
              padding: `${theme.spacing(3)} ${theme.spacing(8)}`,
            },
            // [theme.breakpoints.down("md")]: {
            //   height: 40,
            //   fontSize: 14,
            //   padding: `${theme.spacing(3)} ${theme.spacing(8)}`,
            // },
          }),
          outlinedPrimary: ({ theme }) => ({
            // fontWeight: 500,
            // fontStyle: "normal",
            // fontSize: "16px",
            // lineHeight: "100%",
            textTransform: "none",
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

      MuiBottomNavigation: {
        styleOverrides: {
          root: {
            backgroundColor: 'rgb(255 255 255 / 50%)',
            backdropFilter: 'blur(2px)',
            borderTop: '1px solid #ffffff3b',
          }
        }
      },
      MuiBottomNavigationAction: {
        styleOverrides: {
          root: {
            color: "#292D32",
            "&.Mui-selected": {
              color: "#6555EE",
            }
          },
          label: {
            fontSize: 12,
            "&.Mui-selected": {
              fontSize: 12,
            }
          },
        }
      }
    },
    typography: TYPO_THEME,
    spacing: 4,
  });

export default theme;
