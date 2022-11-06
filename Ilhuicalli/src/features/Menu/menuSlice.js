import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: true,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toApear: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.value = !state.value;
    },
  },
});

export const selectMenu = (state) => state.menu.value;

export const { toApear } = menuSlice.actions;

export default menuSlice.reducer;
