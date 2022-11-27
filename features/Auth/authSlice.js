import {createSlice} from '@reduxjs/toolkit';
import {initAsync, loginAsync, logutAsync} from './authAPI';
import EncryptedStorage from 'react-native-encrypted-storage';
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    UserId: null,
    Email: null,
    Password: null,
    Token: null,
    isLoggedIn: false,
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        const {userId, email, password, token} = action.payload;
        state.UserId = userId;
        state.Email = email;
        state.Password = password;
        state.Token = token;
        state.loading = false;
        state.error = null;
        state.isLoggedIn = true;
        EncryptedStorage.setItem('UserId', userId.toString());
        console.log('type', state);
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(loginAsync.pending, state => {
        state.loading = true;
      })
      .addCase(logutAsync.fulfilled, state => {
        state.UserId = null;
        state.loading = false;
        state.isLoggedIn = false;
      })
      .addCase(initAsync.fulfilled, (state, action) => {
        state.loading = true;
        state.isLoggedIn = action.payload;
      });
  },
});

export default authSlice.reducer;
