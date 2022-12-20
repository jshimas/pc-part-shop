import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import PartsApi from "../../apis/PartsApi";
import { useDispatch } from "react-redux";

export default function AlertDialog({ partId }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseAgree = async () => {
    console.log(partId);
    await removePart(partId);

    handleClose();
    window.location.reload(false);
  };

  const removePart = async (partId) => {
    try {
      const partsApi = new PartsApi();
      const response = await partsApi.deletePart(partId);
      console.log(response);
      //dispatch(removePart(response.data.item));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <DeleteIcon />
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete part from database?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"></DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleCloseAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
