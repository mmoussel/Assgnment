import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text } from 'react-native';

import {
  NavigationContainer,
  DefaultTheme,
  useTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { theme } from 'src/theme';
import { RootStackParamList } from 'src/types/navigation.types';

import { View } from 'react-native';

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
          <Stack.Screen name="Picture" component={CreateMockScreen} />
          <Stack.Screen name="Modal" component={CreateMockScreen} />
          <Stack.Screen name="ModalDetails" component={CreateMockScreen} />
        </Stack.Navigator>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
};

const CreateMockScreen = ({ route }: any) => {
  const { font } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title, fontFamily: font.family.semiBold }}>
        {route.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: '#000',
  },
});
