import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  loading: false,
};

export const getMessages = createAsyncThunk(
  "fetch/messages",
  async ({ currentId, recieverId }, thunkAPI) => {
    try {
      const res = await fetch(
        `http://localhost:3001/message/${currentId}/${recieverId}`
      );
      return res.json();
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const addMessage = createAsyncThunk(
  "add/messages",
  async ({ from, to, message, owner }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3001/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to,
          message,
        }),
      });
      return res.json();
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMessages.fulfilled, (state, action) => {
        state.messages = action.payload;
      })
      .addCase(addMessage.fulfilled, (state, action) => {
        state.messages.push({
          myself: true,
          message: action.payload.message,
        });
      });
  },
});

export default messagesSlice.reducer;
