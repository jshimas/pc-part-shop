import * as React from "react";
import { useParams } from "react-router-dom";

export default function PartAddPage() {
  const { type, id } = useParams();
  return (
    <div>
      <h3>{type} part edit page, ID: {id}</h3>
    </div>
  );
}
