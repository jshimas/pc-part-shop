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
import { selectRole, selectId } from "../../../app/slices/userSlice";
import { roles } from "../../../roles";
import { useDispatch, useSelector } from "react-redux";

export default function BuildPage() {
  const { id } = useParams();
  const allParts = ["memory", "cpu", "ram", "psu", "gpu", "motherboard", "cooler"];
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [name, setName] = useState(null);
  const [parts, setParts] = useState(null);
  const [buildMaker, setbuildMaker] = useState(null);
  const navigate = useNavigate();
  const role = useSelector(selectRole);
  const usrID = useSelector(selectId);

  useEffect(() => {
    const getData = async () => {
      try {
        const BiuldApi = new BuildApi();
        const response = await  BiuldApi.getBuild(id);
        setName(response.data.buildName);
        setData(response.data.parts);
        setParts(response.data.left);
        setbuildMaker(response.data.buildCreator);
        setError(null);
      } catch (err) {
        setError(err.response.data.message);
        setData(null);
      }
      setLoading(false);
    };
    getData();
  }, [id]);

  const handleClick1 = async () => {
    try {
      const BiuldApi = new BuildApi();
      const response = await  BiuldApi.deleteBuild(id);
      navigate(`/builds`);
    } catch (err) {
      setError(err.response.data.message);
      console.log(err);
    }
  };

  const handleClick2 = async () => {
    try {
       const BiuldApi = new BuildApi();
       const response = await  BiuldApi.checkCompatibility(id);
       if(response.data.problems === '')
       {
        setError("Everything is compatible");
       } else{
       setError(response.data.problems);
       }
    } catch (err) {
      setError(err.response.data.message);
      console.log(err);
    }
  };


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
      {role !== roles.GUEST &&(
      <center>
        <Button sx={{ my: 3 }} variant="contained"  onClick={handleClick2}>
          Check compatibility
        </Button>

        <Typography sx={{ my: 3, color:'red'}}>
        {error}
        </Typography>
      </center>)}
      {data !== null &&(
      <center>
        {loading ? <CircularProgress /> : <BuildTable rows={data} missing={parts} buildId={id} buildMaker={buildMaker}/>}
      </center>
      )}
      {role !== roles.GUEST && buildMaker === usrID &&(
      <center>
        <Button sx={{ my: 3 }} variant="contained"  onClick={handleClick1}>
          Delete Build
        </Button>
      </center>)}
    </div>
  );
}