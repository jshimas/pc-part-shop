import { Snackbar, MuiAlert } from "@mui/material";
import { useState } from "react";

export default function ErrorAlert({ message }) {
  const [alertOpen, setAlertOpen] = useState(!!message);
  return (
    <Snackbar
      open={alertOpen}
      autoHideDuration={3000}
      onClose={() => setAlertOpen(false)}
    >
      <MuiAlert
        onClose={() => setAlertOpen(false)}
        severity="error"
        sx={{ width: "100%" }}
        variant="filled"
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
}
