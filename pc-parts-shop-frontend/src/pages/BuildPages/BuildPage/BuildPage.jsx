import * as React from "react";
import { useParams } from "react-router-dom";
import  "./buildPage.css";
import { Typography } from "@mui/material";

export default function BuildPage() {
  const { id } = useParams();
  return (
    <div>
      <div>
        <center>
          <Typography
          variant="h3"
          sx={{ borderBottom: "1px solid gray", pb: 1, my: 4 }}
          >
            Build Page. Build ID: {id}
          </Typography>
        </center>
      </div>
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