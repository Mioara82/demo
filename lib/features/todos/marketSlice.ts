import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMarketData = createAsyncThunk(
  "market/fetchData",
  async () => {
    try {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/global"
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

type errorType = null | undefined | string;

const marketSlice = createSlice({
  name: "market",
  initialState: {
    data: null,
    loading: "idle",
    error: null as errorType,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMarketData.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchMarketData.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.data = action.payload;
    });
    builder.addCase(fetchMarketData.rejected, (state, action) => {
      state.loading = "rejected";
      state.error = action.error?.message;
    });
  },
});

export default marketSlice.reducer;
