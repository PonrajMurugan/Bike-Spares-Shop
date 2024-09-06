import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Redux/cartslice';

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});
