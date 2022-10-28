import * as React from "react";
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
import PartAddPage from "./pages/PartAddPage/PartAddPage";
import BuildAddPage from "./pages/BuildAddPage/BuildAddPage";

function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<HomePage />} />

        <Route path="parts">
          <Route index element={<PartListPage />} />
          <Route path=":id" element={<PartPage />} />
          <Route path="new" element={<PartAddPage />} />
        </Route>

        <Route path="builds">
          <Route index element={<BuildListPage />} />
          <Route path=":id" element={<BuildPage />} />
          <Route path="new" element={<BuildAddPage />} />
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
