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
import moment from "moment/moment";
import { TransactionStatus } from "../../../gql/graphql";
import TransactionHistoryStore from "../../../store/transaction_history.store";
import { observer } from "mobx-react-lite";

interface ITableData {
  id?: string;
  date?: string;
  type: string;
  amount?: string;
  status: TransactionStatus;
}

const getStatusColor = (status: TransactionStatus) => {
  switch (status) {
    case TransactionStatus.Succeed:
      return "#00BE13";
    case TransactionStatus.Confirming:
      return "#D67F00";
    case TransactionStatus.Pending:
      return "#6ccaff";
    case TransactionStatus.Failed:
      return "#FF0B0B";
    default:
      return "black";
  }
};

const amountColor = (type: string) => {
  switch (type) {
    case "WITHDRAW_BALANCE":
      return "#FF0B0B";
    case "CLAIM_REFERRAL":
      return "#00BE13";
    default:
      return "";
  }
};

const statusRow = (status: TransactionStatus) => {
  switch (status) {
    case TransactionStatus.Succeed:
      return "Hoàn thành";
    case TransactionStatus.Confirming:
      return "Đang thực hiện";
    case TransactionStatus.Pending:
      return "Chờ xử lý";
    case TransactionStatus.Failed:
      return "Lỗi";
    default:
      return "Đang thực hiện";
  }
};

const typeTransaction = (type: string): "WITHDRAW" | "DEPOSIT" | "" => {
  switch (type) {
    case "WITHDRAW_BALANCE":
      return "WITHDRAW";
    case "CLAIM_REFERRAL":
      return "DEPOSIT";
    default:
      return "";
  }
};

const descriptionRow = (type: string): string => {
  switch (type) {
    case "WITHDRAW_BALANCE":
      return "Rút tiền về ví";
    case "CLAIM_REFERRAL":
      return "Nhận thưởng giới thiệu bạn bè";
    default:
      return "";
  }
};
const Row = ({ row }: { row: ITableData }) => {
  return (
    <TableRow key={row.id}>
      <TableCell style={{ width: "25%", textAlign: "left", color: "#6CCAFF" }} scope="row">
        <Typography fontWeight={400} fontSize={16}>
          {row.date}
        </Typography>
      </TableCell>
      <TableCell style={{ width: "35%", textAlign: "left", color: "#000" }} scope="row">
        <Typography fontWeight={500} fontSize={16}>
          {descriptionRow(row.type)}
        </Typography>
      </TableCell>
      <TableCell style={{ width: "10%", textAlign: "center", color: "#504C67" }} scope="row">
        <Typography fontWeight={400} fontSize={16}>
          {typeTransaction(row.type) === "WITHDRAW" ? "Rút" : "Nhận"}
        </Typography>
      </TableCell>
      <TableCell style={{ width: "10%", textAlign: "left", color: "#504C67" }} scope="row">
        <Typography fontWeight={500} fontSize={16} color={amountColor(row.type)}>
          {`${typeTransaction(row.type) === "WITHDRAW" ? "-" : "+"} $ ${row.amount}`}
        </Typography>
      </TableCell>
      <TableCell style={{ width: "20%", textAlign: "right" }} scope="row">
        <Typography fontWeight={400} fontSize={16} color={getStatusColor(row.status)}>
          {statusRow(row.status)}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

interface DashboardTableProps {
  rowsPerPage: number;
}
const DashboardTable = observer((props: DashboardTableProps) => {
  const { rowsPerPage } = props;
  const page = TransactionHistoryStore.page;
  const { loading, loadPage } = useTransactionHistory();

  const data =
    TransactionHistoryStore.transactions[page]?.map((item, index) => {
      return {
        id: item.id ?? `id-${index}`,
        date: moment(item?.created_at).format("DD/MM/YYYY, h:mm") ?? "--/--/--",
        type: item.type,
        amount: `${item.amount}`,
        status: !item.blockchain_transaction ? TransactionStatus.Succeed : item.blockchain_transaction?.status,
      };
    }) ?? [];
  const handleChangePage = async (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    TransactionHistoryStore.page = newPage;
    await loadPage(newPage, rowsPerPage);
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
                <TableCell style={{ width: "100%" }} scope="row">
                  <Box display={"flex"} justifyContent={"center"}>
                    <Typography>Không có dữ liệu!</Typography>
                  </Box>
                </TableCell>
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
        count={TransactionHistoryStore.totalRecord}
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
});

export default DashboardTable;
