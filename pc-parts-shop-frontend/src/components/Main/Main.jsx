import { Container } from "@mui/material";
import * as React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

export default function Main() {
  return (
    <>
      <Header />
      <Container component="main">
        <Outlet />
      </Container>
    </>
  );
}
