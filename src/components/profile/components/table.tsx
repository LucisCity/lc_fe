/* eslint-disable */
import * as React from 'react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Typography } from "@mui/material";

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

function createData(date: string, estate: string, count: string, price: string, status: string) {
  return {date, estate, count, price, status};
}

// const rows = [
//   createData('27 Jun 2021, 00:00', 'VincomBaTrieu', '234/10.000', '$202.87', 'Done'),
//   createData('01 May 2021, 00:00', 'Novaland', '454/10.000', '$576.28', 'Pending'),
//   createData('19 Apr 2021, 00:00', 'Phú Nhuận', '648/10.000', '$450.54', 'Fail'),
// ]//.sort((a, b) => (a.calories < b.calories ? -1 : 1));

const rows =
  [
    {
      "date": "27 Dec 1979, 10:45",
      "estate": "Springdale",
      "count": "859/10.000",
      "price": "$3,941.28",
      "status": "Fail"
    },
    {
      "date": "29 Aug 1971, 5:11",
      "estate": "Winfred",
      "count": "446/10.000",
      "price": "$2,503.85",
      "status": "Pending"
    },
    {
      "date": "23 Nov  2008, 1:57",
      "estate": "Broadlands",
      "count": "617/10.000",
      "price": "$3,415.76",
      "status": "Fail"
    },
    {
      "date": "14 Mar 2010, 12:41",
      "estate": "Delco",
      "count": "517/10.000",
      "price": "$1,564.90",
      "status": "Pending"
    },
    {
      "date": "6 Jun 2005, 18:3",
      "estate": "Bridgetown",
      "count": "568/10.000",
      "price": "$2,172.79",
      "status": "Done"
    },
    {
      "date": "18 Mar 1989, 8:25",
      "estate": "Cazadero",
      "count": "743/10.000",
      "price": "$1,163.84",
      "status": "Done"
    },
    {
      "date": "23 Jul 1987, 5:9",
      "estate": "Graball",
      "count": "434/10.000",
      "price": "$2,756.53",
      "status": "Pending"
    },
    {
      "date": "3 Oct  1987, 0:6",
      "estate": "Valle",
      "count": "281/10.000",
      "price": "$1,419.82",
      "status": "Pending"
    },
    {
      "date": "15 Sep  1998, 21:21",
      "estate": "Darbydale",
      "count": "640/10.000",
      "price": "$2,417.73",
      "status": "Pending"
    },
    {
      "date": "25 Sep  1990, 21:12",
      "estate": "Rew",
      "count": "890/10.000",
      "price": "$3,179.90",
      "status": "Fail"
    },
    {
      "date": "17 Apr 2018, 23:48",
      "estate": "Ferney",
      "count": "776/10.000",
      "price": "$2,281.13",
      "status": "Pending"
    },
    {
      "date": "13 Mar 2016, 11:5",
      "estate": "Edgar",
      "count": "396/10.000",
      "price": "$3,497.45",
      "status": "Done"
    },
    {
      "date": "14 May 2016, 15:45",
      "estate": "Utting",
      "count": "352/10.000",
      "price": "$1,509.29",
      "status": "Done"
    },
    {
      "date": "25 Mar 1987, 19:14",
      "estate": "Bluffview",
      "count": "347/10.000",
      "price": "$2,610.25",
      "status": "Done"
    },
    {
      "date": "8 Aug 1997, 22:37",
      "estate": "Cornfields",
      "count": "348/10.000",
      "price": "$3,600.10",
      "status": "Done"
    },
    {
      "date": "12 Apr 2013, 0:21",
      "estate": "Bergoo",
      "count": "220/10.000",
      "price": "$2,319.76",
      "status": "Pending"
    },
    {
      "date": "19 Nov  1970, 4:25",
      "estate": "Salix",
      "count": "922/10.000",
      "price": "$3,808.58",
      "status": "Pending"
    },
    {
      "date": "11 Mar 1970, 12:54",
      "estate": "Croom",
      "count": "436/10.000",
      "price": "$3,699.97",
      "status": "Done"
    },
    {
      "date": "17 Sep  1972, 19:4",
      "estate": "Carrsville",
      "count": "418/10.000",
      "price": "$3,320.41",
      "status": "Pending"
    },
    {
      "date": "15 Aug 1970, 11:24",
      "estate": "Efland",
      "count": "374/10.000",
      "price": "$3,571.11",
      "status": "Done"
    },
    {
      "date": "9 Nov  2006, 6:38",
      "estate": "Brandywine",
      "count": "867/10.000",
      "price": "$1,159.65",
      "status": "Fail"
    },
    {
      "date": "19 Mar 1988, 12:50",
      "estate": "Stockwell",
      "count": "390/10.000",
      "price": "$1,792.57",
      "status": "Done"
    },
    {
      "date": "27 Nov  1986, 17:49",
      "estate": "Whitestone",
      "count": "756/10.000",
      "price": "$2,750.14",
      "status": "Pending"
    },
    {
      "date": "28 Aug 2021, 16:38",
      "estate": "Roeville",
      "count": "166/10.000",
      "price": "$1,220.07",
      "status": "Pending"
    },
    {
      "date": "6 May 2006, 12:9",
      "estate": "Smeltertown",
      "count": "416/10.000",
      "price": "$2,128.36",
      "status": "Fail"
    },
    {
      "date": "7 Apr 1996, 21:22",
      "estate": "Whitewater",
      "count": "919/10.000",
      "price": "$3,616.30",
      "status": "Pending"
    },
    {
      "date": "23 Aug 2012, 23:2",
      "estate": "Urbana",
      "count": "294/10.000",
      "price": "$1,456.69",
      "status": "Done"
    },
    {
      "date": "29 Feb 2006, 14:46",
      "estate": "Delshire",
      "count": "794/10.000",
      "price": "$1,939.01",
      "status": "Pending"
    },
    {
      "date": "31 Feb 2013, 17:1",
      "estate": "Taft",
      "count": "704/10.000",
      "price": "$3,963.09",
      "status": "Fail"
    },
    {
      "date": "5 Oct  2015, 7:8",
      "estate": "Twilight",
      "count": "669/10.000",
      "price": "$1,609.26",
      "status": "Fail"
    },
    {
      "date": "13 Feb 2016, 20:24",
      "estate": "Hillsboro",
      "count": "271/10.000",
      "price": "$1,590.17",
      "status": "Pending"
    },
    {
      "date": "3 Apr 2020, 22:51",
      "estate": "Indio",
      "count": "821/10.000",
      "price": "$2,876.72",
      "status": "Done"
    },
    {
      "date": "1 Nov  1993, 12:38",
      "estate": "Dahlen",
      "count": "268/10.000",
      "price": "$1,533.38",
      "status": "Fail"
    },
    {
      "date": "20 Mar 2009, 19:13",
      "estate": "Kaka",
      "count": "451/10.000",
      "price": "$1,066.99",
      "status": "Pending"
    },
    {
      "date": "1 May 1984, 8:6",
      "estate": "Garberville",
      "count": "994/10.000",
      "price": "$1,359.55",
      "status": "Done"
    },
    {
      "date": "26 Jul 1995, 21:45",
      "estate": "Barclay",
      "count": "965/10.000",
      "price": "$2,067.40",
      "status": "Done"
    },
    {
      "date": "26 Apr 1997, 5:55",
      "estate": "Dellview",
      "count": "232/10.000",
      "price": "$1,891.67",
      "status": "Done"
    },
    {
      "date": "25 Sep  1985, 1:54",
      "estate": "Castleton",
      "count": "340/10.000",
      "price": "$3,910.28",
      "status": "Fail"
    },
    {
      "date": "18 May 1984, 9:18",
      "estate": "Sidman",
      "count": "203/10.000",
      "price": "$3,505.75",
      "status": "Pending"
    },
    {
      "date": "13 Jul 2003, 4:0",
      "estate": "Hiko",
      "count": "387/10.000",
      "price": "$2,318.84",
      "status": "Done"
    }
  ];
