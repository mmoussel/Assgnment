import React, { FC } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';

interface Props {
  dir?: 'horizontal' | 'vertical';
  style?: StyleProp<ViewStyle>;
}

export const Divider: FC<Props> = ({ dir = 'horizontal', style }) => {
  const { colors } = useTheme();

  const isVertical = dir === 'vertical';
  return (
    <View
      style={[
        {
          backgroundColor: colors.divider,
        },
        isVertical ? styles.vertical : styles.horizontal,
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  vertical: {
    width: 1,
    height: '100%',
  },
  horizontal: {
    height: 1,
    width: '100%',
  },
});
