import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useEffect, useState } from "react";

import { tableCellClasses } from "@mui/material/TableCell";

export default function CPUdetails({ secondaryPart }) {
  const [ramType, setRamType] = useState(null);

  useEffect(() => {
    const handleRamType = () => {
      if (secondaryPart.ramTypeEnum === 1) {
        setRamType("DDR3");
      } else if (secondaryPart.ramTypeEnum === 2) {
        setRamType("DDR4");
      } else if (secondaryPart.ramTypeEnum === 3) {
        setRamType("DDR5");
      }
    };
    handleRamType();
  });

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
            <TableCell>Frequancy: {secondaryPart.frequancy} MHz </TableCell>
            <TableCell>Capacity: {secondaryPart.capacity} GB</TableCell>
            <TableCell>Ram Type: {ramType}</TableCell>
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
