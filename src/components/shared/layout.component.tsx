import React, { FC } from 'react';
import {
  StyleSheet,
  ScrollView,
  ScrollViewProps,
  RefreshControlProps,
} from 'react-native';

interface Props extends ScrollViewProps {
  layoutRef?: React.LegacyRef<ScrollView>;

  refreshControlProps?: RefreshControlProps;
}

export const Layout: FC<Props> = ({
  children,
  contentContainerStyle,
  layoutRef,
  ...props
}) => {
  return (
    <ScrollView
      contentContainerStyle={[styles.container, contentContainerStyle]}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      ref={layoutRef}
      bounces={false}
      {...props}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  avoidKeyboard: {
    flex: 1,
  },
});
