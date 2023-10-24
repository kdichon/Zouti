import {createSlice} from '@reduxjs/toolkit';

const initActivityState = {
  isLoggedIn: false,
};

export const activitySlice = createSlice({
  name: 'activity',
  initialState: initActivityState,
  reducers: {
    seance: (state, action) => {
      return state;
    },
  },
});

// Export setUser des actions (le rendre disponible)
export const {seance} = activitySlice.actions;
export default activitySlice.reducer;
