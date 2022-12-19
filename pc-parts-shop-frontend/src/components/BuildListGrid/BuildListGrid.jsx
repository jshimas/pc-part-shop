import { Box, Grid } from "@mui/material";
import * as React from "react";
import BuildListGridItem from "./BuildListGridItem";
import { useNavigate } from "react-router-dom";

export default function BuildListGrid({ builds }) {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{
          gap: 3,
        }}
      >
        {builds.map((el, index) => (
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
