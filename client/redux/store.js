import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './user/usersSlice';

export default configureStore({
  reducer: {
    users: usersReducer
  }
})