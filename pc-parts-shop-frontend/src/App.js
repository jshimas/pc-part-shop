import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import HomePage from "./pages/HomePage/HomePage";
import PartListPage from "./pages/PartPages/PartListPage/PartsListPage";
import PartPage from "./pages/PartPages/PartPage/PartPage";
import PartAddPage from "./pages/PartPages/PartAddPage/PartAddPage";
import BuildListPage from "./pages/BuildPages/BuildListPage/BuildListPage";
import BuildPage from "./pages/BuildPages/BuildPage/BuildPage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Main from "./components/Main/Main";
import BuildAddPage from "./pages/BuildPages/BuildAddPage/BuildAddPage";
import AccountsPage from "./pages/AccountsPage/AccountsPage";

function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<HomePage />} />

        <Route path="parts/:type">
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
        <Route path="profile" element={<ProfilePage />} />
        <Route path="accounts" element={<AccountsPage />} />
      </Route>

      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route path="*" element={<p>Page Not Found</p>}></Route>
    </Routes>
  );
}

export default App;
