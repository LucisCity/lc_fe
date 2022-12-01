import { Palette } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const TYPO_THEME: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
  h3: {
    fontSize: "48px",
    fontWeight: "600",
    lineHeight: "56px",
    "@media (max-width:768px)": {
      fontSize: "30px",
      lineHeight: "43px",
    },
  },
  h5: {
    fontSize: "20px",
    fontWeight: "700",
    lineHeight: "28px",
  },
  h6: {
    fontSize: "20px",
    fontWeight: "500",
    lineHeight: "24px",
  },
  subtitle1: {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
  },
  subtitle2: {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "24px",
  },
  body1: {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "24px",
  },
  body2: {
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
  },
  caption: {
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "14px",
  },
  overline: {
    fontSize: "10px",
    fontWeight: "400",
    lineHeight: "12px",
  },
  button: {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "16px",
  },
};
