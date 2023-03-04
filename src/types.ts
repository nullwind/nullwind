import theme from "./theme";

export type Theme = typeof theme;
export type UseTheme = (customComponentTheme: Theme[keyof Theme]) => Theme;
