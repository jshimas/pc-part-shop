import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthenticationApi from "../../apis/AuthenticationApi";

const initialState = {
  role: "guest",
  id: null,
  fullName: null,
  email: null,
  status: "idle",
  error: null,
};

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const authApi = new AuthenticationApi();
  const response = await authApi.getCurrentUser();
  return response.data.currentUser;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin(state, action) {
      return {
        ...state,
        id: action.payload.id,
        role: action.payload.role,
        fullName: action.payload.fullName,
        email: action.payload.email,
      };
    },
    userLogout(state, action) {
      return {
        ...state,
        id: undefined,
        fullName: undefined,
        email: undefined,
        role: "guest",
      };
    },

    setCartId(state, action) {
      return {
        ...state,
        cartId: action.payload,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (!!action.payload) {
          state.role = action.payload.role;
          state.id = action.payload.id;
          state.fullName = action.payload.fullName;
          state.email = action.payload.email;
        }
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { userLogin, userLogout, setCartId } = userSlice.actions;

export default userSlice.reducer;

export const selectRole = (state) => state.user.role;
export const selectId = (state) => state.user.id;
