import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import AuthenticationApi from "../../apis/AuthenticationAPI";
import PartsApi from "../../apis/PartsApi";
import BuildApi from "../../apis/BuildApi";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export default function AlertDialog({id}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //runs when user agrees to the popup
  const handleCloseAgree = () => {
    removePart(id);
    window.location.reload(false);
    handleClose();
  };

  //removes the part
  const removePart = async (id) => {
    try {
      const authApi = new AuthenticationApi();
      const response = await authApi.delete(id);
    } catch (err) {
      console.log(err);
    }
  };

  //Makes a button for removing a part and brings up a popup
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <DeleteIcon />
        Remove
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete account?"}
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
