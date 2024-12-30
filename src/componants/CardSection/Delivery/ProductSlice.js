import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    isToast: false,
    IsProductAdd: false,
  },
  reducers: {
    addProducts: (state, actions) => {
      const isExist = state.items.find((item) => item.id === actions.payload.id);
      if (isExist) {
        state.isToast = true; // Show toast if product already exists
      } else {
        state.isToast = false;
        state.IsProductAdd = true;
        // Add new item with initial quantity of 1 and calculate totalPrice
        const newItem = {
          ...actions.payload,
          quantity: 0,
          totalPrice: actions.payload.price * 1, // Calculate initial total price
        };
        state.items.push(newItem);
      }
    },
    increaseQuantity: (state, actions) => {
      const product = state.items.find((item) => item.id === actions.payload.id);
      if (product) {
        product.quantity += 1;
      }
      console.log(product, "product");
    },
    removeItems: (state, actions) => {
      state.items = state.items.filter((item) => item.id !== actions.payload.id);
    },
  },
});

export const { addProducts, increaseQuantity, decreaseQuantity, removeItems } =
  productSlice.actions;

export default productSlice.reducer;
