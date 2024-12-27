import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedItem: null, // To store the currently selected item
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { setSelectedItem } = cartSlice.actions;

export default cartSlice.reducer;
