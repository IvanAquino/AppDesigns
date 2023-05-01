import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  Card,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import React from 'react';
import {ScrollView} from 'react-native';
import {MainStackParamList} from '../../navigation';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList, 'Home'>;
};
export function HomeScreen({navigation}: Props) {
  const styles = useStyleSheet(styleSheet);

  return (
    <Layout style={styles.container}>
      <ScrollView contentContainerStyle={styleSheet.scrollView}>
        <Card
          style={styles.card}
          appearance="filled"
          onPress={() => navigation.navigate('SignUpCommunity')}>
          <Text>Sign up community</Text>
        </Card>
      </ScrollView>
    </Layout>
  );
}

const styleSheet = StyleService.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    padding: 16,
  },
  card: {
    backgroundColor: 'color-basic-100',
    width: '100%',
  },
});
