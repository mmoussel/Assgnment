import React, { ReactNode, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { useTheme } from '@react-navigation/native';

import { Spacer } from 'src/components/shared/spacer.component';
import { ArrowBottomIcon, ArrowUpIcon } from 'src/assets/svgs';

import Animated, {
  FadeInDown,
  FadeOutUp,
  Layout,
} from 'react-native-reanimated';
import { Divider } from './divider.component';

interface Props {
  title: string;
  defaultState?: boolean;
  children: ReactNode;
}

export const CollapseListItem = ({
  title,
  children,
  defaultState = true,
}: Props) => {
  const [expanded, setExpanded] = useState(defaultState);

  const { colors, font, spacing } = useTheme();

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Animated.View layout={Layout.duration(600)} style={styles.root}>
      <Spacer size={2} />

      <TouchableOpacity onPress={toggleExpand} style={styles.container}>
        <Text
          style={{
            fontSize: font.size.lg,
            fontFamily: font.family.bold,
            color: colors.text,
          }}>
          {title}
        </Text>

        {expanded ? <ArrowBottomIcon /> : <ArrowUpIcon />}
      </TouchableOpacity>

      <Spacer size={2} />

      {expanded && (
        <Animated.View entering={FadeInDown} exiting={FadeOutUp}>
          {children}
        </Animated.View>
      )}

      <Divider style={{ marginVertical: spacing(2) }} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  root: { overflow: 'hidden' },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
