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

function createData(readSpeed, writeSpeed, capacity, connectorType) {
  return { readSpeed, writeSpeed, capacity, connectorType };
}

export default function AddExternalMemory({ setSecondaryPart }) {
  const [partData, setPartData] = useState(null);
  const [readSpeed, setreadSpeed] = useState(null);
  const [writeSpeed, setwriteSpeed] = useState(null);
  const [capacity, setcapacity] = useState(null);
  const [connectorType, setconnectorType] = useState(null);
  //var partData;

  const handleInternalChange = async (event) => {
    try {
      switch (event.target.id) {
        case "read":
          setreadSpeed(event.target.value);
          break;
        case "write":
          setwriteSpeed(event.target.value);
          break;
        case "capacity":
          setcapacity(event.target.value);
          break;
        case "connector":
          setconnectorType(event.target.value);
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
        createData(readSpeed, writeSpeed, capacity, connectorType)
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
          id="read"
          label="Read Speed"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="write"
          label="Write Speed"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="capacity"
          label="Capacity"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="connector"
          label="Connector type"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
      </div>
    </div>
  );
}
