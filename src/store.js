import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './componants/CardSection/cartSlice';
import productReducer from './componants/CardSection/Delivery/ProductSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products:productReducer,
  },
});

export default store;