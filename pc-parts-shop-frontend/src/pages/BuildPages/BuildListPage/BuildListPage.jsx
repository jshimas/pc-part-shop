import { Typography } from "@mui/material";
import * as React from "react";
import BuildListGrid from "./../../../components/BuildListGrid/BuildListGrid";
import "./BuildListPageStyles.css";

export default function BuildListPage() {
  return (
    <>
      <Typography
        variant="h3"
        sx={{ borderBottom: "1px solid gray", pb: 1, my: 4 }}
      >
        Completed builds
      </Typography>
      <div className="middle-section">
        <aside className="filter">
          <h3 className="filter-title">Filters</h3>
        </aside>
        <section>
          <BuildListGrid />
        </section>
      </div>
    </>
  );
}
