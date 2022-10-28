import * as React from "react";
import "./BuildStyles.css";

export default function BuildListGridItem({ data, ...props }) {
  return (
    <div className="grid-item" {...props}>
      <p>{data}</p>
    </div>
  );
}
