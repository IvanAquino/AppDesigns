import React from 'react';
import {StyleService, useStyleSheet} from '@ui-kitten/components';
import {SafeAreaView} from 'react-native';

type Props = {
  children: React.ReactNode;
};
export function SafeAreaContent({children}: Props) {
  const styles = useStyleSheet(styleSheet);

  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
}

const styleSheet = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: 'color-basic-100',
  },
});
