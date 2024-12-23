// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices/userSlice';
import cardReducer from './Slices/cardSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    card: cardReducer, 
  },
});
