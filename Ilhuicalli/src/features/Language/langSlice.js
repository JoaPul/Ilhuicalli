/* eslint-disable no-param-reassign */
// createAsyncThunk para peticiones asyncronas
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: true,
};

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    toChange: (state) => {
      state.value = !state.value;
    },
  },
  // para funciones asyncronas
  extraReducers: () => { },
});

export const selectLang = (state) => state.lang.value;

export const { toChange } = langSlice.actions;

export default langSlice.reducer;
