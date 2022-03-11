import { createSlice } from '@reduxjs/toolkit';
import { receiveUsers } from './action.js';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    loader: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(receiveUsers.pending, (state, action) => {
        state.loader = true;
      })
      .addCase(receiveUsers.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loader = false;
      })
    }
});

export const { } = usersSlice.actions;

export default usersSlice.reducer;