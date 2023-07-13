import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Picture: undefined;
  Model: undefined;
  ModelDetails: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
