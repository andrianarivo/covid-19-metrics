import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getContinents = createAsyncThunk('continents/getContinents', async ({ url }, thunkAPI) => {
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(`Oops ! An error occurred... 
${e.message}`);
  }
});

const initialState = {
  continentItems: [],
  loading: true,
  error: undefined,
};

const continentsSlice = createSlice({
  name: 'continent',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getContinents.pending, (state) => ({
        ...state,
        loading: true,
        error: undefined,
      }))
      .addCase(getContinents.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        error: undefined,
        continentItems: action.payload,
      }))
      .addCase(getContinents.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.payload,
      }));
  },
});

export { getContinents };

export default continentsSlice.reducer;
