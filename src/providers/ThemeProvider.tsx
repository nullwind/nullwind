import Nullstack, { NullstackClientContext, NullstackNode } from "nullstack";

import mergeTheme from "../helpers/mergeTheme";
import defaultTheme from "../theme";
import type { ComponentProps, Theme, UseTheme } from "../types";

interface ThemeProviderProps extends ComponentProps {
  children?: NullstackNode;
}

class ThemeProvider extends Nullstack<ThemeProviderProps> {
  _useTheme(customTheme: Theme): UseTheme {
    return function useTheme(customComponentTheme) {
      return mergeTheme(mergeTheme(defaultTheme, customTheme), customComponentTheme);
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
