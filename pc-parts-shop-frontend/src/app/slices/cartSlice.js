import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CartApi from "../../apis/CartApi";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchItems = createAsyncThunk(
  "cart/fecthItems",
  async (userId) => {
    const cartApi = new CartApi();
    const response = await cartApi.getCart(userId);
    return response.data;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.quantity++;
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) item.quantity--;
    },
    addItem(state, action) {
      state.items = state.items.concat(action.payload);
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => action.payload !== item.id);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchItems.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.items;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { increaseQuantity, decreaseQuantity, addItem, deleteItem } =
  cartSlice.actions;

export default cartSlice.reducer;

export const selectAllItems = (state) => state.cart.items;
