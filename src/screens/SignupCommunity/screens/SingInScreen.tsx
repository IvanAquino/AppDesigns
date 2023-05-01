import React from 'react';
import {
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SignUpCommunityStackParamList} from '../navigation';
import {Image, ImageStyle, ScrollView, View} from 'react-native';
import {PrimaryButton, Welcoming} from '../components';

type Props = {
  navigation: NativeStackNavigationProp<
    SignUpCommunityStackParamList,
    'SingInScreen'
  >;
};
export function SingInScreen({navigation}: Props) {
  const styles = useStyleSheet(styleSheet);

  return (
    <Layout style={styles.layout}>
      <Image
        source={require('../../../assets/ellipse.png')}
        style={styles.circle1 as ImageStyle}
      />
      <Image
        source={require('../../../assets/ellipse.png')}
        style={styles.circle2 as ImageStyle}
      />
      <ScrollView contentContainerStyle={styleSheet.scrollView}>
        <Text category="h4">Welcome back!</Text>

        <View style={styles.imageContainer}>
          <Welcoming width={130} />
        </View>

        <Input placeholder="Email" style={styles.input} />
        <Input placeholder="Password" style={styles.input} />

        <View style={styles.textContainer}>
          <Text category="p2">
            Forgot Password?{' '}
            <Text
              category="c2"
              status="info"
              onPress={() => navigation.navigate('SingUpScreen')}>
              Click here
            </Text>
          </Text>
        </View>

        <PrimaryButton
          style={styles.button}
          onPress={() => navigation.navigate('SingUpScreen')}
          label="Sign In"
        />

        <View style={styles.textContainer}>
          <Text category="p2">
            Don't have an account?{' '}
            <Text
              category="c2"
              status="info"
              onPress={() => navigation.navigate('SingUpScreen')}>
              Sign Up
            </Text>
          </Text>
        </View>
      </ScrollView>
    </Layout>
  );
}

const styleSheet = StyleService.create({
  circle1: {
    position: 'absolute',
    top: -75,
    left: -10,
    width: 150,
    height: 150,
  },
  circle2: {
    position: 'absolute',
    top: -10,
    left: -75,
    width: 150,
    height: 150,
  },
  layout: {
    flex: 1,
    overflow: 'hidden',
  },
  scrollView: {
    flexGrow: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    paddingVertical: 32,
  },
  input: {
    backgroundColor: 'color-basic-100',
    borderWidth: 0,
    borderRadius: 13,
    marginBottom: 16,
  },
  button: {
    width: '100%',
  },
  textContainer: {
    marginVertical: 16,
  },
});
