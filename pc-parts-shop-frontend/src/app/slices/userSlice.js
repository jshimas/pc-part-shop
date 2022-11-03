import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { id: 0, username: "", role: "guest", accessToken: "" },
  reducers: {
    userLogin: (state, action) => {
      state = action.payload;
    },
    userLogout: (state, action) => {
      state = { id: 0, username: "", role: "guest" };
    },
  },
});

export const selectRole = (state) => state.user.role;
export const getAccessToken = (state) => state.user.accessToken;

export default userSlice.reducer;
