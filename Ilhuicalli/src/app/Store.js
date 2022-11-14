import { configureStore } from '@reduxjs/toolkit';
import langReducer from '../features/Language/langSlice';
import menuReducer from '../features/Menu/menuSlice';
import infoReducer from '../features/SpaceX/infoSlice';

const store = configureStore({
  reducer: {
    lang: langReducer,
    menu: menuReducer,
    info: infoReducer,
  },
});

export default store;
