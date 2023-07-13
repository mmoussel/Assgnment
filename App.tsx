import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Navigation } from 'src/navigation';

import { checkIfTableExist } from 'src/utils/db.util';
import {
  createModelsTable,
  insertInitialData,
} from 'src/services/model.service';
import { createNotesTable } from 'src/services/note.service';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    setIsLoading(true);
    try {
      const isTableExist = await checkIfTableExist('models');

      if (!isTableExist) {
        await createModelsTable();
        await createNotesTable();
        await insertInitialData();
      } else {
      }
    } catch (error) {
      console.log('🚀 ~ file: App.tsx:63 ~ initialLoad ~ error:', error);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading </Text>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <Navigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  root: { flex: 1 },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
