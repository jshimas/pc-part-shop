import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { id: 0, username: "", role: "guest" },
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

export default userSlice.reducer;
