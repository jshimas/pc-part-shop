import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartApi from "../../apis/CartApi";
import { deleteAllItems, setCheckoutStatus } from "../../app/slices/cartSlice";

export default function SuccessfulCheckoutPage() {
  const cartId = useSelector((state) => state.cart.id);
  const checkoutStatus = useSelector((state) => state.cart.checkoutStatus);
  const itemsStatus = useSelector((state) => state.cart.status);
  const userId = useSelector((state) => state.user.id);
  const dispatch = useDispatch();

  useEffect(() => {
    const createOrder = async () => {
      // Create Order
      if (
        userId &&
        cartId &&
        checkoutStatus !== "seen" &&
        itemsStatus !== "loading"
      ) {
        const cartApi = new CartApi();
        const res = await cartApi.createOrder(cartId, userId);
        console.log(res.data);
        // Remove items from the shopping cart
        dispatch(deleteAllItems());
        dispatch(setCheckoutStatus("seen"));
      }
    };
    createOrder();
  }, [cartId, checkoutStatus, dispatch, userId, itemsStatus]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 15,
      }}
    >
      <Typography variant="h2">Payment successful</Typography>
      <Typography variant="h5" sx={{ mb: 5 }}>
        Have fun building!
      </Typography>
      <Link to="/">Back to Home Page</Link>
    </Box>
  );
}
