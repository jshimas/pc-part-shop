import * as React from "react";
import  "./buildAddPage.css";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import BuildApi from "../../../apis/BuildApi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function BuildAddPage() {
  const [name, setName] = useState(null);
  const [id, setId] = useState(null);
  const [error, setError] = useState(null);
  const userId = useSelector((state) => state.user.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const BiuldApi = new BuildApi();
  //       const response = await  BiuldApi.createBuild(name, userId);
  //       setId(response.data.id);
  //       setError(null);
  //     } catch (err) {
  //       setError(err.response.data.message);
  //       setId(null);
  //     }
  //   };
  //   getData();
  // }, [id]);

  const handleClick = async () => {
    try {
      if(name === null || name === ""){
        setName(undefined);
        setName(undefined);
      }
      const BiuldApi = new BuildApi();
      const response = await  BiuldApi.createBuild(name, userId);
      navigate(`/builds/${response.data.id}`);
    } catch (err) {
      setError(err.response.data.message);
      console.log(err);
    }
  };

  return (
    <div>
      <Typography sx={{ mt: 3, fontWeight: 'bold'}}>
          Make your own build
      </Typography>
      <div>
        <TextField
          sx={{ mt: 3 }}
          hiddenLabel
          id="filled-hidden-label-normal"
          label="enter build name"
          variant="filled"
          onChange={(event) => {setName(event.target.value);}}
        />
      </div>

      <Button sx={{ mt: 3 }} variant="contained" endIcon={<SendIcon />} onClick={handleClick}>
      Make build
      </Button>

      <Typography sx={{ mt: 3}}>
        Problems:
      </Typography>
      <Typography sx={{ mt: 3, color:'red'}}>
        {error}
      </Typography>
    </div>
  );
}
