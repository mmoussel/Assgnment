import React, { FC } from 'react';
import { View } from 'react-native';

import { useTheme } from '@react-navigation/native';

const postions = {
  horizontal: 'marginHorizontal',
  vertical: 'marginVertical',
};

interface SpacerProps {
  size?: number;
  dir?: keyof typeof postions;
}

export const Spacer: FC<SpacerProps> = ({ dir = 'vertical', size = 4 }) => {
  const { spacing } = useTheme();
  return (
    <View
      style={{
        [postions[dir]]: spacing(size / 2), // divided by 2 becuase marginVertical from example apply 2 for top and 2 for buttom
      }}
    />
  );
};
