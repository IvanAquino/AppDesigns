/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GetStartedScreen, SingInScreen, SingUpScreen} from '../screens';
import {ThemeContext} from '../../../context';

export type SignUpCommunityStackParamList = {
  GetStarted: undefined;
  SingInScreen: undefined;
  SingUpScreen: undefined;
};

const Stack = createNativeStackNavigator<SignUpCommunityStackParamList>();

export const SignUpCommunityStack = () => {
  const {setThemeByName, setDefaultTheme} = useContext(ThemeContext);

  useEffect(() => {
    setThemeByName('SIGNUP_COMMUNITY');

    return () => {
      setDefaultTheme();
    };
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="GetStarted">
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
      <Stack.Screen name="SingInScreen" component={SingInScreen} />
      <Stack.Screen name="SingUpScreen" component={SingUpScreen} />
    </Stack.Navigator>
  );
};
