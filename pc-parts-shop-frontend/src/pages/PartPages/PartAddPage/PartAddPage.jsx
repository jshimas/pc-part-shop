import * as React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  CircularProgress,
  Typography,
  TextField,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AddIcon from "@mui/icons-material/Add";
import PartsApi from "../../../apis/PartsApi";
import { useEffect, useState } from "react";

export default function PartAddPage() {
  const [error, setError] = useState(null);
  const [partName, setPartName] = useState(null);
  const { type } = useParams();

  var manufacturerName, releaseDate, price;

  const partsApi1 = new PartsApi();

  const handleAdding = async () => {
    const partsApi = new PartsApi();
    try {
      //if (partName === null || partName === "") {
      //  setPartName(undefined);
      //}
      console.log(partName);

      const response = await partsApi.addPart(partName);
    } catch (err) {
      setError(err.response.data.message);
      console.log(err);
    }
  };
  //      const response1 =  partsApi1.addPart();

  // addPartTest(() => {
  //   const addPartTestTest = async () => {
  //     try {
  //       const partsApi1 = new PartsApi();
  //       const response1 = await partsApi1.addPart();
  //       setError(null);
  //     } catch (err) {
  //       setError(err.response.data.message);
  //     }
  //   };
  //   //addPartTestTest();
  // }); //, [testSQL]);

  return (
    <div>
      <h3>{type} add page</h3>(
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={() => handleAdding()}
      >
        Add {type.split("-").join(" ")}
      </Button>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={() => partsApi1.deletePart(8)}
      >
        remove {type.split("-").join(" ")}
      </Button>
      )
      <div>
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="filled-hidden-label-normal"
          label="Part name"
          variant="filled"
          onChange={(event) => {
            setPartName(event.target.value);
          }}
        />

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
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="filled-hidden-label-normal"
          label="Price"
          variant="filled"
          InputProps={{
            startAdornment: <InputAdornment position="start">€</InputAdornment>,
          }}
          onChange={(event) => {}}
        />
      </div>
    </div>
  );
}
