import * as React from 'react';
import FormControlUnstyled from '@mui/base/FormControlUnstyled';
import InputUnstyled, { inputUnstyledClasses } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import Grid from "@mui/material/Grid";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";


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

const Input = styled(InputUnstyled, {
  shouldForwardProp: (prop) => prop !== 'email',
})<{ email?: boolean }>(({email, theme}) => `
  .${inputUnstyledClasses.input} {
    width: ${useMediaQuery(theme.breakpoints.up('sm')) ? '90%' : '100%'};
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    color: ${email ? '#787494' : '#504C67'};
    background: ${email ? '#504C67' : '#ECECEC'};
    border: none;
    border-radius: 8px;
    height: 50px;
    // padding: 12px 12px;
    padding-left: 17px;
    

    // '&:hover': {
    //   background: ${theme.palette.mode === 'dark' ? '' : grey[100]};
    //   border-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    // }
  }
`
);

// const CustomInput = React.forwardRef(function CustomInput(
//   props: InputUnstyledProps,
//   ref: React.ForwardedRef<HTMLDivElement>,
// ) {
//   return (
//     <InputUnstyled slots={{input: Input}} {...props} ref={ref}/>
//   );
// });


const Label = styled(Typography)(
  ({theme}) => ({
    color: '#504C67',
    fontWeight: 500,
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 7,
  })
);

interface labelWithIndex {
  idx: number;
  value: string;
}

const labels: labelWithIndex[] = [
  {
    idx: 0,
    value: 'Tên'
  },
  {
    idx: 1,
    value: 'Họ'
  },
  {
    idx: 2,
    value: 'Nickname'
  },
  {
    idx: 3,
    value: 'Ngày sinh'
  },
  {
    idx: 4,
    value: 'Email'
  }
];

const data = [
  'Richards',
  'Ethers',
  'Richards_998',
  '24 May, 2020',
  'estherrichards_998@example.com',
]

export default function InfoForm() {

  return (
    <form>
      <Grid container spacing={2}>
        {labels.map((label) => {
          return (
            <Grid item key={label.idx} sm={label.value === 'Email' ? 7 : 6} xs={12}>
              <FormControlUnstyled defaultValue={data[label.idx]} disabled={label.value == 'Email'}>
                <Label>{label.value}</Label>
                {label.value === 'Email' ?
                  <Input disabled={true} email={true}/> :
                  <Input/>}
              </FormControlUnstyled>
            </Grid>
          )
        })}
      </Grid>
      <Box mt={15} display={"flex"} justifyContent={"center"}>
        <Button
          variant="contained"
        >
          <Typography variant={"h5"}>
            Cập nhật thông tin
          </Typography>
        </Button>
      </Box>
    </form>
  );
}