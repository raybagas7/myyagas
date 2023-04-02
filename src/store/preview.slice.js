import { createSlice } from '@reduxjs/toolkit';
import { imageDataPokeCard } from '../utils/imageData';

const previewSlice = createSlice({
  name: 'preview',
  initialState: {
    previewData: imageDataPokeCard(),
    showAnimation: true,
  },
  reducers: {
    changeView(state, actions) {
      state.previewData = actions.payload;
    },
    hideAnimation(state) {
      state.showAnimation = false;
    },
  },
});

export const previewActions = previewSlice.actions;

export default previewSlice;
