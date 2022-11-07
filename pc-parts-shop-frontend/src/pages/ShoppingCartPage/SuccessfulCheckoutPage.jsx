import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartApi from "../../apis/CartApi";
import { deleteAllItems } from "../../app/slices/cartSlice";

export default function SuccessfulCheckoutPage() {
  const cartId = useSelector((state) => state.cart.id);
  const userId = useSelector((state) => state.user.id);
  const dispatch = useDispatch();

  useEffect(() => {
    const createOrder = async () => {
      console.log(userId, cartId);
      // Create Order
      const cartApi = new CartApi();
      await cartApi.createOrder(cartId, userId);
      // Remove items from the shopping cart
      dispatch(deleteAllItems);
    };
    createOrder();
  }, [cartId, userId, dispatch]);
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
