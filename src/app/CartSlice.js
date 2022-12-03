import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  cartState: false,
  cartItems: []
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      state.cartItems = push(action.payload);
      
    }
  }
});

export const { setOpenCart, setCloseCart } = CartSlice.actions;

export default CartSlice.reducer;