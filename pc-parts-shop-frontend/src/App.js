import * as React from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import HomePage from "./pages/HomePage/HomePage";
import PartListPage from "./pages/PartListPage/PartListPage";
import PartPage from "./pages/PartPage/PartPage";
import BuildListPage from "./pages/BuildListPage/BuildListPage";
import BuildPage from "./pages/BuildPage/BuildPage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import PaymentPage from "./pages/ShoppingCartPage/PaymentPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Main from "./components/Main/Main";

function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<HomePage />} />

        <Route path="parts" element={<PartListPage />}>
          <Route path=":partId" element={<PartPage />} />
        </Route>

        <Route path="builds" element={<BuildListPage />}>
          <Route path=":buildId" element={<BuildPage />} />
        </Route>

        <Route path="cart" element={<ShoppingCartPage />} />
        <Route path="payment" element={<PaymentPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>

      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route path="*" element={<p>Page Not Found</p>}></Route>
    </Routes>
  );
}

export default App;
