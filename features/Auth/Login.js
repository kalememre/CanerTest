import {View, Button} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {loginAsync} from './authAPI';

const Login = () => {
  const dispatch = useDispatch();
  return (
    <View style={{backgroundColor: 'red', height: '100%'}}>
      <Button
        title="Login"
        onPress={() => {
          dispatch(loginAsync());
        }}
      />
    </View>
  );
};

export default Login;
