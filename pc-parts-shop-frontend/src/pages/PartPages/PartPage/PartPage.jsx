import * as React from "react";
import { useParams } from "react-router-dom";

export default function PartPage() {
  const { type, id } = useParams();

  return (
    <div>
      <h3>
        {type} part page, ID: {id}
      </h3>
    </div>
  );
}
