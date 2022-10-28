import * as React from "react";
import { useParams } from "react-router-dom";

export default function BuildPage() {
  const { id } = useParams();
  return (
    <div>
      <h3>Build Page. Build ID: {id}</h3>
    </div>
  );
}
