import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

import { tableCellClasses } from "@mui/material/TableCell";

export default function CPUdetails({ secondaryPart }) {
  const [ramType, setRamType] = useState(null);
  const [pcieType, setpcieType] = useState(null);

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
    const handlePCIeType = () => {
      if (secondaryPart.pcieStandartEnum === 1) {
        setpcieType("x4");
      } else if (secondaryPart.pcieStandartEnum === 2) {
        setpcieType("x8");
      } else if (secondaryPart.pcieStandartEnum === 3) {
        setpcieType("x16");
      }
    };
    handleRamType();
    handlePCIeType();
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
            <TableCell>
              CPU socket: {secondaryPart.cpuSocketStandart}{" "}
            </TableCell>
            <TableCell>
              CPU socket Quantity: {secondaryPart.cpuSocketQuantity}
            </TableCell>
            <TableCell>
              m.2 ssd Socket Quantity: {secondaryPart.m2ssdSocketQuantity}
            </TableCell>
            <TableCell>
              SATA Socket Quantity: {secondaryPart.sataSocketQuantity}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>RAM Type: {ramType}</TableCell>
            <TableCell>
              RAM socket Quantity: {secondaryPart.ramSocketQuantity}
            </TableCell>
            <TableCell>
              PCIe socket quantity: {secondaryPart.pcieSocketQuantity}
            </TableCell>
            <TableCell>PCIe lanes: {pcieType}</TableCell>
          </TableRow>
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
