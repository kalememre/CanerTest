import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../features/Home/Home';
import {NavigationContainer} from '@react-navigation/native';

const HomeRouter = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeRouter;
