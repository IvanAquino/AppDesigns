import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppHeader} from '../components';
import {HomeScreen} from '../screens/Home';

const Stack = createNativeStackNavigator();

export function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: props => AppHeader(props),
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Showcase'}}
      />
    </Stack.Navigator>
  );
}
