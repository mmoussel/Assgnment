import {
  StyleSheet,
  View,
  TextInput as NativeTextInput,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import React, { FC } from 'react';

import { useTheme } from '@react-navigation/native';

interface Props extends TextInputProps {
  containerStyle?: ViewStyle;
  leftComponent?: React.ReactNode;
}

export const TextInput: FC<Props> = ({
  containerStyle,
  leftComponent,
  style,
  ...rest
}) => {
  const { font, colors, spacing } = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: colors.tertiary,
          padding: spacing(4),

          ...styles.container,
        },
        containerStyle,
      ]}>
      <NativeTextInput
        style={[
          {
            fontSize: font.size.lg,
            ...styles.input,
          },
          style,
        ]}
        {...rest}
      />

      {leftComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    shadowRadius: 2,
    shadowOpacity: 0.17,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowColor: 'rgba(0,0,0,0.4)',
    elevation: 6,
  },

  input: {
    flex: 1,
  },
});
