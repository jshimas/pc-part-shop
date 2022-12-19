import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CPUdetails from "./CPUdetails";
import { dividerClasses } from "@mui/material";
import GPUdetails from "./GPUdetails";
import CoolerDetails from "./CoolerDetails";
import MemoryDetails from "./MemoryDetails";
import MotherboardDetails from "./MotherboardDetails";
import PSUDetails from "./PSUDetails";
import RAMDetails from "./RAMDetails";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function PartDetails({ mainPart, secondaryPart }) {
  const handleRender = () => {};

  return (
    <div>
      <TableContainer>
        {/* sx={{ maxWidth: 300 }} */}
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Release Date {mainPart.releaseDate}</TableCell>
              <TableCell align="left">Price €{mainPart.price} </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Description:{mainPart.details}</TableCell>
              <TableCell>
                {mainPart.type === "cpu" && (
                  <CPUdetails secondaryPart={secondaryPart} />
                )}
                {mainPart.type === "gpu" && (
                  <GPUdetails secondaryPart={secondaryPart} />
                )}
                {mainPart.type === "ram" && (
                  <RAMDetails secondaryPart={secondaryPart} />
                )}
                {mainPart.type === "motherboard" && (
                  <MotherboardDetails secondaryPart={secondaryPart} />
                )}
                {mainPart.type === "memory" && (
                  <MemoryDetails secondaryPart={secondaryPart} />
                )}
                {mainPart.type === "cooler" && (
                  <CoolerDetails secondaryPart={secondaryPart} />
                )}
                {mainPart.type === "psu" && (
                  <GPUdetails secondaryPart={secondaryPart} />
                )}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
