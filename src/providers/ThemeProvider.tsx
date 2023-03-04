import Nullstack, { NullstackClientContext, NullstackNode } from "nullstack";

import mergeDeep from "../helpers/mergeDeep";
import defaultTheme from "../theme";
import type { ComponentProps, Theme, UseTheme } from "../types";

interface ThemeProviderProps extends ComponentProps {
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
