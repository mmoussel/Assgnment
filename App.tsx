import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Navigation } from 'src/navigation';

const App = () => {
  return (
    <View style={styles.root}>
      <Navigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  root: { flex: 1 },
});
