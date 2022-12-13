import * as React from "react";
import { useParams } from "react-router-dom";
import { Box, Button, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PartsApi from "../../../apis/PartsApi";
import { useEffect, useState } from "react";

export default function PartAddPage() {
  const [error, setError] = useState(null);

  const { type } = useParams();

  const testSQL = `INSERT INTO parts (name, type, manufacturer, releaseDate,price,details,createdAt,updatedAt)
  VALUES ('test','test','test','test',1,'test','test','test');
  `;
  const partsApi1 = new PartsApi();
  //      const response1 =  partsApi1.addPart();

  // addPartTest(() => {
  //   const addPartTestTest = async () => {
  //     try {
  //       const partsApi1 = new PartsApi();
  //       const response1 = await partsApi1.addPart();
  //       setError(null);
  //     } catch (err) {
  //       setError(err.response.data.message);
  //     }
  //   };
  //   //addPartTestTest();
  // }); //, [testSQL]);

  return (
    <div>
      <h3>{type} add page</h3>(
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={() => partsApi1.addPart()}
      >
        Add {type.split("-").join(" ")}
      </Button>
      )
    </div>
  );
}
