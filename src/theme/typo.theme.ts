import { Palette } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const TYPO_THEME: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
  h1: {
    fontSize: 48,
    fontWeight: 700,
    lineHeight: "56.25px",
    // "@media (max-width:768px)": {
    //   fontSize: "30px",
    //   lineHeight: "43px",
    // },
  },
  h2: {
    fontSize: 32,
    fontWeight: 600,
    lineHeight: "37.5px",
  },
  h3: {
    fontSize: 24,
    fontWeight: 600,
    lineHeight: "28.13px",
  },
  h4: {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: "21.09px",
  },
  h5: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "28.8px",
  },
  // h6: {
  //   fontSize: "20px",
  //   fontWeight: "500",
  //   lineHeight: "24px",
  // },
  subtitle1: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "14.06px",
  },
  caption: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: "14.06px",
  },
  // subtitle2: {
  //   fontSize: "16px",
  //   fontWeight: "500",
  //   lineHeight: "24px",
  // },
  body1: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
  },
  body2: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "24px",
  },
  button: {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "28.8px",
  },
};
