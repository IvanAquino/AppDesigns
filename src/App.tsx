import React from 'react';
import {IconRegistry, Layout, Text} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ThemeContextProvider} from './context';
import {SafeAreaView, StyleSheet} from 'react-native';

const HomeScreen = () => (
  <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text category="h1">HOME</Text>
  </Layout>
);

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ThemeContextProvider>
      <SafeAreaView style={styles.safeAreaView}>
        <HomeScreen />
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
