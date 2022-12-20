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

function createData(
  cpuSocketStandart,
  cpuSocketQuantity,
  ramTypeEnum,
  ramSocketQuantity,
  m2ssdSocketQuantity,
  sataSocketQuantity,
  pcieStandartEnum,
  pcieSocketQuantity
) {
  return {
    cpuSocketStandart,
    cpuSocketQuantity,
    ramTypeEnum,
    ramSocketQuantity,
    m2ssdSocketQuantity,
    sataSocketQuantity,
    pcieStandartEnum,
    pcieSocketQuantity,
  };
}

export default function AddGPU({ setSecondaryPart }) {
  const [partData, setPartData] = useState(null);
  const [cpuSocketStandart, setcpuSocketStandart] = useState(null);
  const [cpuSocketQuantity, setcpuSocketQuantity] = useState(null);
  const [ramTypeEnum, setramTypeEnum] = useState(null);
  const [ramSocketQuantity, setramSocketQuantity] = useState(null);
  const [m2ssdSocketQuantity, setm2ssdSocketQuantity] = useState(null);
  const [sataSocketQuantity, setsataSocketQuantity] = useState(null);

  const [pcieStandartEnum, setpcieStandartEnum] = useState(null);
  const [pcieSocketQuantity, setpcieSocketQuantity] = useState(null);
  //var partData;

  const handleInternalChange = async (event) => {
    try {
      switch (event.target.id) {
        case "cpuSocketStandart":
          setcpuSocketStandart(event.target.value);
          break;
        case "cpuSocketQuantity":
          setcpuSocketQuantity(event.target.value);
          break;
        case "ramTypeEnum":
          setramTypeEnum(event.target.value);
          break;
        case "ramSocketQuantity":
          setramSocketQuantity(event.target.value);
          break;
        case "m2ssdSocketQuantity":
          setm2ssdSocketQuantity(event.target.value);
          break;
        case "sataSocketQuantity":
          setsataSocketQuantity(event.target.value);
          break;
        case "pcieStandartEnum":
          setpcieStandartEnum(event.target.value);
          break;
        case "pcieSocketQuantity":
          setpcieSocketQuantity(event.target.value);
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
        createData(
          cpuSocketStandart,
          cpuSocketQuantity,
          ramTypeEnum,
          ramSocketQuantity,
          m2ssdSocketQuantity,
          sataSocketQuantity,
          pcieStandartEnum,
          pcieSocketQuantity
        )
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
          id="cpuSocketStandart"
          label="CPU Socket Standart"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="cpuSocketQuantity"
          label="CPU Socket Quantity"
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
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="ramSocketQuantity"
          label="RAM Socket Quantity"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="m2ssdSocketQuantity"
          label="m.2 Socket Quantity"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="sataSocketQuantity"
          label="Sata Socket Quantity"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="pcieStandartEnum"
          label="PCIe Standart Enum"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="pcieSocketQuantity"
          label="PCIe Socket Quantity"
          variant="filled"
          onChange={(event) => {
            handleInternalChange(event);
          }}
        />
      </div>
    </div>
  );
}
