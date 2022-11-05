import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export default function ShoppingCartTable({ items }) {
  const navigate = useNavigate();

  return (
    <TableContainer>
      <Table aria-label="parts table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                width: "20%",
                fontWeight: "bold",
                fontSize: "medium",
                textTransform: "uppercase",
              }}
            >
              Name
            </TableCell>
            <TableCell
              align="right"
              sx={{
                width: "15%",
                fontWeight: "bold",
                fontSize: "medium",
                textTransform: "uppercase",
              }}
            >
              Manufacturer
            </TableCell>
            <TableCell
              align="right"
              sx={{
                fontWeight: "bold",
                fontSize: "medium",
                textTransform: "uppercase",
              }}
            >
              Release Date
            </TableCell>
            <TableCell
              align="right"
              sx={{
                fontWeight: "bold",
                fontSize: "medium",
                textTransform: "uppercase",
              }}
            >
              Price
            </TableCell>
            <TableCell
              align="center"
              sx={{
                width: "15%",
                fontWeight: "bold",
                fontSize: "medium",
                textTransform: "uppercase",
              }}
            >
              Amount
            </TableCell>
            <TableCell>{""}</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {items.map((item) => (
            <TableRow key={item.name}>
              <TableCell component="th" scope="row" sx={{ pl: 1 }}>
                <Button
                  variant="text"
                  onClick={() => navigate(`/parts/${item.type}/${item.id}`)}
                >
                  {item.name}
                </Button>
              </TableCell>
              <TableCell align="right">{item.manufacturer}</TableCell>
              <TableCell align="right">{item.releaseDate}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="center">
                <IconButton>
                  <RemoveIcon fontSize="small" />
                </IconButton>
                {item.amount}
                <IconButton>
                  <AddIcon fontSize="small" />
                </IconButton>
              </TableCell>
              <TableCell align="left" size="small" sx={{ p: 0 }}>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          <TableRow></TableRow>
        </TableBody>
      </Table>
      <Typography sx={{ textAlign: "right", p: 2, fontWeight: "bold" }}>
        Total: 238.86 &euro;
      </Typography>
    </TableContainer>
  );
}
