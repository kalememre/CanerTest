import {View, Button} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {logutAsync} from '../Auth/authAPI';

const Home = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Button
        title="Logout"
        onPress={() => {
          dispatch(logutAsync());
        }}
      />
    </View>
  );
};

export default Home;
