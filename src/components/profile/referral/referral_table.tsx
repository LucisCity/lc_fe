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
import UserStore from "../../../store/user.store";
import useReferral from "../../../hooks/profile/use_referral";
import moment from "moment";
import { ReferralType } from "../../../gql/graphql";
import { ReferralTableSkeleton } from "../components/referral_table_skeleton";

interface ITableData {
  date: string;
  name: string;
  type: string;
  reward: string;
  isClaim: boolean;
}

interface ReferralTableProps {
  rowsPerPage: number;
}

export const ReferralTable = (props: ReferralTableProps) => {
  const { rowsPerPage } = props;
  const { user } = UserStore;
  const [page, setPage] = React.useState(0);
  const { listReferralUser, loading } = useReferral({ userId: user?.id });
  const data = React.useMemo(() => {
    return (
      listReferralUser?.map((item) => {
        return {
          date: moment(item.referral_log?.created_at).format("DD MMM YYYY, h:mm"),
          name: item.profile?.user_name ?? item.email,
          type: item.referral_log?.type === ReferralType.Register ? "Đăng ký" : "Mua thẻ",
          reward: "--",
          isClaim: item.referral_log?.isClaim ?? true,
        };
      }) ?? []
    );
  }, [listReferralUser]);

  // const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = React.useMemo(
    () => (page > 0 ? Math.max(0, (1 + page) * rowsPerPage - (data?.length ?? 0)) : 0),
    [page, rowsPerPage, data.length],
  );

  const dataEachPage = React.useMemo(
    () => data?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, data],
  );

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <TableContainer component={Box}>
        <ThemeProvider theme={table}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableBody>
              {loading ? (
                <ReferralTableSkeleton />
              ) : dataEachPage.length === 0 ? (
                <Box display={"flex"} justifyContent={"center"}>
                  <Typography>Không có dữ liệu!</Typography>
                </Box>
              ) : (
                dataEachPage.map((row) => (
                  <TableRow key={row.date}>
                    <TableCell style={{ width: "30%", textAlign: "left", color: "#6CCAFF" }} scope="row">
                      <Typography fontWeight={400} fontSize={16}>
                        {row.date}
                      </Typography>
                    </TableCell>
                    <TableCell style={{ width: "30%", textAlign: "center", color: "#000000" }} scope="row">
                      <Typography fontWeight={500} fontSize={16}>
                        {row.name}
                      </Typography>
                    </TableCell>
                    <TableCell style={{ width: "15%", textAlign: "left", color: "#504C67" }} scope="row">
                      <Typography fontWeight={400} fontSize={16}>
                        {row.type}
                      </Typography>
                    </TableCell>
                    <TableCell style={{ width: "10%", textAlign: "right", color: "#504C67" }} scope="row">
                      <Typography fontWeight={500} fontSize={16}>
                        {row.reward}
                      </Typography>
                    </TableCell>
                    <TableCell style={{ width: "15%", textAlign: "right" }} scope="row">
                      <Button
                        variant="contained"
                        disabled={row.isClaim}
                        sx={{ textTransform: "none", background: "#6555EE" }}
                      >
                        Claim
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </ThemeProvider>
      </TableContainer>
      <TablePagination
        component={"div"}
        rowsPerPageOptions={[rowsPerPage]}
        colSpan={3}
        count={data?.length ?? 0}
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
};
