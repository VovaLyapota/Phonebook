import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, onAuthSuccess)
      .addCase(logIn.fulfilled, onAuthSuccess)
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;

        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;

        state.isLoggedIn = false;
      });
  },
});

function onAuthSuccess(state, action) {
  state.user = action.payload.user;
  state.token = action.payload.token;

  state.isLoggedIn = true;
}

const authReducer = authSlice.reducer;

export const { changeFilter } = authSlice.actions;

export default authReducer;
