import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import AuthenticationApi from "../../apis/AuthenticationAPI";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch } from "react-redux";
import { userLogin } from "./../../app/slices/userSlice";
import { resetCartStatus } from "../../app/slices/cartSlice";
import useAlert from "../../hooks/useAlert";

export default function Login() {
  const { setAlert } = useAlert();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (loginParams) => {
    setIsLoading(true);
    const authApi = new AuthenticationApi();
    try {
      const res = await authApi.login(loginParams);
      console.log("login response: ", res.data);
      dispatch(userLogin(res.data.user));
      dispatch(resetCartStatus());
      setAlert(`Welcome, ${res.data.user?.fullName.split(" ")[0]}!`, "info");
      navigate("/");
    } catch (err) {
      setAlert(err.response?.data.message, "error");
    }
    setIsLoading(false);
  };

  const renderForm = (
    <>
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
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            {...register("password", {
              required: { value: true, message: "Password is required." },
            })}
            {...(errors.password && {
              error: true,
              helperText: errors.password.message,
            })}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Box sx={{ textAlign: "right" }}>
            <Link to="/signup">Don't have an account? Sign Up</Link>
          </Box>
        </Box>
      </Box>
    </>
  );

  return (
    <>
      <Button
        startIcon={<ArrowBackRoundedIcon />}
        onClick={() => navigate("/")}
        sx={{ m: 2 }}
      >
        To Home Page
      </Button>
      <Container component="main" maxWidth="xs">
        {isLoading ? <CircularProgress /> : renderForm}
      </Container>
    </>
  );
}
