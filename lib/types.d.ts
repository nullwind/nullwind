import theme from "./theme";
import useTheme from "./useTheme";

export type Theme = typeof theme;
export interface ComponentProps {
  class?: string;
  customTheme?: Theme;
  id?: string;
  theme?: Theme;
  useTheme?: ReturnType<typeof useTheme>;
}
