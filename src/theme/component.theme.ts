import { Components, Theme } from "@mui/material";
import { SelectIcon } from "../components/icons/select_icon";

export const COMPONENT_THEME: Components<Omit<Theme, "components">> = {
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
        textTransform: "none",
        ":hover": {
          background: "#5946FF",
        },
        [theme.breakpoints.down("sm")]: {
          height: 40,
          fontSize: 14,
          padding: `${theme.spacing(2)} ${theme.spacing(6)}`,
        },
        [theme.breakpoints.down("lg")]: {
          height: 40,
          fontSize: 14,
          padding: `${theme.spacing(3)} ${theme.spacing(8)}`,
        },
      }),

      containedSecondary: ({ theme }) => ({
        background: "#fff",
        color: theme.palette.text.primary,
        borderRadius: 8,
        height: 50,
        gap: 8,
        padding: `${theme.spacing(4)} ${theme.spacing(10)}`,
        fontWeight: 500,
        textTransform: "none",
        ":hover": {
          background: "#fff",
        },
        [theme.breakpoints.down("sm")]: {
          height: 40,
          fontSize: 14,
          padding: `${theme.spacing(2)} ${theme.spacing(6)}`,
        },
        [theme.breakpoints.down("lg")]: {
          height: 40,
          fontSize: 14,
          padding: `${theme.spacing(3)} ${theme.spacing(8)}`,
        },
      }),
      outlinedPrimary: ({ theme }) => ({
        textTransform: "none",
        height: 50,
        background: "#fff",
        border: "1px solid #6555EE",
        borderRadius: 8,
        gap: 8,
        padding: `${theme.spacing(4)} ${theme.spacing(10)}`,
        ":hover": {
          background: "rgba(255,255,255,0.6)",
        },
        [theme.breakpoints.down("sm")]: {
          height: 40,
          fontSize: 14,
          padding: `${theme.spacing(2)} ${theme.spacing(6)}`,
        },
        [theme.breakpoints.down("lg")]: {
          height: 40,
          fontSize: 14,
          padding: `${theme.spacing(3)} ${theme.spacing(8)}`,
        },
      }),
      textSecondary: ({ theme }) => ({
        textTransform: "none",
        height: 50,
        borderRadius: 8,
        color: theme.palette.text.primary,
        fontSize: 18,
        padding: theme.spacing(4),
        [theme.breakpoints.down("sm")]: {
          height: 40,
          fontSize: 14,
          padding: `${theme.spacing(2)} ${theme.spacing(6)}`,
        },
        [theme.breakpoints.down("lg")]: {
          height: 40,
          fontSize: 14,
          padding: `${theme.spacing(3)} ${theme.spacing(8)}`,
        },
      }),
    },
  },
  MuiSelect: {
    defaultProps: {
      IconComponent: (props) => SelectIcon(props),
    },
    styleOverrides: {
      icon: ({ theme }) => ({
        transition: (theme.transitions as any).create(["all"]),
      }),
    },
  },
  MuiFilledInput: {
    defaultProps: {
      disableUnderline: true,
      hiddenLabel: true,
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: 8,
        fontSize: theme.typography.caption.fontSize,
        padding: `${theme.spacing(4)} ${theme.spacing(5)}`,
        background: "rgba(255, 255, 255)",
        border: `1px solid transparent`,
        "&.Mui-focused": {
          backgroundColor: "rgba(255, 255, 255)",
          border: `1px solid ${theme.palette.primary.main} !important`,
        },
        ":hover": {
          background: "rgba(255, 255, 255)",
        },
      }),
      colorSecondary: {
        background: "rgba(101, 85, 238, 1)",
        color: "#fff",
        "&.Mui-focused": {
          backgroundColor: "rgba(101, 85, 238, 1)",
        },
        ":hover": {
          background: "rgba(101, 85, 238, 1)",
        },
      },
      input: ({ theme }) => ({
        // padding: 0,
        padding: `${theme.spacing(3)} 0`,
      }),
      inputMultiline: {
        padding: 0,
      },
    },
  },

  // MuiAutocomplete: {
  //   styleOverrides: {
  //     popper: {
  //       width: "auto !important",
  //     },
  //   },
  // },
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
        // backgroundColor: "rgb(255 255 255 / 50%)",
        // backdropFilter: "blur(2px)",
        background: "linear-gradient(108.58deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 119.12%)",
        backdropFilter: "blur(12px)",
        borderTop: "1px solid #ffffff3b",
      },
    },
  },
  MuiBottomNavigationAction: {
    styleOverrides: {
      root: {
        color: "#292D32",
        "&.Mui-selected": {
          color: "#6555EE",
        },
      },
      label: {
        fontSize: 12,
        "&.Mui-selected": {
          fontSize: 12,
        },
      },
    },
  },
};
