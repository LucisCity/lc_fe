import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Box } from "@mui/system";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Skeleton, Typography } from "@mui/material";
import { table } from "./table";

export const ReferralTableSkeleton = () => {
  return (
    <>
      <TableContainer component={Box}>
        <ThemeProvider theme={table}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableBody>
              {Array.from({ length: 10 }).map((row: any, index: number) => (
                <TableRow key={"referral-skeleton" + index}>
                  <TableCell style={{ width: "30%", textAlign: "left", color: "#6CCAFF" }} scope="row">
                    <Typography component={"div"} fontWeight={400} fontSize={16}>
                      <Skeleton variant="text" />
                    </Typography>
                  </TableCell>
                  <TableCell style={{ width: "30%", textAlign: "center", color: "#000000" }} scope="row">
                    <Typography component={"div"} fontWeight={500} fontSize={16}>
                      <Skeleton variant="text" />
                    </Typography>
                  </TableCell>
                  <TableCell style={{ width: "15%", textAlign: "left", color: "#504C67" }} scope="row">
                    <Typography component={"div"} fontWeight={400} fontSize={16}>
                      <Skeleton variant="text" />
                    </Typography>
                  </TableCell>
                  <TableCell style={{ width: "10%", textAlign: "right", color: "#504C67" }} scope="row">
                    <Typography component={"div"} fontWeight={500} fontSize={16}>
                      <Skeleton variant="text" />
                    </Typography>
                  </TableCell>
                  <TableCell style={{ width: "15%", textAlign: "right" }} scope="row">
                    <Typography component={"div"} fontWeight={500} fontSize={16}>
                      <Skeleton variant="text" />
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ThemeProvider>
      </TableContainer>
    </>
  );
};
