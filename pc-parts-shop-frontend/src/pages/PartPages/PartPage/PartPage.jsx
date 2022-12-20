import * as React from "react";
import { Button } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { selectRole } from "../../../app/slices/userSlice";
import { roles } from "../../../roles";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import { useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import PartsApi from "../../../apis/PartsApi";
import { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import PartDetails from "../../../components/PartDetails/PartDetails";

export default function PartPage() {
  const { type, id } = useParams();
  const [loading, setLoading] = useState(true);
  const [mainPart, setMainPart] = useState(null);
  const [secondaryPart, setSecondaryPart] = useState(null);
  const [error, setError] = useState(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const role = useSelector(selectRole);

  useEffect(() => {
    const retrievePart = async () => {
      try {
        const partsApi = new PartsApi();
        const response = await partsApi.getOnePart(id, type);
        setMainPart(response.data.mainPart);
        setSecondaryPart(response.data.secondaryPart);

        setError(null);
      } catch (err) {
        console.log(err);
        setMainPart(null);
        setSecondaryPart(null);
      }
      setLoading(false);
    };
    retrievePart();
  }, [id, type]);

  // const retrievePart = async () => {
  //   try {
  //     const partsApi = new PartsApi();
  //     const response = await partsApi.getPartsByType(type);
  //     setPart(response.data.mainPart);
  //     //console.log(name);
  //   } catch (err) {}
  // };

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <div>
          <h1 className="">{mainPart.name} </h1>
          <h2>Manufactured by {mainPart.manufacturer}</h2>
          <PartDetails mainPart={mainPart} secondaryPart={secondaryPart} />
        </div>
      )}
    </div>
  );
}