export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Done":
        return "#43F0C7";
      case "Pending":
        return "#F8BC63";

      case "Fail":
        return "#FF6CC4";
      default:
        return "black";
    }
  }

  return (
    <>
      <TableContainer component={Box}>
        <ThemeProvider theme={table}>
          <Table sx={{minWidth: 500,}} aria-label="custom pagination table">
            <TableBody>
              {(rowsPerPage > 0
                  ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : rows
              ).map((row) => (
                // <Paper sx={{my: 0.15, borderRadius: 2,}} elevation={0}>
                <TableRow key={row.date}>
                  <TableCell style={{width: 200, textAlign: "left", color: "#6CCAFF"}} scope="row">
                    <Typography fontWeight={400} fontSize={16}>{row.date}</Typography>
                  </TableCell>
                  <TableCell style={{width: 100, textAlign: "center", color: "#000000"}} scope="row">
                    <Typography fontWeight={500} fontSize={16}>{row.estate}</Typography>
                  </TableCell>
                  <TableCell style={{width: 100, textAlign: "right", color: "#504C67"}} scope="row">
                    <Typography fontWeight={400} fontSize={16}>{row.count}</Typography>
                  </TableCell>
                  <TableCell style={{width: 100, textAlign: "right", color: "#504C67"}} scope="row">
                    <Typography fontWeight={500} fontSize={16}>{row.price}</Typography>
                  </TableCell>
                  <TableCell style={{width: 100, textAlign: "right"}} scope="row">
                    <Typography fontWeight={400} fontSize={16}
                                color={getStatusColor(row.status)}>{row.status}</Typography>
                  </TableCell>
                </TableRow>
                // </Paper>
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
        rowsPerPageOptions={[10]}
        colSpan={3}
        count={rows.length}
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