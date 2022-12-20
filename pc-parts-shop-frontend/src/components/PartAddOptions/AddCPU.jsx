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

function createData(socketStandart, frequancy, coreQuantity, threadQuantity) {
  return { socketStandart, frequancy, coreQuantity, threadQuantity };
}

export default function AddCPU({ handleChange, setSecondaryPart }) {
  const [partData, setPartData] = useState(null);
  const [socketStandart, setSocketStandart] = useState(null);
  const [frequancy, setfrequancy] = useState(null);
  const [coreQuantity, setcoreQuantity] = useState(null);
  const [threadQuantity, setthreadQuantity] = useState(null);
  //var partData;

  const handleInternalChange = async (event) => {
    try {
      switch (event.target.id) {
        case "socket":
          setSocketStandart(event.target.value);
          break;
        case "frequency":
          setfrequancy(event.target.value);
          break;
        case "core":
          setcoreQuantity(event.target.value);
          break;
        case "thread":
          setthreadQuantity(event.target.value);
          break;
        default:
          break;
      }
    } finally {
    }
  };

  useEffect(() => {
    const setData = () => {
      setSecondaryPart(
        createData(socketStandart, frequancy, coreQuantity, threadQuantity)
      );
    };
    setData();
  });

  // setPartData(
  //   partees
  //   // createData(socketStandart, frequancy, coreQuantity, threadQuantity)
  // );
  // // console.log(socketStandart);
  // console.log(frequancy);
  // console.log(coreQuantity);
  // console.log(data);
  // console.log(partData);

  return (
    <div>
      <div>
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="socket"
          label="Socket Standart"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="frequency"
          label="Frequency"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="core"
          label="Core Quantity"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="thread"
          label="Thread Quantity"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
      </div>
    </div>
  );
}
