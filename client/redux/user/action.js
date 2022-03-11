import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../../helpers/axios.js';

export const receiveUsers = createAsyncThunk('users/fetchUsers', async () => {
  const all = await Axios.get('/app/users/all').then(res => res.data);
  return all;
});
