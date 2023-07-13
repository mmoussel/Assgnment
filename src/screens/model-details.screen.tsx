import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RootStackScreenProps } from 'src/types/navigation.types';
import { useRoute, useTheme } from '@react-navigation/native';
import { Header } from 'src/components/shared/header.component';
import { Layout } from 'src/components/shared/layout.component';
import { BOTTOM_AREA_PADDING } from 'src/constants/status-bar.constants';
import { Divider } from 'src/components/shared/divider.component';
import { Spacer } from 'src/components/shared/spacer.component';

import { CollapseListItem } from 'src/components/shared/collapse-list-item.component';

type NavigationProps = RootStackScreenProps<'ModelDetails'>;
type ImageInfo = {
  Model: string;
  'Model Name': string;
  'Model Type': string;
  'Cost Category': string;
  'Additional Description': string;
};
export const ModelDetailsScreen = () => {
  const { params } = useRoute<NavigationProps['route']>();

  const { font, spacing, colors } = useTheme();

  if (!params?.model) {
    return <Text>Not found</Text>;
  }

  const { model } = params;

  const imageInfo: ImageInfo = {
    Model: model.code,
    'Model Name': model.name,
    'Model Type': model.type,
    'Cost Category': model.category,
    'Additional Description': model.description,
  };

  return (
    <View style={styles.root}>
      <Header title="Modal Details" />

      <View
        style={{
          margin: spacing(4),
          padding: spacing(3),
          backgroundColor: colors.card,
          ...styles.card,
        }}>
        <Layout>
          <View style={styles.alignCenter}>
            <View
              style={{
                ...styles.imgContainer,
                padding: spacing(4),
                backgroundColor: colors.input,
              }}>
              <Image source={model.imageLink} style={styles.img} />
            </View>
          </View>

          <Spacer />
          <Divider />
          <Spacer />

          <CollapseListItem title="Image Info">
            {Object.keys(imageInfo).map(key => (
              <View
                style={{
                  marginBottom: spacing(2),
                  ...styles.row,
                }}>
                <Text
                  style={{
                    fontFamily: font.family.regular,
                    color: colors.text,
                    fontSize: font.size.md,
                  }}>
                  {key}
                </Text>
                <Text
                  style={{
                    fontFamily: font.family.bold,
                    color: colors.text,
                    fontSize: font.size.md,
                  }}>
                  {imageInfo[key as keyof ImageInfo]}
                </Text>
              </View>
            ))}
          </CollapseListItem>
        </Layout>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingBottom: BOTTOM_AREA_PADDING,
  },

  card: {
    flex: 1,
    marginBottom: 0,
    borderRadius: 25,
    shadowRadius: 2,
    shadowOpacity: 0.17,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowColor: 'rgba(0,0,0,0.4)',
    elevation: 6,
  },

  imgContainer: {
    borderRadius: 19,
    shadowRadius: 2,
    shadowOpacity: 0.17,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowColor: 'rgba(0,0,0,0.4)',
    elevation: 6,
    height: 163,
    width: '60%',
  },
  img: { width: '100%', resizeMode: 'contain', height: '100%' },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  alignCenter: {
    alignItems: 'center',
  },
});
