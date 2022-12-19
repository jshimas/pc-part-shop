import { CircularProgress, Typography } from "@mui/material";
import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BuildApi from "../../../apis/BuildApi";
import useAlert from "../../../hooks/useAlert";
import BuildListGrid from "./../../../components/BuildListGrid/BuildListGrid";
import "./BuildListPageStyles.css";

export default function BuildListPage() {
  const [builds, setBuilds] = useState(null);
  const [loading, setLoading] = useState(true);
  const { setAlert } = useAlert();

  useEffect(() => {
    const getBuildList = async () => {
      try {
        const buildsApi = new BuildApi();
        const respone = await buildsApi.getAllBuilds();
        setBuilds(respone.data.builds);
      } catch (err) {
        setAlert(err.response?.data.message);
      }
      setLoading(false);
    };
    getBuildList();
  }, [setAlert]);

  return (
    <>
      <Typography
        variant="h3"
        sx={{ borderBottom: "1px solid gray", pb: 1, my: 4 }}
      >
        Completed builds
      </Typography>
      <div className="middle-section">
        {loading ? <CircularProgress /> : <BuildListGrid builds={builds} />}
      </div>
    </>
  );
}
