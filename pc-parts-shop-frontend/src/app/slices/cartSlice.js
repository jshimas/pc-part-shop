import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CartApi from "../../apis/CartApi";

const initialState = {
  id: null,
  items: [],
  status: "idle",
  error: null,
  checkoutStatus: null,
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
      const item = action.payload;
      const existingItem = state.items.find((el) => el.Part.id === item.partId);
      if (!existingItem) {
        state.items.push(item);
      } else {
        existingItem.quantity++;
      }
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    deleteAllItems(state, action) {
      return {
        ...state,
        items: [],
      };
    },
    resetCartStatus(state, action) {
      return {
        ...state,
        status: "idle",
      };
    },
    setCheckoutStatus(state, action) {
      return {
        ...state,
        checkoutStatus: action.payload,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchItems.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.id = action.payload.cartId;
        state.items = action.payload.items;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  increaseQuantity,
  decreaseQuantity,
  addItem,
  deleteItem,
  resetCartStatus,
  setCheckoutStatus,
  deleteAllItems,
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectAllItems = (state) => state.cart.items;
