import React from 'react';
import {
  Icon,
  IconElement,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {getHeaderTitle} from '@react-navigation/elements';

const BackIcon = (props: any): IconElement => (
  <Icon {...props} name="arrow-back" />
);

export const AppHeader = ({
  navigation,
  back,
  options,
  route,
}: NativeStackHeaderProps) => {
  const title = getHeaderTitle(options, route.name);

  const navigateBack = () => {
    navigation.goBack();
  };

  const backAction = (): React.ReactElement => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  return (
    <TopNavigation
      title={title}
      alignment="center"
      accessoryLeft={back ? backAction : undefined}
    />
  );
};
