import { Box, Icon, Typography } from "@mui/material";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import * as React from "react";
import "./BuildStyles.css";

export default function BuildListGridItem({ data, ...props }) {
  return (
    <div className="grid-item" {...props}>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          backgroundColor: "#1e88e5",
          color: "white",
          p: 2,
        }}
      >
        <DeveloperBoardIcon sx={{ fontSize: 18 }} />
        <Typography sx={{ fontSize: 14 }}>{data.User.fullName}</Typography>
      </Box>
      <Box sx={{ p: 2, borderBottom: "1px solid #bbb", flex: 1 }}>
        <Typography sx={{ fontWeight: 600, fontSize: 18, mb: 2 }}>
          {data.name}
        </Typography>
        {data.BuildParts.slice(0, 3).map((bp) => (
          <Typography key={data.BuildParts.id} sx={{ fontSize: 12, mb: 1 }}>
            {bp.Part.name}
          </Typography>
        ))}
      </Box>
      <Box>
        <Typography sx={{ textAlign: "left", p: 2, fontWeight: "bold" }}>
          Total:{" "}
          {data.BuildParts.reduce(
            (acc, bp) => acc + bp.quantity * bp.Part.price,
            0
          ).toFixed(2)}{" "}
          &euro;
        </Typography>
      </Box>
    </div>
  );
}
