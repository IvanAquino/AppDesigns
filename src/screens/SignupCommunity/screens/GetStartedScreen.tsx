import React from 'react';
import {Layout, StyleService, Text, useStyleSheet} from '@ui-kitten/components';
import {Image, ImageStyle, ScrollView, View} from 'react-native';
import GoalsImage from '../components/GoalsImage';
import {SignUpCommunityStackParamList} from '../navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PrimaryButton} from '../components';

type Props = {
  navigation: NativeStackNavigationProp<
    SignUpCommunityStackParamList,
    'GetStarted'
  >;
};
export function GetStartedScreen({navigation}: Props) {
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
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.imageContainer}>
          <GoalsImage />
        </View>
        <Text category="h6" style={[styles.textCenter]}>
          Welcome to community sign up concept
        </Text>
        <Text category="p1" style={[styles.textCenter]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          accusantium, sequi cupiditate error quisquam veniam eius at aperiam
          nostrum optio.
        </Text>
        <PrimaryButton
          size="large"
          style={styles.button}
          onPress={() => navigation.navigate('SingInScreen')}
          label="Get started"
        />
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  textCenter: {
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    width: '100%',
  },
});
