import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Box } from "@mui/system";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Typography } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import { table, TablePaginationActions } from "../components/table";
import useReferral from "../../../hooks/profile/use_referral";
import moment from "moment";
import { ReferralType } from "../../../gql/graphql";
import { ReferralTableSkeleton } from "../components/referral_table_skeleton";
import { LoadingButton } from "@mui/lab";

interface ITableData {
  id: string;
  date: string;
  name: string;
  type: string;
  reward: string;
  isClaim: boolean;
}

interface ReferralTableProps {
  rowsPerPage: number;
}

const Row = ({
  row,
  claimReferralHandle,
}: {
  row: ITableData;
  claimReferralHandle: (inviteeId?: string) => Promise<void>;
}) => {
  const [loading, setLoading] = React.useState(false);

  const handleClick = async (inviteeId?: string) => {
    try {
      setLoading(true);
      await claimReferralHandle(inviteeId);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };
  return (
    <TableRow key={row.id}>
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
        <LoadingButton
          variant="contained"
          disabled={row.isClaim}
          sx={{ textTransform: "none", background: "#6555EE" }}
          onClick={() => handleClick(row.id)}
          loading={loading}
        >
          Claim
        </LoadingButton>
      </TableCell>
    </TableRow>
  );
};
export const ReferralTable = (props: ReferralTableProps) => {
  const { rowsPerPage } = props;
  const [page, setPage] = React.useState(0);
  const { listReferralUser, loading, claimReferral, setListReferralUser } = useReferral();
  const data = React.useMemo(() => {
    return (
      listReferralUser?.map((item, index) => {
        return {
          id: item.referral_log?.user_id ?? `id-${index}`,
          date: moment(item.referral_log?.created_at).format("DD MMM YYYY, h:mm") ?? "--/--/--",
          name: item.profile?.user_name ?? item.email ?? "no-email",
          type: item.referral_log?.type === ReferralType.Register ? "Đăng ký" : "Mua thẻ",
          reward: `$ ${item.reward}`,
          isClaim: item.referral_log?.is_claim ?? true,
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

  const claimReferralHandle = async (inviteeId?: string) => {
    try {
      await claimReferral({
        variables: {
          inviteeId,
        },
      });
      // update isClaim local
      setListReferralUser(
        listReferralUser.map((item) => {
          if (item.referral_log && item.referral_log.user_id === inviteeId) {
            return {
              ...item,
              // eslint-disable-next-line camelcase
              referral_log: {
                ...item.referral_log,
                isClaim: true,
              },
            };
          }
          return item;
        }),
      );
    } catch (e) {}
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
                dataEachPage.map((row) => <Row key={row.id} row={row} claimReferralHandle={claimReferralHandle} />)
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
