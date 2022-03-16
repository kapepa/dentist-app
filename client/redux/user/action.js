import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../../helpers/axios.js';

export const receiveUsers = createAsyncThunk('users/fetchUsers', async () => {
  const receive = await Axios.get('/app/users/all').then(res => res.data);
  return receive;
});

export const updateUsers = createAsyncThunk('users/updateUsers', async (obj) => {
  const update = await Axios.put('/app/diagnostics/append',obj).then(res => res.data);
  return update;
});

export const delDiagnostics = createAsyncThunk('diagnostics/delDiagnostics', async (id) => {
  const del = await Axios.delete('/app/diagnostics/delete/'+id).then(res => res.data);
  return del;
});

export const updateDiagnostics = createAsyncThunk('diagnostics/updateDiagnostics', async (obj) => {
  const update = await Axios.put('/app/diagnostics/update',obj).then(res => res.data);
  return update;
});
