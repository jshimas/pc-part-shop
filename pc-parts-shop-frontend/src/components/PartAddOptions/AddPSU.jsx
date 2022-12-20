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

function createData(powerCapacity) {
  return { powerCapacity };
}

export default function AddGPU({ setSecondaryPart }) {
  const [partData, setPartData] = useState(null);
  const [powerCapacity, setpowerCapacity] = useState(null);
  //var partData;

  const handleInternalChange = async (event) => {
    try {
      switch (event.target.id) {
        case "power":
          setpowerCapacity(event.target.value);
          break;

        default:
          break;
      }
    } finally {
    }
  };

  useEffect(() => {
    const setData = () => {
      setSecondaryPart(createData(powerCapacity));
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
          id="power"
          label="PSU power capacity"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
      </div>
    </div>
  );
}
