import { createSlice } from '@reduxjs/toolkit';

const openingSlice = createSlice({
  name: 'opening',
  initialState: {
    lineShrink: false,
    circlePop: false,
    openGate: false,
    opening: false,
  },

  reducers: {
    toggleFirstOpen(state) {
      state.lineShrink = true;
      state.circlePop = true;
    },

    toggleOpenGate(state) {
      state.openGate = true;
    },

    toggleOpening(state) {
      state.opening = true;
    },
  },
});

export const openingActions = openingSlice.actions;

export default openingSlice;
