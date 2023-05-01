import React from 'react';
import {IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ThemeContextProvider} from './context';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './navigation';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ThemeContextProvider>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </ThemeContextProvider>
  </>
);
