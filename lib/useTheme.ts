import mergeTheme from "./helpers/mergeTheme";
import defaultTheme from "./theme";
import type { Theme } from "./types";

function useTheme(customTheme?: Partial<Theme>) {
  return function useTheme(customComponentTheme) {
    return mergeTheme(mergeTheme(defaultTheme, customTheme), customComponentTheme);
  };
}

export default useTheme;
