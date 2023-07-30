import * as theme from "./theme";

export interface BaseProps {
  class?: string;
  id?: string;
  theme?: typeof theme;
}

export * from "./index";
