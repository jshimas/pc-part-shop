import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthenticationApi from "../../apis/AuthenticationAPI";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import useAlert from "../../hooks/useAlert";

export default function ProfileEditPage() {
    const { setAlert } = useAlert();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [userData, setUserData] = useState({});

    useEffect(() => {
    const fetchUserData = async () => {
      const authApi = new AuthenticationApi();
      const res = await authApi.getCurrentUser();
      console.log(res.data.currentUser);
      setUserData(res.data.currentUser);
    };
    fetchUserData();
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (userData) => {
    const authApi = new AuthenticationApi();
    const res = await authApi.getCurrentUser();
    userData.email = res.data.currentUser.email;
    setLoading(true);
    setError("");
    try {
      const res = await authApi.update(userData);
      setAlert("Account updated successfully", "success");
    } catch (err) {
      setAlert(err.response.data.message, "error");
    } finally {
      setLoading(false);
    }
  };
  
    const renderForm = (
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
    <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            defaultValue={userData.firstName}
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            {...register("firstName", {
              required: {
                value: true,
                message: "First name is required.",
              },
            })}
            {...(errors.firstName && {
              error: true,
              helperText: errors.firstName.message,
            })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            defaultValue={userData.lastName}
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            {...register("lastName", {
              required: {
                value: true,
                message: "Last name is required.",
              },
            })}
            {...(errors.lastName && {
              error: true,
              helperText: errors.lastName.message,
            })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            defaultValue={userData.phone}
            required
            fullWidth
            id="phone"
            label="Phone number"
            name="phone"
            autoComplete="phone"
            {...register("phone", {
              required: { value: true, message: "Phone is required." },
              pattern: {
                value: /^(\+[0-9]{2})?[0-9]{9}$/,
                message: "Invalid Phone number.",
              },
            })}
            {...(errors.phone && {
              error: true,
              helperText: errors.phone.message,
            })}
            {...(error && {
              error: true,
              helperText: error,
            })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            defaultValue={userData.birthDate}
            required
            fullWidth
            InputLabelProps={{ shrink: true }}
            type="date"
            id="date"
            label="Birthday"
            name="date"
            autoComplete="date"
            {...register("date", {
              required: { value: true, message: "Birthdate is required." },
            })}
            {...(errors.date && {
              error: true,
              helperText: errors.date.message,
            })}
          />
        </Grid>
        <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {loading ? <CircularProgress /> : "Confirm"}
        </Button>
    </Grid>
    </Box>
    );

    return (
        <Box>
          <Button
            startIcon={<ArrowBackRoundedIcon />}
            onClick={() => navigate("/profile")}
            sx={{ m: 2 }}
          >
            To Profile
          </Button>
          {renderForm}
        </Box>
      );


};

