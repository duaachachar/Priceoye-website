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
          quantity: 1,
          totalPrice: actions.payload.price * 1, // Calculate initial total price
        };
        state.items.push(newItem);
      }
    },
    increaseQuantity: (state, actions) => {
      const product = state.items.find((item) => item.id === actions.payload.id);
      if (product) {
        product.quantity += 1;
        // Update total price based on the new quantity
        product.totalPrice = product.price * product.quantity;
      }
      console.log(product, "product");
    },
    decreaseQuantity: (state, actions) => {
      const product = state.items.find((item) => item.id === actions.payload.id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        // Update total price based on the new quantity
        product.totalPrice = product.price * product.quantity;
      } else {
        // If quantity is 1 and the user decrements, remove the item from the cart
        state.items = state.items.filter((item) => item.id !== actions.payload.id);
      }
    },

    removeItems: (state, actions) => {
      // Remove item from the state
      state.items = state.items.filter((item) => item.id !== actions.payload.id);
    },
  },
});

export const { addProducts, increaseQuantity, decreaseQuantity, removeItems } =
  productSlice.actions;

export default productSlice.reducer;
