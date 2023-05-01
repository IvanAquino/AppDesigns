import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppHeader} from '../components';
import {HomeScreen} from '../screens/Home';
import {SignUpCommunityStack} from '../screens/SignupCommunity/navigation';

export type MainStackParamList = {
  Home: undefined;
  SignUpCommunity: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

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
      <Stack.Screen
        name="SignUpCommunity"
        component={SignUpCommunityStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
