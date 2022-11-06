import { configureStore } from '@reduxjs/toolkit';
import langReducer from '../features/Language/langSlice';
import menuReducer from '../features/Menu/menuSlice';

const store = configureStore({
  reducer: {
    lang: langReducer,
    menu: menuReducer,
  },
});

export default store;
