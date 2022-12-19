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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import CartApi from "../../apis/CartApi";
import { replaceCart } from "../../app/slices/cartSlice";
import useAlert from "../../hooks/useAlert";
import { roles } from "../../roles";

export default function BuildTable({ rows, missing, buildId }) {
  const cartId = useSelector((state) => state.cart.id);
  const role = useSelector((state) => state.user.role);
  const dispatch = useDispatch();
  const { setAlert } = useAlert();

  const addBuildPartsToCart = async () => {
    try {
      const cartApi = new CartApi();
      const response = await cartApi.addBuildPartsToCart(cartId, buildId);
      dispatch(replaceCart(response.data.newCartItems));
      setAlert("Build items have been added to your shopping cart.", "info");
    } catch (err) {
      setAlert(err.response?.data.message, "error");
    }
  };

  const table = (
    <TableContainer sx={{ width: 1000, margin: "0 auto" }}>
      {rows.length === 0 ? (
        <Typography sx={{ textAlign: "center" }}>Wow, such empty!</Typography>
      ) : (
        <div>
          <Table aria-label="parts table">
            <TableHead>
              <TableRow>
                <TableCell>Part name</TableCell>
                <TableCell sx={{ width: "35%" }}>Name</TableCell>
                <TableCell align="right" sx={{ width: "10%" }}>
                  Manufacturer
                </TableCell>
                <TableCell align="right">Release date</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.type}</TableCell>
                  <TableCell component="th" scope="row">
                    {/* <Button
                  variant="text"
                  onClick={() => navigate(`${pathname}/${row.id}`)}
                > */}
                    {row.name}
                    {/* </Button> */}
                  </TableCell>
                  <TableCell align="right">{row.manufacturer}</TableCell>
                  <TableCell align="right">{row.releaseDate}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  {/* {role !== roles.GUEST && (
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
                      onClick={() => addToCart(row.id)}
                      variant="outlined"
                      startIcon={<ShoppingCartIcon />}
                    >
                      Buy
                    </Button>
                  </Box>
                </TableCell>
              )} */}
                </TableRow>
              ))}
              {/* {missing.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">{row}</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">
                <Button href={"/parts/" + row}>
                  ADD Component
                </Button>
              </TableCell>
            </TableRow>
          ))} */}
            </TableBody>
          </Table>
          {role !== roles.GUEST && (
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              <Button
                onClick={() => addBuildPartsToCart()}
                variant="contained"
                startIcon={<ShoppingCartIcon />}
              >
                Buy parts
              </Button>
            </Box>
          )}
        </div>
      )}
      <center>
        <Typography variant="h4" sx={{ pt: 5, my: 4 }}>
          Available part types
        </Typography>
      </center>
      <Table sx={{ mt: 10 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "35%" }}>Part name</TableCell>
            <TableCell align="right" sx={{ width: "10%" }}>
              {""}
            </TableCell>
            <TableCell align="right">{""}</TableCell>
            <TableCell align="right" sx={{ pr: 4 }}>
              function
            </TableCell>
            <TableCell key={""} align="right">
              {""}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {missing.map((row) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {row}
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">
                <Button href={"/parts/" + row + "/" + buildId}>
                  ADD Component
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return <>{table}</>;
}
