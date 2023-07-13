import React, { FC } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { Header } from 'src/components/shared/header.component';
import { Layout } from 'src/components/shared/layout.component';

import { useNavigation, useTheme } from '@react-navigation/native';
import { ArrowRightIcon, StockIcon, VendorsIcon } from 'src/assets/svgs';
import { Spacer } from 'src/components/shared/spacer.component';
import {
  RootStackScreenProps,
  RootStackParamList,
} from 'src/types/navigation.types';
import { SvgProps } from 'react-native-svg';

type NavigationProps = RootStackScreenProps<'Picture'>;

type Options = {
  title: string;
  Icon: FC<SvgProps>;
  toScreen?: keyof RootStackParamList;
};

const options: Options[] = [
  {
    title: 'Asset Inventory',
    Icon: StockIcon,
  },
  {
    title: 'Model',
    Icon: VendorsIcon,
    toScreen: 'Model',
  },
  {
    title: 'Person',
    Icon: VendorsIcon,
  },
];

export const PictureScreen = () => {
  const { font, colors, spacing } = useTheme();

  const { navigate } = useNavigation<NavigationProps['navigation']>();

  const onItemPress = (item: { toScreen?: keyof RootStackParamList }) => {
    if (!item.toScreen) {
      return;
    }

    navigate(item?.toScreen);
  };

  return (
    <View style={{ ...styles.root, backgroundColor: colors.background }}>
      <Header title="Picture" />
      <Layout
        contentContainerStyle={{
          ...styles.root,
          paddingHorizontal: spacing(10),
        }}>
        <Spacer size={7} />
        {options.map(({ Icon, ...opt }) => (
          <Pressable
            onPress={() => onItemPress(opt)}
            style={{
              backgroundColor: colors.card,
              marginBottom: spacing(7),
              paddingVertical: spacing(3),
              paddingHorizontal: spacing(5),
              ...styles.itemContainer,
            }}
            key={opt.title}>
            <View style={styles.itemLeftContainer}>
              <Icon />

              <Spacer dir="horizontal" />

              <Text
                style={{
                  fontFamily: font.family.bold,
                  color: colors.text,
                  fontSize: font.size.lg,
                }}>
                {opt.title}
              </Text>
            </View>

            <ArrowRightIcon />
          </Pressable>
        ))}
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
  },

  itemContainer: {
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

  itemLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
});
