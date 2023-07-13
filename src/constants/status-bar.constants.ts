import { Platform, StatusBar } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

export const STATUS_BAR_PADDING =
  Platform.select({
    ios: initialWindowMetrics?.insets.top || 0,
    android: StatusBar.currentHeight,
  }) || 0;

export const BOTTOM_AREA_PADDING =
  Platform.select<number>({
    ios: initialWindowMetrics?.insets.bottom || 0,
    android: 8,
  }) || 0;
