import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthenticationApi from "../../apis/AuthenticationAPI";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import useAlert from "../../hooks/useAlert";

export default function SignUp() {
  const { setAlert } = useAlert();
  const navigate = useNavigate();
  const [signedUser, setSignedUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (userData) => {
    setLoading(true);
    setError("");
    const authApi = new AuthenticationApi();
    try {
      const res = await authApi.signup(userData);
      setSignedUser(res.data);
      setAlert("Account created successfully", "success");
    } catch (err) {
      setAlert(err.response.data.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const renderForm = (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 8 }}>
          <DeveloperBoardIcon
            sx={{ display: "inline-block", mr: 2, fontSize: 48 }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: ".2rem",
              display: "inline-block",
            }}
          >
            PC PARTS SHOP
          </Typography>
        </Box>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
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
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                {...register("email", {
                  required: { value: true, message: "Email is required." },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address.",
                  },
                })}
                {...(errors.email && {
                  error: true,
                  helperText: errors.email.message,
                })}
                {...(error && {
                  error: true,
                  helperText: error,
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                {...register("password", {
                  required: { value: true, message: "Password is required." },
                  minLength: {
                    value: 8,
                    message: "Password has to be 8 characters long.",
                  },
                })}
                {...(errors.password && {
                  error: true,
                  helperText: errors.password.message,
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="passwordConfirm"
                label="Password confirm"
                type="password"
                id="passwordConfirm"
                {...register("passwordConfirm", {
                  required: true,
                  validate: (val) => {
                    if (watch("password") !== val) {
                      return "Your passwords do no match";
                    }
                  },
                })}
                {...(errors.passwordConfirm && {
                  error: true,
                  helperText: errors.passwordConfirm.message,
                })}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {loading ? <CircularProgress /> : "Sign Up"}
          </Button>
          <Box sx={{ textAlign: "right" }}>
            <Link to="/login">Already have an account? Login</Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );

  return (
    <Box>
      <Button
        startIcon={<ArrowBackRoundedIcon />}
        onClick={() => navigate("/")}
        sx={{ m: 2 }}
      >
        To Home Page
      </Button>
      {renderForm}
      {signedUser && <Navigate to="/login" replace={true} />}
    </Box>
  );
}
