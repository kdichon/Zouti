import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice';
import activitySlice from './activitySlice';
import userReducer from './userReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    activity: activitySlice,
    userReducer: userSlice,
  },
});
