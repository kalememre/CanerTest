import React, {useEffect} from 'react';
import HomeRouter from './HomeRouter';
import LoginRouter from './LoginRouter';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useDispatch, useSelector} from 'react-redux';
import {initAsync} from '../features/Auth/authAPI';
const Router = () => {
  const authStore = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    EncryptedStorage.getItem('UserId').then(value => {
      if (value !== undefined) {
        dispatch(initAsync(true));
      } else {
        dispatch(initAsync(false));
      }
    });
  }, [dispatch]);
  return authStore.isLoggedIn ? <HomeRouter /> : <LoginRouter />;
};

export default Router;
