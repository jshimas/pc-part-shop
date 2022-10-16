import * as React from "react";
import { Container } from "@mui/material";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route
            index
            element={
              <Container>
                <p>sveiki</p>
              </Container>
            }
          />
          <Route path="parts" element={<p>Parts Page</p>} />
        </Route>

        <Route exact path="/login" element={<Login />} />
        {/* <Route exact path="/login" element={<p>labas</p>} /> */}
        <Route exact path="/signup" element={<Signup />} />
        <Route path="*" element={<p>Page Not Found</p>}></Route>
      </Routes>
    </>
  );
}

export default App;
