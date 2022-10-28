import { Box, Grid } from "@mui/material";
import * as React from "react";
import BuildListGridItem from "./BuildListGridItem";
import { useNavigate } from "react-router-dom";

export default function BuildListGrid() {
  const navigate = useNavigate();
  const data = ["Build 1", "Build 2", "Build 3", "Build 4", "Build 5"];

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{
          gap: 3,
        }}
      >
        {data.map((el, index) => (
          <BuildListGridItem
            data={el}
            key={index}
            onClick={() => navigate(`/builds/${index + 1}`)}
          />
        ))}
      </Grid>
    </Box>
  );
}
