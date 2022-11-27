import {createAsyncThunk} from '@reduxjs/toolkit';
import EncryptedStorage from 'react-native-encrypted-storage';
export const loginAsync = createAsyncThunk(
  'auth/login',
  async (userData, {rejectWithValue}) => {
    return {
      userId: 1,
      email: 'asd@asd.com',
      password: '123456',
      token: 'dummy-token',
    };
  },
);

export const logutAsync = createAsyncThunk(
  'auth/logout',
  async (userData, {rejectWithValue}) => {
    EncryptedStorage.clear();
    return null;
  },
);

export const initAsync = createAsyncThunk(
  'auth/init',
  async (isLoggedIn, {rejectWithValue}) => {
    return isLoggedIn;
  },
);
