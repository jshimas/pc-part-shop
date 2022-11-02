import * as React from "react";
import BuildListGrid from "./../../../components/BuildListGrid/BuildListGrid";
import "./BuildListPageStyles.css";

export default function BuildListPage() {
  return (
    <>
      <h2 className="main-header">Completed Builds</h2>
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
