import { configureStore } from '@reduxjs/toolkit';
import openingSlice from './opening.slice';
import previewSlice from './preview.slice';

const store = configureStore({
  reducer: {
    opening: openingSlice.reducer,
    preview: previewSlice.reducer,
  },
});

export default store;
