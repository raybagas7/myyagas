import { createSlice } from '@reduxjs/toolkit';
import { imageDataPokeCard } from '../utils/imageData';

const previewSlice = createSlice({
  name: 'preview',
  initialState: {
    previewData: imageDataPokeCard(),
  },
  reducers: {
    changeView(state, actions) {
      state.previewData = actions.payload;
    },
  },
});

export const previewActions = previewSlice.actions;

export default previewSlice;
