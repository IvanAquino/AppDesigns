import React from 'react';
import {IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ThemeContextProvider} from './context';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './navigation';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ThemeContextProvider>
      <SafeAreaView style={styles.safeAreaView}>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </ThemeContextProvider>
  </>
);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
});
