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
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { selectRole } from "../../app/slices/userSlice";
import { roles } from "../../roles";
import CartApi from "../../apis/CartApi";
import BuildApi from "../../apis/BuildApi";
import { addItem } from "../../app/slices/cartSlice";

import DeletePartDialog from "../DeletePartDialog/DeletePartDialog";

export default function PartsTable({ rows, id }) {
  const role = useSelector(selectRole);
  const cartId = useSelector((state) => state.cart.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClick = async (build, part) => {
    try {
      const BiuldApi = new BuildApi();
      await BiuldApi.addPartToBuild(build, part);
      navigate(`/builds/${build}`);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  const addToCart = async (partId) => {
    try {
      const cartApi = new CartApi();
      const response = await cartApi.addItem(cartId, partId);
      dispatch(addItem(response.data.item));
    } catch (err) {
      console.log(err);
    }
  };

  const table = (
    <TableContainer sx={{ width: 1200, margin: "0 auto" }}>
      <Table aria-label="parts table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "35%" }}>Name</TableCell>
            <TableCell align="right" sx={{ width: "10%" }}>
              Manufacturer
            </TableCell>
            <TableCell align="right">Release date</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell key={""} align="right">
              {""}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" align="left">
                <Button
                  variant="text"
                  onClick={() => navigate(`${pathname}/${row.id}`)}
                  sx={{ textAlign: "left", textTransform: "none" }}
                >
                  {row.name}
                </Button>
              </TableCell>
              <TableCell align="right">{row.manufacturer}</TableCell>
              <TableCell align="right">{row.releaseDate}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              {role !== roles.GUEST && (
                <TableCell align="right">
                  <Box sx={{ display: "inline-flex", gap: 2 }}>
                    {id !== "null" && id !== undefined && (
                      <Button
                        onClick={() => handleClick(id, row.id)}
                        variant="contained"
                        startIcon={<AddIcon />}
                      >
                        Add to build
                      </Button>
                    )}
                    {role === roles.ADMIN && (
                      <DeletePartDialog partId={row.id} />
                    )}

                    <Button
                      onClick={() => addToCart(row.id)}
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

  return (
    <>
      {rows.length === 0 ? (
        <Typography sx={{ textAlign: "center" }}>Wow, such empty!</Typography>
      ) : (
        table
      )}
    </>
  );
}
