import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from 'src/theme';
import { RootStackParamList } from 'src/types/navigation.types';

import { PictureScreen } from 'src/screens/picture.screen';
import { ModelScreen } from 'src/screens/model.screen';
import { ModelDetailsScreen } from 'src/screens/model-details.screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const customTheme = {
  ...theme,
  colors: {
    ...DefaultTheme.colors,
    ...theme.colors,
  },
};

export const Navigation = () => {
  return (
    <NavigationContainer theme={customTheme}>
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', android: 'height' })}
        keyboardVerticalOffset={Platform.OS === 'ios' ? undefined : NaN} // to handle react navigation error on android, weird!
        style={styles.keyboardAvoidingView}>
        <Stack.Navigator
          screenOptions={{ headerShown: false, orientation: 'portrait' }}
          initialRouteName={'Picture'}>
          <Stack.Screen name="Picture" component={PictureScreen} />
          <Stack.Screen name="Model" component={ModelScreen} />
          <Stack.Screen name="ModelDetails" component={ModelDetailsScreen} />
        </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
});
