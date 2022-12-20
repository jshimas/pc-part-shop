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
import AlertPopup from "../../../components/AlertPopup/AlertPopup";
import AddCPU from "../../../components/PartAddOptions/AddCPU";
import AddCoolers from "../../../components/PartAddOptions/AddCoolers";
import AddExternalMemory from "../../../components/PartAddOptions/AddExternalMemory";
import AddGPU from "../../../components/PartAddOptions/AddGPU";
import AddMotherboard from "../../../components/PartAddOptions/AddMotherboard";
import AddPSU from "../../../components/PartAddOptions/AddPSU";
import AddRAM from "../../../components/PartAddOptions/AddRAM";

import Input from "@mui/material/Input";

const ariaLabel = { "aria-label": "description" };
export default function PartAddPage() {
  const [error, setError] = useState(null);
  const { type } = useParams();
  const [partName, setPartName] = useState(null);
  const [manufacturer, setManufacturer] = useState(null);
  const [releaseDate, setReleaseDate] = useState(null);
  const [price, setPrice] = useState(null);
  const [details, setDetails] = useState(null);
  const [count, setCount] = useState(0);
  const [secondaryPart, setSecondaryPart] = useState(null);

  const handleChange = (event, num) => {
    console.log(secondaryPart);
    //setCount((current) => current + num);
  };

  const handleAdding = async () => {
    const partsApi = new PartsApi();

    try {
      //if (partName === null || partName === "") {
      //  setPartName(undefined);
      //}
      console.log(secondaryPart);

      const response = await partsApi.addPart(
        partName,
        type,
        manufacturer,
        releaseDate,
        price,
        details,
        secondaryPart
      );

      console.log(response);
    } catch (err) {
      setError(err.response.data.message);
      console.log(err);
      <AlertPopup />;
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
      <h3>Pateikite {type} informacija</h3>(
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={() => handleAdding()}
      >
        Add {type.split("-").join(" ")}
      </Button>
      {/* <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={() => partsApi1.deletePart(8)}
      >
        remove {type.split("-").join(" ")}
      </Button> */}
      )
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            sx={{ mt: 3 }}
            hiddenLabel
            id="filled-hidden-label-normal"
            label="Part name"
            variant="filled"
            onChange={(event) => {
              setPartName(event.target.value);
              console.log(secondaryPart);
            }}
          />
          <TextField
            sx={{ mt: 3 }}
            hiddenLabel
            id="filled-hidden-label-normal"
            label="Manufacturer name"
            variant="filled"
            onChange={(event) => {
              setManufacturer(event.target.value);
            }}
          />
          <TextField
            sx={{ mt: 3 }}
            hiddenLabel
            id="filled-hidden-label-normal"
            label="Release date"
            variant="filled"
            onChange={(event) => {
              setReleaseDate(event.target.value);
            }}
          />
          <TextField
            sx={{ mt: 3 }}
            hiddenLabel
            id="filled-hidden-label-normal"
            label="Price"
            variant="filled"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">€</InputAdornment>
              ),
            }}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <TextField
            sx={{ mt: 3 }}
            hiddenLabel
            id="filled-hidden-label-normal"
            label="Details"
            variant="filled"
            onChange={(event) => {
              setDetails(event.target.value);
            }}
          />
          {type === "cpu" && <AddCPU setSecondaryPart={setSecondaryPart} />}
          {type === "gpu" && <AddGPU setSecondaryPart={setSecondaryPart} />}
          {type === "ram" && <AddRAM setSecondaryPart={setSecondaryPart} />}
          {type === "motherboard" && (
            <AddMotherboard setSecondaryPart={setSecondaryPart} />
          )}
          {type === "memory" && (
            <AddExternalMemory setSecondaryPart={setSecondaryPart} />
          )}
          {type === "cooler" && (
            <AddCoolers setSecondaryPart={setSecondaryPart} />
          )}
          {type === "psu" && <AddPSU setSecondaryPart={setSecondaryPart} />}
        </div>
      </Box>
    </div>
  );
}
