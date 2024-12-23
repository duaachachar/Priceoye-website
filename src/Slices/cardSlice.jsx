import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCard: null,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {

    setSelectedCard: (state, action) => {
      state.selectedCard = action.payload;
    },

    
    clearSelectedCard: (state) => {
      state.selectedCard = null;
    },
  },

});

export const { setSelectedCard, clearSelectedCard } = cardSlice.actions;

export default cardSlice.reducer;
