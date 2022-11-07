import * as React from "react";
import  "./buildAddPage.css";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function BuildAddPage() {
  return (
    <div>
      <div>
          <h3 >Make your own build</h3>
      </div>
      <div>
        <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          defaultValue="enter build name"
          variant="filled"
        />
      </div>

      <Button href="/builds/:id" variant="contained" endIcon={<SendIcon />}>
      Make build
      </Button>

      <div>
        Problems:
      </div>
    </div>
  );
}
