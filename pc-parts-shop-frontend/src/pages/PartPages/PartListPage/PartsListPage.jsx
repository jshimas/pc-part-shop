import { Box, Button } from "@mui/material";
import * as React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function PartListPage() {
  const { type } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

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
        <h3>Part List Page: {type} parts</h3>
        <Button
          variant="outlined"
          onClick={() => navigate(`${location.pathname}/new`)}
        >
          Add {type.split("-").join(" ")}
        </Button>
      </Box>
    </div>
  );
}
