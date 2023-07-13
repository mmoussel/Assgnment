import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Header } from 'src/components/shared/header.component';
import { BarCodeIcon } from 'src/assets/svgs';
import { Spacer } from 'src/components/shared/spacer.component';
import { TextInput } from 'src/components/shared/text-input.component';
import { ModelItem } from 'src/components/model/model-item.component';
import { Divider } from 'src/components/shared/divider.component';
import { Model } from 'src/types/model.types';
import { getModels } from 'src/services/model.service';

export const ModelScreen = () => {
  const { colors, spacing } = useTheme();

  const [models, setModels] = useState<Model[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const response = await getModels();

    setModels(response);
  };

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
        />

        <Spacer />
        <FlatList
          data={models}
          renderItem={({ item }) => (
            <View style={{ ...styles.root, margin: spacing(2) }} key={item.id}>
              <ModelItem model={item} />
            </View>
          )}
          numColumns={2}
          ItemSeparatorComponent={() => (
            <Divider style={{ marginVertical: spacing(4) }} />
          )}
          contentContainerStyle={[
            styles.listContainer,
            { marginHorizontal: -spacing(2) },
          ]}
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
});
