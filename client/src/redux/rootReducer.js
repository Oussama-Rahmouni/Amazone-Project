import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  // Add other reducers here if you have any
});

export default rootReducer