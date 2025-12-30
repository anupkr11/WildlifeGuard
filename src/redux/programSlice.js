import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPrograms = createAsyncThunk(
  "programs/fetchPrograms",
  async () => {
    const res = await fetch("https://wildlifeguard.onrender.com/api/program");
    return res.json();
  }
);

const programSlice = createSlice({
  name: "programs",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrograms.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPrograms.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPrograms.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default programSlice.reducer;
