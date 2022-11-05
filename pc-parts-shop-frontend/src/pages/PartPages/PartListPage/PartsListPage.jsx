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
import PartsApi from "../../../apis/PartsApi";

export default function PartListPage() {
  const { type } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const role = useSelector(selectRole);

  useEffect(() => {
    const getData = async () => {
      try {
        const partsApi = new PartsApi();
        const response = await partsApi.getPartsByType(type);
        console.log(response.data.parts);
        setData(response.data.parts);
        setError(null);
      } catch (err) {
        setError(err.response.data.message);
        setData(null);
      }
      setLoading(false);
    };
    getData();
  }, [type]);

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
      {loading ? <CircularProgress /> : <PartsTable rows={data} />}
    </div>
  );
}
