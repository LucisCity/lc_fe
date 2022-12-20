import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Box } from "@mui/system";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Button, Typography } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import { table, TablePaginationActions } from "../components/table";


function createData(date: string, name: string, type: string, reward: string) {
  return {date, name, type, reward};
}

const data = [
  createData("27 Jun 2021, 00:01", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("01 May 2021, 00:02", "Guy Hawkins", "Đăng ký", "$6.48"),
  createData("10 Feb 2020, 00:05", "Cameron Williamson", "Đăng ký", "$6.48"),
  createData("01 May 2021, 00:13", "Wade Warren", "Đăng ký", "$6.48"),
  createData("27 Jun 2001, 00:02", "Cameron Williamson", "Đăng ký", "$6.48"),
  createData("27 Jun 2002, 00:03", "Cameron Williamson", "Đăng ký", "$6.48"),
  createData("01 May 2003, 00:03", "Leslie Alexander", "Đăng ký", "$6.48"),
  createData("10 Feb 2020, 00:01", "Leslie Alexander", "Đăng ký", "$6.48"),
  createData("01 May 2004, 00:04", "Leslie Alexander", "Đăng ký", "$6.48"),
  createData("27 Jun 2005, 00:04", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("27 Jun 2006, 00:05", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("01 May 2007, 00:04", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("10 Feb 2020, 00:03", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("01 May 2008, 00:01", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("27 Jun 2009, 00:06", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("27 Jun 2002, 00:07", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("01 May 2010, 00:05", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("10 Feb 2020, 00:04", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("01 May 2010, 00:02", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("27 Jun 2011, 00:07", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("27 Jun 2012, 00:09", "Jane Cooper", "Đăng ký", "$6.48"),
  createData("01 May 2013, 00:01", "Jane Cooper", "Đăng ký", "$6.48"),
]

interface ReferralTableProps {
  rowsPerPage: number;
}

export const ReferralTable = (props: ReferralTableProps) => {
  const {rowsPerPage} = props;

  const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  // const handleChangeRowsPerPage = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

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
                  <TableCell style={{width: "30%", textAlign: "center", color: "#000000"}} scope="row">
                    <Typography fontWeight={500} fontSize={16}>{row.name}</Typography>
                  </TableCell>
                  <TableCell style={{width: "15%", textAlign: "left", color: "#504C67"}} scope="row">
                    <Typography fontWeight={400} fontSize={16}>{row.type}</Typography>
                  </TableCell>
                  <TableCell style={{width: "10%", textAlign: "right", color: "#504C67"}} scope="row">
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
        // onRowsPerPageChange={handleChangeRowsPerPage}
        ActionsComponent={TablePaginationActions}
      />
    </>
  );
}