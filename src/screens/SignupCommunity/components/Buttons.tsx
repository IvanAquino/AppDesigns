import React from 'react';
import {Button, StyleService, useStyleSheet} from '@ui-kitten/components';
import {RenderProp} from '@ui-kitten/components/devsupport';
import {StyleProp, ViewStyle} from 'react-native';
import {ImageProps} from 'react-native-svg';

type BasicButtonProps = {
  iconLeft?: RenderProp<Partial<ImageProps>>;
  iconRight?: RenderProp<Partial<ImageProps>>;
  style?: StyleProp<ViewStyle>;
  label?: string;
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'giant';
  appearance?: 'filled' | 'outline' | 'ghost';
  onPress?: () => void;
};

export const PrimaryButton = ({
  label,
  style,
  iconLeft,
  iconRight,
  size = 'medium',
  appearance = 'filled',
  onPress,
}: BasicButtonProps) => {
  const styles = useStyleSheet(buttonsStylesheet);

  return (
    <Button
      onPress={onPress}
      status="primary"
      appearance={appearance}
      style={[styles.button, style]}
      size={size}
      accessoryLeft={iconLeft}
      accessoryRight={iconRight}>
      {label}
    </Button>
  );
};

const buttonsStylesheet = StyleService.create({
  button: {
    borderRadius: 13,
  },
});
