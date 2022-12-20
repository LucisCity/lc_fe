/* eslint-disable */
import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';
import { TablePaginationActions } from "../components/table";


interface DashboardTableProps {
  rowsPerPage: number;
  children: any;
}

export default function PaginatedList(props: DashboardTableProps) {
  const {rowsPerPage, children} = props;
  const [page, setPage] = React.useState(0);

  // Avoid a layout jump when reaching the last page with empty rows.

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  return (
    <>
      <>
        {(rowsPerPage > 0
            ? children.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : children
        ).map((row: any, index: number) => (
          <React.Fragment key={index}>
            {row}
          </React.Fragment>
        ))}
      </>
      <TablePagination
        component={'div'}
        rowsPerPageOptions={[rowsPerPage]}
        colSpan={3}
        count={children.length}
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