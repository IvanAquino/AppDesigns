import React from 'react';
import {
  CheckBox,
  Input,
  Layout,
  StyleService,
  Text,
  useStyleSheet,
} from '@ui-kitten/components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SignUpCommunityStackParamList} from '../navigation';
import {Image, ImageStyle, ScrollView, View} from 'react-native';
import {PersonalFile, PrimaryButton} from '../components';

type Props = {
  navigation: NativeStackNavigationProp<
    SignUpCommunityStackParamList,
    'SingUpScreen'
  >;
};
export function SingUpScreen({navigation}: Props) {
  const [activeChecked, setActiveChecked] = React.useState(false);
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
        <Text category="h4">Create Account</Text>

        <View style={styles.imageContainer}>
          <PersonalFile width={160} />
        </View>

        <Input placeholder="Full Name" style={styles.input} />
        <Input placeholder="Email" style={styles.input} />
        <Input placeholder="Password" style={styles.input} />

        <CheckBox
          style={styles.checkbox}
          checked={activeChecked}
          onChange={nextChecked => setActiveChecked(nextChecked)}>
          <Text category="p2">
            I agree to the{' '}
            <Text category="c2" status="info">
              Terms and Conditions
            </Text>
          </Text>
        </CheckBox>

        <PrimaryButton
          style={styles.button}
          onPress={() => navigation.navigate('SingInScreen')}
          label="Sign In"
        />

        <View style={styles.textContainer}>
          <Text category="p2">
            Already have an account?{' '}
            <Text
              category="c2"
              status="info"
              onPress={() => navigation.navigate('SingInScreen')}>
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
  checkbox: {
    marginBottom: 16,
  },
});
