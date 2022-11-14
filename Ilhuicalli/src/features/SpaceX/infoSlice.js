/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import getInfoService from './infoService';
import axios from 'axios';

const API_URL = 'https://api.spacexdata.com/v3/dragons';
const initialState = [];

// Obtener datos de la API
export const getInfo = createAsyncThunk('/dragons', async () => {
  try {
    const response = await axios.get(API_URL);
    return [...response.data];
  } catch (error) {
    const message = {
      msg: `No se va a poder desde el Slice, ${error}`,
    };
    return message;
  }
});

export const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    // eslint-disable-next-line arrow-body-style
    builder.addCase(getInfo.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectInfo = (state) => state.info;

export default infoSlice.reducer;
