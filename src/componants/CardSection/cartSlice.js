import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedItem: null, 
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
