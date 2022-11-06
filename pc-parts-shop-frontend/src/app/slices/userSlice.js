import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: 1,
    username: "",
    role: "admin",
    accessToken: "",
    cartId: "",
  },
  reducers: {
    userLogin: (state, action) => {
      state = action.payload;
    },
    userLogout: (state, action) => {
      state = { id: 0, username: "", role: "guest" };
    },
    setCartId: (state, action) => {
      return {
        ...state,
        cartId: action.payload,
      };
    },
  },
});

export const { userLogin, userLogout, setCartId } = userSlice.actions;

export const selectRole = (state) => state.user.role;
export const selectId = (state) => state.user.id;
export const getCartId = (state) => state.user.cartId;
export const getAccessToken = (state) => state.user.accessToken;

export default userSlice.reducer;
