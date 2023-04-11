import { createSlice } from '@reduxjs/toolkit';
import fetchMessage from '../service/fetchMessage';

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    data: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.fulfilled, (state, action) => {
        if (action.payload.success) {
          return { ...state, data: action.payload.data };
        }
        return { ...state, err: action.payload.err.message };
      })
      .addCase(fetchMessage.rejected, (state) => ({
        ...state,
        err: 'There was a problem when fetching your request',
      }));
  },
});

export default messageSlice.reducer;
