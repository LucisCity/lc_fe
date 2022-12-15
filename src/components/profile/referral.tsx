/* eslint-disable */
import { Box, styled } from "@mui/system";
import { Button, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Divider from "@mui/material/Divider";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import LastPageIcon from "@mui/icons-material/LastPage";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import { InputUnstyled } from "@mui/base";
import { inputUnstyledClasses } from "@mui/base/InputUnstyled";

const table = createTheme({
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          border: "none",
          borderCollapse: "separate",
          borderSpacing: "0px 3px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          // border: "none",
          // borderSpacing: "0px 5px",
          padding: 13,
          background: "#fff",
          borderRadius: 2,
          borderBottom: "none",
        },
      },
    },
  },
});

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const {count, page, rowsPerPage, onPageChange} = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{flexShrink: 0, ml: 2.5}}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon/> : <FirstPageIcon/>}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon/> : <LastPageIcon/>}
      </IconButton>
    </Box>
  );
}

function createData(date: string, name: string, type: string, reward: string) {
  return {date, name, type, reward};
}

const data = [
  createData("27 Jun 2021, 00:01", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("01 May 2021, 00:02", "Guy Hawkins", "Đăng ký", "$6.48"),
  createData("10 Feb 2020, 00:05", "Cameron Williamson", "Đăng ký", "$6.48"),
  createData("01 May 2021, 00:13", "Wade Warren", "Đăng ký", "$6.48"),
  createData("27 Jun 2021, 00:02", "Cameron Williamson", "Đăng ký", "$6.48"),
  createData("27 Jun 2021, 00:03", "Cameron Williamson", "Đăng ký", "$6.48"),
  createData("01 May 2021, 00:03", "Leslie Alexander", "Đăng ký", "$6.48"),
  createData("10 Feb 2020, 00:01", "Leslie Alexander", "Đăng ký", "$6.48"),
  createData("01 May 2021, 00:04", "Leslie Alexander", "Đăng ký", "$6.48"),
  createData("27 Jun 2021, 00:04", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("27 Jun 2021, 00:05", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("01 May 2021, 00:04", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("10 Feb 2020, 00:03", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("01 May 2021, 00:01", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("27 Jun 2021, 00:06", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("27 Jun 2021, 00:07", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("01 May 2021, 00:05", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("10 Feb 2020, 00:04", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("01 May 2021, 00:02", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("27 Jun 2021, 00:07", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("27 Jun 2021, 00:09", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("01 May 2021, 00:01", "Jane Cooper", "Đăng ký", "$6.48"),
]
const CustomTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Box}>
        <ThemeProvider theme={table}>
          <Table sx={{minWidth: 500,}} aria-label="custom pagination table">
            <TableBody>
              {(rowsPerPage > 0
                  ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : data
              ).map((row) => (
                <TableRow key={row.date}>
                  <TableCell style={{width: "30%", textAlign: "left", color: "#6CCAFF"}} scope="row">
                    <Typography fontWeight={400} fontSize={16}>{row.date}</Typography>
                  </TableCell>
                  <TableCell style={{width: "25%", textAlign: "center", color: "#000000"}} scope="row">
                    <Typography fontWeight={500} fontSize={16}>{row.name}</Typography>
                  </TableCell>
                  <TableCell style={{width: "15%", textAlign: "left", color: "#504C67"}} scope="row">
                    <Typography fontWeight={400} fontSize={16}>{row.type}</Typography>
                  </TableCell>
                  <TableCell style={{width: "15%", textAlign: "right", color: "#504C67"}} scope="row">
                    <Typography fontWeight={500} fontSize={16}>{row.reward}</Typography>
                  </TableCell>
                  <TableCell style={{width: "15%", textAlign: "right"}} scope="row">
                    <Button
                      variant="contained"
                      disabled={Math.random() > 0.5}
                      sx={{textTransform: "none", background: "#6555EE"}}
                    >
                      Claim
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{height: 53 * emptyRows}}>
                  <TableCell colSpan={6}/>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ThemeProvider>
      </TableContainer>
      <TablePagination
        component={'div'}
        rowsPerPageOptions={[rowsPerPage]}
        colSpan={3}
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: {
            'aria-label': 'rows per page',
          },
          native: true,
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
    </>
  );
}

const Label = styled(Typography)(
  ({theme}) => ({
    color: '#504C67',
    fontWeight: 500,
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 7,
  })
);

interface ReferralLinkBoxProps {
  label: string;
  value: string;
}

const CustomInput = styled(InputUnstyled, {
  shouldForwardProp: (prop) => prop !== 'email',
})(({theme}) => `
  .${inputUnstyledClasses.input} {
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #504C67;
    background: #fff;
    border: none;
    border-radius: 8px;
    height: ${useMediaQuery(theme.breakpoints.up('sm')) ? '50px' : '60px'};
    padding-left: 17px;
    
    // '&:hover': {
    //   background: "white";
    //   border-color: "white";
    // }
  }
`
);


const ReferralLinkBox = (props: ReferralLinkBoxProps) => {

  return (
    <>
      <Label>{props.label}</Label>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <CustomInput
          type="text"
          sx={{width: "100%"}}
          disabled={true}
          value={props.value}
        />
        <Button variant="contained" sx={{p: 0, width: {sm: 150, xs: 60}, ml: 2, height: {sm: 50, xs: 60}}}>
          Copy link
        </Button>
      </Box>
    </>
  )
}

const linkBoxData: ReferralLinkBoxProps[] = [
  {
    label: "Link giới thiệu đăng ký",
    value: "https://luciscity.io/referral_richard/Signin/",
  },
  {
    label: "Link giới thiệu mua thẻ Galaxy Platinum",
    value: "https://luciscity.io/referral_richard/buy_card_galaxy_platinum/",
  }
]

export const ProfileReferral = () => {
  return (
    <Box mx={{sm: 10, xs: 3, fontWeight: 400}} my={8}>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "baseline"}} mb={2}>
        <Typography
          fontWeight={700}
          fontSize={{sm: 32, xs: 25}}
          textAlign={{sm: "left", xs: "center"}}
        >
          Referral
        </Typography>
      </Box>
      {linkBoxData.map((i) => (
        <ReferralLinkBox label={i.label} value={i.value} key={i.label}/>
      ))}
      <Divider
        variant="middle"
        sx={{
          my: 8,
          borderBottomWidth: 1,
          borderBottomColor: "#D9D9D9",
        }}
      />
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "baseline"}} mb={5}>
        <Typography
          variant={"h3"}
          textAlign={{sm: "left", xs: "center"}}
        >
          Danh sách Referral
        </Typography>
        <Typography fontWeight={400} color="#7A7A7A">21/2340 Referral</Typography>
      </Box>
      <CustomTable/>
    </Box>
  )
}
