import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { FC, ReactNode } from 'react';
import { BackIcon } from 'src/assets/svgs';

import { useNavigation, useTheme } from '@react-navigation/native';
import { STATUS_BAR_PADDING } from 'src/constants/status-bar.constants';
import { Spacer } from './spacer.component';

interface Props {
  title: string;
  leftComponent?: ReactNode;
}

export const Header: FC<Props> = ({ title, leftComponent }) => {
  const { font, colors, spacing } = useTheme();
  const { canGoBack, goBack } = useNavigation();

  const onBack = () => {
    const isCanGoBack = canGoBack();

    if (!isCanGoBack) {
      return;
    }
    goBack();
  };

  return (
    <View
      style={{
        ...styles.root,
        backgroundColor: colors.divider,
        padding: spacing(2),
      }}>
      <View style={styles.leftContainer}>
        <Pressable onPress={onBack} style={styles.backButtonContainer}>
          <BackIcon />
          <Text
            style={{
              fontSize: font.size.xxs,
              color: colors.text,
              fontFamily: font.family.bold,
              marginTop: -spacing(1),
            }}>
            Back
          </Text>
        </Pressable>

        <Spacer dir="horizontal" size={2} />

        <Text
          style={{
            fontSize: font.size.xl,
            color: colors.text,
            fontFamily: font.family.bold,
          }}>
          {title}
        </Text>
      </View>

      {leftComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    paddingTop: STATUS_BAR_PADDING,
    flexDirection: 'row',
    alignItems: 'center',
    shadowRadius: 2,
    shadowOpacity: 0.17,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowColor: 'rgba(0,0,0,0.4)',
    elevation: 6,
  },

  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  backButtonContainer: {
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
});
