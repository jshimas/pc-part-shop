import { Box, Typography } from "@mui/material";

export default function HomePage() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 15,
        }}
      >
        <Typography variant="h2">Welcome to PC Parts Shop!</Typography>
        <Typography variant="h5">
          Enjoy our finest computer parts collection{" "}
        </Typography>
      </Box>
    </div>
  );
}
