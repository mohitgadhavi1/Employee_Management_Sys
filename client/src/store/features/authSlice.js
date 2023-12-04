// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
    // other authentication-related state
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    // other authentication-related reducers
  },
});

export const { setToken } = authSlice.actions;
export default authSlice.reducer;
