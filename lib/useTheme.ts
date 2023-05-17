import mergeTheme from "./helpers/mergeTheme";
import defaultTheme from "./theme";
import type { Theme } from "./types";

function useThemeProvider(customTheme?: Partial<Theme>) {
  return function useTheme(customComponentTheme) {
    return mergeTheme(mergeTheme(defaultTheme, customTheme), customComponentTheme);
  };
}

export default useThemeProvider;
