import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
  },
  reducers: {
    addProducts: (state, actions) => {
      const isExist = state.items.find((item) => item.id === actions.payload.id);
      if (isExist) {

      } else {
        const newItem = {
          ...actions.payload,
          quantity: 0,
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

export const { addProducts, increaseQuantity, removeItems } =
  productSlice.actions;

export default productSlice.reducer;
