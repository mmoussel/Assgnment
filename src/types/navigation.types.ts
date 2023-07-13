import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Model } from './model.types';

export type RootStackParamList = {
  Picture: undefined;
  Model: undefined;
  ModelDetails?: { model: Model };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
