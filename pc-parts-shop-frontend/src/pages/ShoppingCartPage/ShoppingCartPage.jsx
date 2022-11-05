import { Button, CircularProgress, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCartTable from "../../components/ShoppingCartList/ShoppingCartTable";

export default function ShoppingCartPage() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  async function fetchData() {
    return [
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
    ];
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setData(data);
        // setError(null);
      } catch (err) {
        // setError(err.message);
        setData(null);
      }
      setLoading(false);
    };
    getData();
  }, [loading]);

  return (
    <Container>
      <Typography
        variant="h3"
        sx={{ borderBottom: "1px solid gray", pb: 1, my: 4 }}
      >
        Shopping Cart
      </Typography>
      {loading ? <CircularProgress /> : <ShoppingCartTable items={data} />}
      <Box sx={{ display: "flex", justifyContent: "right", my: 1 }}>
        <Button variant="contained" onClick={() => navigate("/payment")}>
          Payment
        </Button>
      </Box>
    </Container>
  );
}
