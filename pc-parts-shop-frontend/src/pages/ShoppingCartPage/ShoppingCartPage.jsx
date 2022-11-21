import { Button, CircularProgress, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ShoppingCartTable from "../../components/ShoppingCartList/ShoppingCartTable";
import CartApi from "../../apis/CartApi";
import { useSelector } from "react-redux";
import { selectAllItems } from "../../app/slices/cartSlice";
import useAlert from "../../hooks/useAlert";

export default function ShoppingCartPage() {
  const { setAlert } = useAlert();
  const [loadingCheckout, setLoadingCheckout] = useState(false);

  const items = useSelector(selectAllItems);
  const cartId = useSelector((state) => state.cart.id);
  const user = useSelector((state) => state.user);
  const itemsStatus = useSelector((state) => state.cart.status);

  const handleCheckout = async () => {
    setLoadingCheckout(true);
    const cartApi = new CartApi();
    try {
      const checkoutItems = items.map((item) => ({
        name: item.Part.name,
        price: item.Part.price,
        quantity: item.quantity,
      }));
      const response = await cartApi.checkout(user, cartId, checkoutItems);
      // if (!!response.data.session) dispatch(setCheckoutStatus("success"));
      window.location.href = response.data.session.url;
    } catch (err) {
      setAlert(err.response.data.message, "error");
    } finally {
      setLoadingCheckout(false);
    }
  };

  return (
    <>
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
