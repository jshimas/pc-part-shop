import { Button, CircularProgress, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import ShoppingCartTable from "../../components/ShoppingCartList/ShoppingCartTable";
import CartApi from "../../apis/CartApi";
import { useSelector } from "react-redux";
import { getAccessToken } from "./../../app/slices/userSlice";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function ShoppingCartPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingCheckout, setLoadingCheckout] = useState(false);
  const [error, setError] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);
  const accToken = useSelector(getAccessToken);

  async function fetchData() {
    return {
      id: 1,
      items: [
        {
          id: 1,
          name: "name test 1",
          manufacturer: "manufacturer 1",
          price: "price test 1",
          releaseDate: "2021-11-15",
          type: "memory",
          amount: 2,
        },
        {
          id: 2,
          name: "name test 2",
          manufacturer: "manufacturer 2",
          price: "price test 2",
          releaseDate: "2022-04-03",
          type: "cpu",
          amount: 1,
        },
      ],
    };
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setData(data);
      } catch (err) {
        setError(err.message);
        setData(null);
      }
      setLoading(false);
    };
    getData();
  }, [loading]);

  const handleCheckout = () => {
    setLoadingCheckout(true);
    const cartApi = new CartApi(accToken);
    try {
      cartApi.checkout(data);
    } catch (err) {
      setError(err.response.data.message);
      setOpenAlert(true);
    }
    setLoadingCheckout(false);
  };

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
        {loading ? (
          <CircularProgress />
        ) : (
          <ShoppingCartTable items={data.items} />
        )}
        <Box sx={{ display: "flex", justifyContent: "right", my: 1 }}>
          <Button variant="contained" onClick={handleCheckout}>
            {loadingCheckout ? "Processing..." : "Checkout"}
          </Button>
        </Box>
      </Container>
    </>
  );
}
