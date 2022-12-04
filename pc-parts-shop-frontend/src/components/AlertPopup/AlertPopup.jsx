import { Alert, Snackbar } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import useAlert from "../../hooks/useAlert";

const AlertPopup = () => {
  const [alert, setAlert] = useState(false);
  const { text, type, removeAlert } = useAlert();

  useEffect(() => {
    if (text !== "") setAlert(true);
    else setAlert(false);
  }, [text, type]);

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;
    removeAlert();
  };

  return (
    <>
      <Snackbar
        open={alert}
        autoHideDuration={3000}
        onClose={handleClose}
        icon="false"
      >
        <Alert severity={type} variant="filled">
          {text}
        </Alert>
      </Snackbar>
    </>
  );
};

export default AlertPopup;
