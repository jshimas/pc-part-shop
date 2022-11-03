import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { capitalizeFirstLetter, splitByUpperCaseCharacter } from "../../utils";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { selectRole } from "../../app/slices/userSlice";
import { roles } from "../../roles";

export default function PartsTable({ headerArr, rows }) {
  const role = useSelector(selectRole);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = () => {
    navigate(`/builds/new`);
  };

  const formatHeaders = (arr) => {
    const headers = arr.filter((el) => el !== "id");

    const capitalize = (arr) =>
      arr.map((word) => capitalizeFirstLetter(word)).join(" ");

    return headers
      .map((el) => splitByUpperCaseCharacter(el))
      .map((el) => capitalize(el));
  };

  const formatedHeader = formatHeaders(headerArr);
  const formatedRows = headerArr.filter((el) => !["id", "name"].includes(el));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800 }} aria-label="parts table">
        <TableHead>
          <TableRow>
            <TableCell>{formatedHeader[0]}</TableCell>
            {formatedHeader.slice(1).map((el) => (
              <TableCell key={el} align="right">
                {el}
              </TableCell>
            ))}
            <TableCell key={""} align="right">
              {""}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Button
                  variant="text"
                  onClick={() => navigate(`${pathname}/${row.id}`)}
                >
                  {row.name}
                </Button>
              </TableCell>
              {formatedRows.map((el) => (
                <TableCell align="right">{row[el]}</TableCell>
              ))}
              {role !== roles.GUEST && (
                <TableCell align="right">
                  <Box sx={{ display: "inline-flex", gap: 2 }}>
                    <Button
                      onClick={handleClick}
                      variant="contained"
                      startIcon={<AddIcon />}
                    >
                      Add to build
                    </Button>
                    <Button
                      onClick={handleClick}
                      variant="outlined"
                      startIcon={<ShoppingCartIcon />}
                    >
                      Buy
                    </Button>
                  </Box>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
