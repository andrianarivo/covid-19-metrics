import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getCountries = createAsyncThunk('countries/getCountries', async ({ url }, thunkAPI) => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message());
  }
});

const initialState = {
  countryItems: [],
  loading: true,
  error: undefined,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => ({
        ...state,
        loading: true,
        error: undefined,
      }))
      .addCase(getCountries.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        error: undefined,
        countryItems: action.payload,
      }))
      .addCase(getCountries.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }));
  },
});

export { getCountries };

export default countriesSlice.reducer;
