import Nullstack, { NullstackClientContext, NullstackNode } from "nullstack";

import mergeDeep from "../helpers/mergeDeep";
import defaultTheme, { Theme } from "../theme";

export type UseTheme = (customComponentTheme: Theme[keyof Theme]) => Theme;

interface ThemeProviderProps {
  theme?: Theme;
  useTheme?: UseTheme;
  children?: NullstackNode;
}

class ThemeProvider extends Nullstack<ThemeProviderProps> {
  _useTheme(customTheme: Theme): UseTheme {
    return function useTheme(customComponentTheme) {
      const mergedTheme = mergeDeep(defaultTheme, customTheme);
      return mergeDeep(customComponentTheme, mergedTheme);
    };
  }

  hydrate(context: NullstackClientContext<ThemeProviderProps>) {
    context.useTheme = this._useTheme(context.theme);
  }

  render({ children }: NullstackClientContext<ThemeProviderProps>) {
    if (!this.hydrated) return false;
    return children;
  }
}

export default ThemeProvider;
