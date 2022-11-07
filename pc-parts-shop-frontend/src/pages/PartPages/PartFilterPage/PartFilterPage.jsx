import * as React from "react";
import { useParams } from "react-router-dom";

export default function PartAddPage() {
  const { type } = useParams();
  return (
    <div>
      <h3>{type} part filtering page</h3>
    </div>
  );
}
