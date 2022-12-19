import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { tableCellClasses } from "@mui/material/TableCell";

export default function CPUdetails({ secondaryPart }) {
  const handleRender = () => {};
  return (
    <TableContainer>
      <Table
        sx={{
          minWidth: 650,
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
          },
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Socket: {secondaryPart.socketStandart}</TableCell>
            <TableCell>Frequency: {secondaryPart.frequancy} Ghz</TableCell>
            <TableCell>Core Quantity: {secondaryPart.coreQuantity}</TableCell>
            <TableCell>Thread Count: {secondaryPart.threadQuantity}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {/* {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
