import { createSlice } from '@reduxjs/toolkit';
import { receiveUsers, updateUsers, delDiagnostics } from './action.js';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: [],
    loader: false,
  },
  extraReducers: {
    [receiveUsers.pending]: (state, action) => {
      state.loader = true;
    },
    [receiveUsers.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.loader = false;
    },
    [updateUsers.pending]: (state, action) => {
      state.loader = true;
    },
    [updateUsers.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.loader = false;
    },
    [delDiagnostics.pending]: (state, action) => {
      state.loader = true;
    },
    [delDiagnostics.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.loader = false;
    }
  }
});

export const {  } = usersSlice.actions;

export default usersSlice.reducer;