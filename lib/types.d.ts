import theme from "./theme";

export type Theme = typeof theme;
export type UseTheme = (customComponentTheme: Theme) => Theme;
export interface ComponentProps {
  class?: string;
  customTheme?: Theme;
  id?: string;
  theme?: Theme;
  useTheme?: UseTheme;
}
