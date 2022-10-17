import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import AuthenticationAPI from "./AuthenticationAPI";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useSelector } from "react-redux";
import { getAccessToken } from "./../../app/slices/userSlice";

export default function Login() {
  const [loggedUser, setLoggedUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const accToken = useSelector(getAccessToken);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (loginParams) => {
    setIsLoading(true);
    const authApi = new AuthenticationAPI(accToken);
    try {
      const res = await authApi.login(loginParams);
      setLoggedUser(res.data);
      console.log(loggedUser);
    } catch (err) {
      setError(err.response.data.message);
    }
    setIsLoading(false);
    setOpenAlert(true);
  };

  const renderSnackbar = (
    <Snackbar
      open={openAlert}
      autoHideDuration={3000}
      onClose={() => setOpenAlert(false)}
    >
      {error ? (
        <MuiAlert
          onClose={() => setOpenAlert(false)}
          severity="error"
          sx={{ width: "100%" }}
          variant="filled"
        >
          {error}
        </MuiAlert>
      ) : (
        <MuiAlert
          onClose={() => setOpenAlert(false)}
          severity="success"
          sx={{ width: "100%" }}
          variant="filled"
        >
          Welcome, ${loggedUser?.firstName}
        </MuiAlert>
      )}
    </Snackbar>
  );

  const renderForm = (
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
  );

  return (
    <Container component="main" maxWidth="xs">
      {renderSnackbar}
      {isLoading ? <CircularProgress /> : renderForm}
      {loggedUser && <Navigate to="/" replace={true} />}
    </Container>
  );
}
