import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Picture: undefined;
  Model: undefined;
  ModelDetails?: { modelId: number };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
