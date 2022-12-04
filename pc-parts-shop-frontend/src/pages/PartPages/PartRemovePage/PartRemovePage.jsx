import * as React from "react";
import { Button } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { selectRole } from "../../../app/slices/userSlice";
import { roles } from "../../../roles";

import { useSelector } from "react-redux";

export default function PartRemovePage() {
  const { type, id } = useParams();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const role = useSelector(selectRole);

  return (
    <div>
      <h3>
        {type} Do you wish to remove the part: ID: {id}
        {role === roles.ADMIN && (
          <Button
            variant="outlined"
            onClick={() => navigate(`${pathname}/edit`)}
          >
            Yes
          </Button>
        )}
        {role === roles.ADMIN && (
          <Button
            variant="outlined"
            onClick={() => navigate(`${pathname}/edit`)}
          >
            No
          </Button>
        )}
      </h3>
    </div>
  );
}
