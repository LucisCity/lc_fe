import * as React from 'react';
import FormControlUnstyled, {
  useFormControlUnstyledContext,
} from '@mui/base/FormControlUnstyled';
import InputUnstyled, { inputUnstyledClasses } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import clsx from 'clsx';
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const blue = {
  100: '#DAECFF',
  200: '#80BFFF',
  400: '#3399FF',
  600: '#0072E5',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const Input = styled(InputUnstyled)(
  ({ theme }) => `
  
  .${inputUnstyledClasses.input} {
    width: 320px;
    font-size: 0.875rem;
    font-family: IBM Plex Sans, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: #ECECEC;
    border: none;
    border-radius: 8px;
    padding: 12px 12px;

    &:hover {
      background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
      border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }

    &:focus {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[100]};
    }
  }
`,
);

const Label = styled(Typography)(
  ({ theme }) => ({
    color: '#504C67',
    fontWeight: 500,
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
  })
);

const HelperText = styled((props: {}) => {
  const formControlContext = useFormControlUnstyledContext();
  const [dirty, setDirty] = React.useState(false);

  React.useEffect(() => {
    if (formControlContext?.filled) {
      setDirty(true);
    }
  }, [formControlContext]);

  if (formControlContext === undefined) {
    return null;
  }

  const { required, filled } = formControlContext;
  const showRequiredError = dirty && required && !filled;

  return showRequiredError ? <p {...props}>This field is required.</p> : null;
})`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

export default function InfoForm() {
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <FormControlUnstyled defaultValue="">
            <Label>Name</Label>
            <Input />
            <HelperText />
          </FormControlUnstyled>
          <FormControlUnstyled defaultValue="">
            <Label>Name</Label>
            <Input />
            <HelperText />
          </FormControlUnstyled>
          <FormControlUnstyled defaultValue="">
            <Label>Name</Label>
            <Input />
            <HelperText />
          </FormControlUnstyled>
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControlUnstyled defaultValue="">
            <Label>Name</Label>
            <Input />
            <HelperText />
          </FormControlUnstyled>
          <FormControlUnstyled defaultValue="">
            <Label>Name</Label>
            <Input />
            <HelperText />
          </FormControlUnstyled>
        </Grid>
      </Grid>
    </form>
  );
}