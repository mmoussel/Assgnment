import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  Text,
  ListRenderItem,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Header } from 'src/components/shared/header.component';
import { BarCodeIcon } from 'src/assets/svgs';
import { Spacer } from 'src/components/shared/spacer.component';
import { TextInput } from 'src/components/shared/text-input.component';
import { ModelItem } from 'src/components/model/model-item.component';
import { Divider } from 'src/components/shared/divider.component';
import { Model } from 'src/types/model.types';
import { useModels } from 'src/hooks/use-model.hook';

export const ModelScreen = () => {
  const [searchKey, setSearchKey] = useState('');

  const { colors, spacing, font } = useTheme();

  const { models } = useModels({ searchKey });

  const renderItem: ListRenderItem<Model> = useCallback(
    ({ item }) => (
      <View
        style={{
          ...styles.root,
          maxWidth: Dimensions.get('screen').width / 2,
          margin: spacing(2),
        }}
        key={item.id}>
        <ModelItem model={item} />
      </View>
    ),
    [models],
  );

  return (
    <View style={{ ...styles.root, backgroundColor: colors.background }}>
      <Header title="Model" />
      <View
        style={{
          padding: spacing(4),
          ...styles.root,
        }}>
        <TextInput
          placeholder="Type to Search…"
          leftComponent={<BarCodeIcon />}
          onChangeText={setSearchKey}
          value={searchKey}
        />

        <Spacer />
        <FlatList
          data={models}
          renderItem={renderItem}
          numColumns={2}
          ItemSeparatorComponent={() => (
            <Divider style={{ marginVertical: spacing(4) }} />
          )}
          contentContainerStyle={[
            styles.listContainer,
            { marginHorizontal: -spacing(2) },
          ]}
          ListEmptyComponent={() => (
            <View style={styles.center}>
              <Spacer />
              <Text
                style={{
                  fontSize: font.size.xl,
                  fontFamily: font.family.italic,
                  color: colors.text,
                }}>
                No Result Found
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  listContainer: {
    flexGrow: 1,
  },

  center: {
    alignItems: 'center',
  },
});
