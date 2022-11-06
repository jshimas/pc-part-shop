import { Button, CircularProgress, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import ShoppingCartTable from "../../components/ShoppingCartList/ShoppingCartTable";
// import CartApi from "../../apis/CartApi";
import { useSelector, useDispatch } from "react-redux";
import {
  // getAccessToken,
  // setCartId,
  selectId,
} from "./../../app/slices/userSlice";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { fetchItems, selectAllItems } from "../../app/slices/cartSlice";

export default function ShoppingCartPage() {
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [loadingCheckout, setLoadingCheckout] = useState(false);
  // const [error, setError] = useState(null);
  // const accToken = useSelector(getAccessToken);
  const userId = useSelector(selectId);
  const items = useSelector(selectAllItems);
  const [openAlert, setOpenAlert] = useState(false);
  const dispatch = useDispatch();

  const itemsStatus = useSelector((state) => state.cart.status);
  const error = useSelector((state) => state.cart.error);

  useEffect(() => {
    if (itemsStatus === "idle") {
      dispatch(fetchItems(userId));
    }
  }, [itemsStatus, dispatch, userId]);

  // const handleCheckout = () => {
  //   setLoadingCheckout(true);
  //   const cartApi = new CartApi(accToken);
  //   try {
  //     cartApi.checkout(data);
  //   } catch (err) {
  //     setError(err.response.data.message);
  //     setOpenAlert(true);
  //   }
  //   setLoadingCheckout(false);
  // };

  const renderSnackbar = (
    <Snackbar
      open={openAlert}
      autoHideDuration={3000}
      onClose={() => setOpenAlert(false)}
    >
      {error && (
        <MuiAlert
          onClose={() => setOpenAlert(false)}
          severity="error"
          sx={{ width: "100%" }}
          variant="filled"
        >
          {error}
        </MuiAlert>
      )}
    </Snackbar>
  );

  return (
    <>
      {renderSnackbar}
      <Container>
        <Typography
          variant="h3"
          sx={{ borderBottom: "1px solid gray", pb: 1, my: 4 }}
        >
          Shopping Cart
        </Typography>
        {itemsStatus === "loading" ? (
          <CircularProgress />
        ) : (
          <ShoppingCartTable items={items} />
        )}
        <Box sx={{ display: "flex", justifyContent: "right", my: 1 }}>
          <Button variant="contained">
            {false ? "Processing..." : "Checkout"}
          </Button>
        </Box>
      </Container>
    </>
  );
}
