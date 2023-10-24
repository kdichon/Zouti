import {createSlice} from '@reduxjs/toolkit';

// const initActivityState = {
//   isLoggedIn: false,
// };

export const user = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    isUser: (state, action) => {
      return action.payload;
    },
    notUser: (state, action) => {
      return null;
    },
  },
});

// Export setUser des actions (le rendre disponible)
export const {isUser, notUser} = user.actions;
export default user.reducer;
