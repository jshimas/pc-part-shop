import * as React from "react";
import { useParams } from "react-router-dom";
import  "./buildPage.css";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
// import PartsTable from "../../../components/PartsTable/PartsTable";
import BuildTable from "../../../components/BuildTable/BuildTable";
import BuildApi from "../../../apis/BuildApi";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function BuildPage() {
  const { id } = useParams();
  const allParts = ["memory", "cpu", "ram", "psu", "gpu", "motherboard", "cooler"];
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [name, setName] = useState(null);
  const [parts, setParts] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const BiuldApi = new BuildApi();
        const response = await  BiuldApi.getBuild(id);
        setName(response.data.buildName);
        setData(response.data.parts);
        setParts(response.data.left);
        setError(null);
      } catch (err) {
        setError(err.response.data.message);
        setData(null);
      }
      setLoading(false);
    };
    getData();
  }, [id]);

  const handleClick = async () => {
    try {
      const BiuldApi = new BuildApi();
      const response = await  BiuldApi.deleteBuild(id);
      navigate(`/builds`);
    } catch (err) {
      setError(err.response.data.message);
      console.log(err);
    }
  };
  // function missingParts(allParts, currentParts)
  // {
  //   let rez = []
  //   for(const examine of allParts)
  //   {
  //     let cond = false;
  //     for(const current of currentParts) // check if part was picked
  //     {
  //       if(examine === current)
  //       {
  //         cond = true;
  //         break;
  //       }
  //     }
  //     if(cond === false) // part wasn't picked so was added to the list
  //     {
  //       rez.push(examine);
  //     }
  //   }
  //   return rez;
  // }

  return (
    <div>
      <div>
        <center>
          <Typography
          variant="h3"
          sx={{ borderBottom: "1px solid gray", pb: 1, my: 4 }}
          >
            Build "{name}" Page. 
          </Typography>
        </center>
      </div>
      <center>
        {loading ? <CircularProgress /> : <BuildTable rows={data} missing={parts} buildId={id}/>}
      </center>
      <center>
        <Button sx={{ my: 3 }} variant="contained"  onClick={handleClick}>
          Delete Build
        </Button>
      </center>
    </div>
  );
}