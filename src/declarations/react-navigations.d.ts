import '@react-navigation/native';
import { theme } from 'src/theme';

// Override the theme in react native navigation to accept our custom theme props.
declare module '@react-navigation/native' {
  export type ExtendedTheme = typeof theme;
  export function useTheme(): ExtendedTheme;
}
