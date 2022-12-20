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

function createData(vramQuantity, vramFrequancy, frequancy, pcieStandartEnum) {
  return { vramQuantity, vramFrequancy, frequancy, pcieStandartEnum };
}

export default function AddGPU({ setSecondaryPart }) {
  const [partData, setPartData] = useState(null);
  const [vramQuantity, setvramQuantity] = useState(null);
  const [vramFrequancy, setvramFrequancy] = useState(null);
  const [frequancy, setfrequancy] = useState(null);
  const [pcieStandartEnum, setpcieStandartEnum] = useState(null);
  //var partData;

  const handleInternalChange = async (event) => {
    try {
      switch (event.target.id) {
        case "vram":
          setvramQuantity(event.target.value);
          break;
        case "vramF":
          setvramFrequancy(event.target.value);
          break;
        case "coreF":
          setfrequancy(event.target.value);
          break;
        case "pcie":
          setpcieStandartEnum(event.target.value);
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
        createData(vramQuantity, vramFrequancy, frequancy, pcieStandartEnum)
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
          id="vram"
          label="VRAM Quantity"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="vramF"
          label="VRAM Frequency"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="coreF"
          label="Core Frequency"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="pcie"
          label="PcieStandartEnum"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
      </div>
    </div>
  );
}
