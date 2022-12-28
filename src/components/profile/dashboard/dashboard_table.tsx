/* eslint-disable */
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import { table, TablePaginationActions } from "../components/table";
import useTransactionHistory from "../../../hooks/profile/use_transaction_history";
import { ReferralTableSkeleton } from "../components/referral_table_skeleton";
import { LoadingButton } from "@mui/lab";
import moment from "moment/moment";
import { TransactionStatus, TransactionType } from "../../../gql/graphql";

interface ITableData {
  id?: string;
  date?: string;
  name?: string;
  type: string;
  amount?: string;
  status: TransactionStatus;
}

const getStatusColor = (status: TransactionStatus) => {
  switch (status) {
    case TransactionStatus.Succeed:
      return "#00BE13";
    case TransactionStatus.Pending:
      return "#D67F00";
    case TransactionStatus.Failed:
      return "#FF0B0B";
    default:
      return "black";
  }
};

const typeTransaction = (type: string) => {
  switch (type) {
    case "WITHDRAW_BALANCE":
      return "Withdraw balance";
    case "CLAIM_REFERRAL":
      return "Claim referral";
    default:
      return "";
  }
};
const Row = ({ row }: { row: ITableData }) => {
  return (
    <TableRow key={row.id}>
      <TableCell style={{ width: "30%", textAlign: "left", color: "#6CCAFF" }} scope="row">
        <Typography fontWeight={400} fontSize={16}>
          {row.date}
        </Typography>
      </TableCell>
      <TableCell style={{ width: "20%", textAlign: "center", color: "#000" }} scope="row">
        <Typography fontWeight={500} fontSize={16}>
          {row.name}
        </Typography>
      </TableCell>
      <TableCell style={{ width: "20%", textAlign: "center", color: "#504C67" }} scope="row">
        <Typography fontWeight={400} fontSize={16}>
          {typeTransaction(row.type)}
        </Typography>
      </TableCell>
      <TableCell style={{ width: "15%", textAlign: "right", color: "#504C67" }} scope="row">
        <Typography fontWeight={500} fontSize={16}>
          {row.amount}
        </Typography>
      </TableCell>
      <TableCell style={{ width: "15%", textAlign: "right" }} scope="row">
        <Typography fontWeight={400} fontSize={16} color={getStatusColor(row.status)}>
          {row.status}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

interface DashboardTableProps {
  rowsPerPage: number;
}

export default function DashboardTable(props: DashboardTableProps) {
  const { rowsPerPage } = props;
  const [page, setPage] = React.useState(0);
  const { loading, listTransactionHistory, nextPage, totalRecord } = useTransactionHistory();
  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const data = React.useMemo(() => {
    return (
      listTransactionHistory?.[page]?.map((item, index) => {
        return {
          id: item.id ?? `id-${index}`,
          date: moment(item?.created_at).format("DD MMM YYYY, h:mm") ?? "--/--/--",
          name: "-------",
          type: item.type,
          amount: `$ ${item.amount}`,
          status: !item.blockchain_transaction ? TransactionStatus.Succeed : item.blockchain_transaction?.status,
        };
      }) ?? []
    );
  }, [listTransactionHistory, page]);

  const handleChangePage = async (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
    await nextPage(newPage, rowsPerPage);
  };

  return (
    <>
      <TableContainer component={Box}>
        <ThemeProvider theme={table}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableBody>
              {loading ? (
                <ReferralTableSkeleton />
              ) : data.length === 0 ? (
                <Box display={"flex"} justifyContent={"center"}>
                  <Typography>Không có dữ liệu!</Typography>
                </Box>
              ) : (
                data.map((row) => <Row key={row.id} row={row} />)
              )}
            </TableBody>
          </Table>
        </ThemeProvider>
      </TableContainer>
      <TablePagination
        component={"div"}
        rowsPerPageOptions={[rowsPerPage]}
        colSpan={3}
        count={totalRecord}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: {
            "aria-label": "rows per page",
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
