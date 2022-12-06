import * as React from "react";
import { useParams } from "react-router-dom";
import  "./buildPage.css";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import PartsTable from "../../../components/PartsTable/PartsTable";
import BuildApi from "../../../apis/BuildApi";

export default function BuildPage() {
  const { id } = useParams();
  const allParts = ["memory", "cpu", "ram", "psu", "gpu", "motherboard", "cooler"];
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [name, setName] = useState(null);
  const [parts, setParts] = useState(null);


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
        {loading ? <CircularProgress /> : <PartsTable rows={data} />}
      </center>
      <center>
      <table>
        <thread>
          <tr>
            <th scope="col" width="13%">Component</th>
            <th scope="col" width="9%">Product</th>
            <th scope="col" width="47%">Title</th>
            <th scope="col" width="7%">Price</th>
            <th scope="col" width="18%">Product Link</th>
            <th scope="col" width="7%">Remove</th>
          </tr>
          <tbody>
          <tr class="items">
            <td class="component" >
              <b><a href="/">Processor</a></b>
            </td>
            <td class="select-comp" colspan="7">
              <a class="comp-button" href="/">ADD Component</a>
            </td>
          </tr>
          <tr class="items">
            <td class="component">
              <b><a href="/">Motherboard</a></b>
            </td>
            <td class="select-comp" colspan="7">
              <a class="comp-button" href="/">ADD Component</a>
            </td>
          </tr>
          <tr class="items">
            <td class="component">
              <b><a href="/">CPU Cooler</a></b>
            </td>
            <td class="select-comp" colspan="7">
              <a class="comp-button" href="/">ADD Component</a>
            </td>
          </tr>
          <tr class="items">
            <td class="component">
              <b><a href="/">GPU</a></b>
            </td>
            <td class="select-comp" colspan="7">
              <a class="comp-button" href="/">ADD Component</a>
            </td>
          </tr>
          <tr class="items">
            <td class="component">
              <b><a href="/">RAM</a></b>
            </td>
            <td class="select-comp" colspan="7">
              <a class="comp-button" href="/">ADD Component</a>
            </td>
          </tr>
          <tr class="items">
            <td class="component">
              <b><a href="/">Storage</a></b>
            </td>
            <td class="select-comp" colspan="7">
              <a class="comp-button" href="/">ADD Component</a>
            </td>
          </tr>
          <tr class="items">
            <td class="component">
              <b><a href="/">Power suply</a></b>
            </td>
            <td class="select-comp" colspan="7">
              <a class="comp-button" href="/">ADD Component</a>
            </td>
          </tr>
          </tbody>
        </thread>
      </table>
      </center>
    </div>
  );
}