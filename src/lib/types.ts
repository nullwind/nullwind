import theme from "../theme";

export type Theme = typeof theme;
export type UseTheme = (customComponentTheme: Theme[keyof Theme]) => Theme;
export interface ComponentProps {
  id?: string;
  class?: string;
  theme?: Theme;
  useTheme?: UseTheme;
  customTheme?: Theme[keyof Theme];
}
