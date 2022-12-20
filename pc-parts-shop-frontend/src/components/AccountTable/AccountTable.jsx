import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectRole, selectId } from "../../app/slices/userSlice";
import useAlert from "../../hooks/useAlert";
import DeleteAccountDialog from "../DeleteAccountDialog/DeleteAccountDialog";
import AuthenticationApi from "../../apis/AuthenticationAPI";
import { useEffect, useState } from "react";
// import CartApi from "../../../apis/CartApi";
// import { addItem } from "../../../App/slices/cartSlice";

export default function AccountTable(rows) {
  const role = useSelector(selectRole);
  const cartId = useSelector((state) => state.cart.id);
  const dispatch = useDispatch();
  const { setAlert } = useAlert();
  const usrID = useSelector(selectId);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  

  

  const table = (
    <TableContainer sx={{ width: 1000, margin: "0 auto" }}>
      {rows.length === 0 ? (
        <Typography sx={{ textAlign: "center" }}>Wow, such empty!</Typography>
      ) : (
      <div>
      <Table aria-label="parts table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell sx={{ width: "35%" }}>email</TableCell>
            <TableCell/>
          </TableRow>
        </TableHead>
        <TableBody>
          {/*rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.fullName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">
                <DeleteAccountDialog id = {row.id} />
              </TableCell>
            </TableRow>
          ))*/}
        </TableBody>
      </Table>
      </div>)}
    </TableContainer>
  );

  return (
    <>
      {table}
    </>
  );
}
