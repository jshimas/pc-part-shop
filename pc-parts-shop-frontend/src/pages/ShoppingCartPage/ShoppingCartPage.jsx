import { Button, CircularProgress, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ShoppingCartTable from "../../components/ShoppingCartList/ShoppingCartTable";
import CartApi from "../../apis/CartApi";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "./../../app/slices/userSlice";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { selectAllItems, setCheckoutStatus } from "../../app/slices/cartSlice";

export default function ShoppingCartPage() {
  const accToken = useSelector(getAccessToken);
  const dispatch = useDispatch();
  const [loadingCheckout, setLoadingCheckout] = useState(false);
  const [checkoutError, setCheckoutError] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);

  const items = useSelector(selectAllItems);
  const cartId = useSelector((state) => state.cart.id);
  const user = useSelector((state) => state.user);
  const itemsStatus = useSelector((state) => state.cart.status);
  const fecthError = useSelector((state) => state.cart.error);

  const errors = [checkoutError, fecthError];
  const errorsExists = errors.some((err) => !!err);

  const handleCheckout = async () => {
    setLoadingCheckout(true);
    const cartApi = new CartApi(accToken);
    try {
      const checkoutItems = items.map((item) => ({
        name: item.Part.name,
        price: item.Part.price,
        quantity: item.quantity,
      }));
      const response = await cartApi.checkout(user, cartId, checkoutItems);
      if (response.data.session) dispatch(setCheckoutStatus("success"));
      window.location.href = response.data.session.url;
    } catch (err) {
      setCheckoutError(err.response.data.message);
      setOpenAlert(true);
    } finally {
      setLoadingCheckout(false);
    }
  };

  const renderSnackbar = (
    <Snackbar
      open={openAlert}
      autoHideDuration={3000}
      onClose={() => setOpenAlert(false)}
    >
      {errorsExists && (
        <MuiAlert
          onClose={() => setOpenAlert(false)}
          severity="error"
          sx={{ width: "100%" }}
          variant="filled"
        >
          {errors.join(" ")}
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
          {items.length !== 0 && (
            <Button variant="contained" onClick={handleCheckout}>
              {loadingCheckout ? "Processing..." : "Checkout"}
            </Button>
          )}
        </Box>
      </Container>
    </>
  );
}
