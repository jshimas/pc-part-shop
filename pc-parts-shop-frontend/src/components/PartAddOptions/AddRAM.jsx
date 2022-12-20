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

function createData(frequancy, capacity, ramTypeEnum) {
  return { frequancy, capacity, ramTypeEnum };
}

export default function AddGPU({ setSecondaryPart }) {
  const [partData, setPartData] = useState(null);
  const [frequancy, setfrequancy] = useState(null);
  const [capacity, setcapacity] = useState(null);
  const [ramTypeEnum, setramTypeEnum] = useState(null);

  //var partData;

  const handleInternalChange = async (event) => {
    try {
      switch (event.target.id) {
        case "frequancy":
          setfrequancy(event.target.value);
          break;
        case "capacity":
          setcapacity(event.target.value);
          break;
        case "ramTypeEnum":
          setramTypeEnum(event.target.value);
          break;
        default:
          break;
      }
    } finally {
    }
  };

  useEffect(() => {
    const setData = () => {
      setSecondaryPart(createData(frequancy, capacity, ramTypeEnum));
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
          id="frequancy"
          label="RAM Frequency"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="capacity"
          label="RAM capacity"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="ramTypeEnum"
          label="RAM Type Enum"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
      </div>
    </div>
  );
}
