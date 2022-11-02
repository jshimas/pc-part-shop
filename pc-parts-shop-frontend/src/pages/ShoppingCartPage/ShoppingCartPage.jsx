import { Button, Typography } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function ShoppingCartPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Typography>Shopping Cart</Typography>
      <Button variant="contained" onClick={() => navigate("/payment")}>
        Payment
      </Button>
    </div>
  );
}
