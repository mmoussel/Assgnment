import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Header } from 'src/components/shared/header.component';
import { BarCodeIcon } from 'src/assets/svgs';
import { Spacer } from 'src/components/shared/spacer.component';
import { TextInput } from 'src/components/shared/text-input.component';
import { ModelItem } from 'src/components/model/model-item.component';
import { Divider } from 'src/components/shared/divider.component';

export const ModelScreen = () => {
  const { colors, spacing } = useTheme();

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
          data={mockData}
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

const mockData = [
  {
    id: '1',
    code: '1',
    name: 'Printer HS',
    type: 'Printer HS',
    cost: '10000',
    category: 'Printer HS',
    description: 'Printer HS',
    imageLink: require('src/assets/imgs/models/printer.png'),
  },
  {
    id: '1a2',
    code: '12',
    name: 'LCD XS',
    type: 'LCD XS',
    cost: '10000',
    category: 'Printer HS',
    description: 'Printer HS',
    imageLink: require('src/assets/imgs/models/lcd.png'),
  },
  {
    id: '1sfd',
    code: '1',
    name: 'Laptops',
    type: 'Laptops',
    cost: '10000',
    category: 'Printer HS',
    description: 'Printer HS',
    imageLink: require('src/assets/imgs/models/laptop.png'),
  },
  {
    id: '12asd2',
    code: '12',
    name: 'Printer Inc',
    type: 'Printer Inc',
    cost: '10000',
    category: 'Printer HS',
    description: 'Printer HS',
    imageLink: require('src/assets/imgs/models/printer-inc.png'),
  },
];
