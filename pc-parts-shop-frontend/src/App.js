import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Signup from "./pages/Authentication/Signup";
import HomePage from "./pages/HomePage/HomePage";
import PartListPage from "./pages/PartPages/PartListPage/PartsListPage";
import PartPage from "./pages/PartPages/PartPage/PartPage";
import PartAddPage from "./pages/PartPages/PartAddPage/PartAddPage";
import PartRemovePage from "./pages/PartPages/PartRemovePage/PartRemovePage";
import PartEditPage from "./pages/PartPages/PartEditPage/PartEditPage";
import PartFilterPage from "./pages/PartPages/PartFilterPage/PartFilterPage";
import BuildListPage from "./pages/BuildPages/BuildListPage/BuildListPage";
import BuildPage from "./pages/BuildPages/BuildPage/BuildPage";
import ShoppingCartPage from "./pages/ShoppingCartPage/ShoppingCartPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import Main from "./components/Main/Main";
import BuildAddPage from "./pages/BuildPages/BuildAddPage/BuildAddPage";
import AccountsPage from "./pages/AccountsPage/AccountsPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "./app/slices/cartSlice";
import { fetchUser } from "./app/slices/userSlice";
import SuccessfulCheckoutPage from "./pages/ShoppingCartPage/SuccessfulCheckoutPage";
import AlertPopup from "./components/AlertPopup/AlertPopup";

function App() {
  const dispatch = useDispatch();
  const itemsStatus = useSelector((state) => state.cart.status);
  const userStatus = useSelector((state) => state.user.status);
  const userId = useSelector((state) => state.user.id);
  const userRole = useSelector((state) => state.user.role);

  useEffect(() => {
    const getCurrentUser = () => {
      if (userStatus === "idle") {
        dispatch(fetchUser());
      }
    };
    const getItems = () => {
      if (itemsStatus === "idle" && !!userId) {
        dispatch(fetchItems(userId));
      }
    };

    getCurrentUser();
    getItems();
  }, [itemsStatus, userStatus, dispatch, userId, userRole]);

  return (
    <>
      <AlertPopup />
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<HomePage />} />

          <Route path="parts/:type">
            <Route index element={<PartListPage />} />
            <Route path="new" element={<PartAddPage />} />
            <Route path="filter" element={<PartFilterPage />} />
            <Route path=":id">
              <Route index element={<PartPage />} />
              <Route path="remove" element={<PartRemovePage />} />
              <Route path="edit" element={<PartEditPage />} />
            </Route>
          </Route>

          <Route path="builds">
            <Route index element={<BuildListPage />} />
            <Route path=":id" element={<BuildPage />} />
            <Route path="new" element={<BuildAddPage />} />
          </Route>

          <Route path="cart" element={<ShoppingCartPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="accounts" element={<AccountsPage />} />
          <Route path="success" element={<SuccessfulCheckoutPage />} />
        </Route>

        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="*" element={<p>Page Not Found</p>}></Route>
      </Routes>
    </>
  );
}

export default App;
