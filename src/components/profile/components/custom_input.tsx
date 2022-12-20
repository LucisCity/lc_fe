import { styled } from "@mui/system";
import InputUnstyled, { inputUnstyledClasses } from "@mui/base/InputUnstyled";
import { useMediaQuery } from "@mui/material";

export const CustomInput = styled(InputUnstyled, {
  shouldForwardProp: (prop) => prop !== 'email',
})(({theme}) => `
  .${inputUnstyledClasses.input} {
    width: ${useMediaQuery(theme.breakpoints.up('sm')) ? '90%' : '100%'};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #504C67;
    background: #fff;
    border: none;
    border-radius: 8px;
    height: 50px;
    padding-left: 17px;
    
    // '&:hover': {
    //   background: "white";
    //   border-color: "white";
    // }
  }
`
);
