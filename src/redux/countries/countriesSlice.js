import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countriesItems: [],
  loading: true,
  error: undefined,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
});

export default countriesSlice.reducer;
