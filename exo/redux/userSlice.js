import {createSlice} from '@reduxjs/toolkit';

const initAuthState = {
  userProfile: [],
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initAuthState,
  reducers: {
    // Edition de user dans le store (mettre à jour le state)
    setUser: (state, action) => {
      // console.log('userSlice_in -> setUser : ', state);
      const newState = {
        ...state,
        isLoggedIn: true,
      };
      // console.log('userSlice_out -> setUser : ', state);
      return newState;
    },
    profileUser: (state, action) => {
      console.log('userSlice_in -> profileUser : ', state);
      const newState = {
        ...state,
        userProfile: action.payload,
      };
      console.log('userSlice_out -> profileUser : ', state);
      return newState;
    },
    resetUser: (state, action) => {
      console.log('userSlice_in -> resetUser : ', state);
      return initAuthState;
    },
  },
});

// Export setUser des actions (le rendre disponible)
export const {setUser, profileUser, resetUser} = userSlice.actions;
export default userSlice.reducer;
