import { configureStore } from '@reduxjs/toolkit';
import langReducer from '../features/Language/langSlice';

const store = configureStore({
  reducer: {
    lang: langReducer,
  },
});

export default store;
