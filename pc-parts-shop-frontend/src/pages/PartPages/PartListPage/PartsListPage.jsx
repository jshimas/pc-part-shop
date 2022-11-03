import * as React from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PartsTable from "../../../components/PartsTable/PartsTable";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { capitalizeFirstLetter } from "../../../utils";
import { useSelector } from "react-redux";
import { selectRole } from "../../../app/slices/userSlice";
import { roles } from "../../../roles";

export default function PartListPage() {
  const { type } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const role = useSelector(selectRole);

  async function fetchData() {
    return [
      {
        id: 1,
        name: "name test 1",
        manufacturer: "manufacturer test 1",
        price: "price test 1",
        releaseDate: "release date test 1",
      },
      {
        id: 2,
        name: "name test 2",
        manufacturer: "manufacturer test 2",
        price: "price test 2",
        releaseDate: "release date test 2",
      },
      {
        id: 3,
        name: "name test 3",
        manufacturer: "manufacturer test 3",
        price: "price test 3",
        releaseDate: "release date test 3",
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
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "solid 1px gray",
          paddingBottom: "12px",
          margin: "32px 0",
        }}
      >
        <h1>
          {type === "cpu" ? type.toUpperCase() : capitalizeFirstLetter(type)}{" "}
          parts
        </h1>
        {role === roles.ADMIN && (
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            onClick={() => navigate(`${pathname}/new`)}
          >
            Add {type.split("-").join(" ")}
          </Button>
        )}
      </Box>
      {loading ? (
        <CircularProgress />
      ) : (
        <PartsTable headerArr={Object.keys(data[0])} rows={data} />
      )}
    </div>
  );
}
