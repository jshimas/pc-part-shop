import * as React from "react";
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  TextField,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AddCPU() {
  return (
    <div>
      <div>
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="filled-hidden-label-normal"
          label="Manufacturer name"
          variant="filled"
          onChange={(event) => {}}
        />
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="filled-hidden-label-normal"
          label="Release date"
          variant="filled"
          onChange={(event) => {}}
        />
      </div>
    </div>
  );
}
