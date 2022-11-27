import React, {useEffect} from 'react';
import HomeRouter from './HomeRouter';
import LoginRouter from './LoginRouter';
import EncryptedStorage from 'react-native-encrypted-storage';
import {useDispatch, useSelector} from 'react-redux';
import {initAsync} from '../features/Auth/authAPI';
import {ActivityIndicator, View} from 'react-native';

const Router = () => {
  const {isLoggedIn, getTokenLoading} = useSelector(state => state.auth);
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

  if (getTokenLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return isLoggedIn ? <HomeRouter /> : <LoginRouter />;
};

export default Router;
