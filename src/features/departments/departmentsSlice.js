import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departments: [],
  loading: false,
  error: null,
};

export const getDepartments = createAsyncThunk(
  "departments/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("//localhost:3001/dep");
      return res.json();
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const departmentsSlice = createSlice({
  name: "departments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDepartments.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDepartments.fulfilled, (state, action) => {
        state.loading = false;
        state.departments = action.payload;
      })
      .addCase(getDepartments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default departmentsSlice.reducer;
