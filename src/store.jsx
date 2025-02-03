import { configureStore } from '@reduxjs/toolkit';
import './styles.css';

import cartReducer from './cartSlice';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
