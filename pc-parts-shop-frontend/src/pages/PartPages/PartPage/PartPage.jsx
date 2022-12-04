import * as React from "react";
import { Button } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { selectRole } from "../../../app/slices/userSlice";
import { roles } from "../../../roles";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import { useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";

export default function PartPage() {
  const { type, id } = useParams();

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const role = useSelector(selectRole);

  return (
    <div>
      <h3>
        {type} part page, ID: {id}
      </h3>
      {role === roles.ADMIN && (
        <Button
          variant="outlined"
          startIcon={<RemoveCircleOutlinedIcon />}
          onClick={() => navigate(`${pathname}/remove`)}
        >
          Remove {type.split("-").join(" ")}
        </Button>
      )}

      {role === roles.ADMIN && (
        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          onClick={() => navigate(`${pathname}/edit`)}
        >
          Edit {type.split("-").join(" ")}
        </Button>
      )}
    </div>
  );
}
