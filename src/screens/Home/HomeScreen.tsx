import {Layout, StyleService, Text, useStyleSheet} from '@ui-kitten/components';
import React from 'react';

export function HomeScreen() {
  const styles = useStyleSheet(styleSheet);

  return (
    <Layout style={styles.container}>
      <Text>HYola</Text>
    </Layout>
  );
}

const styleSheet = StyleService.create({
  container: {
    flex: 1,
  },
});
