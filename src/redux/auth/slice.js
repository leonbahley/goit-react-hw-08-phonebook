import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const handleRejected = (state, action) => {
  state.error = 'Something went wrong. Check your email and password';
};

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    [logIn.rejected]: handleRejected,
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null, password: null };
      state.isLoggedIn = false;
      state.token = null;
    },
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.error = null;
    },
    [refreshUser.rejected](state) {
      state.isRefreshing = false;
      state.error = null;
    },
  },
});

export const authReducer = authSlice.reducer;
