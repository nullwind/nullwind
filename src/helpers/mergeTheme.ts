import { twMerge } from "tailwind-merge";

import { Theme } from "../types";

function mergeTheme<T extends object, S extends object>(theme: T, customTheme: S): Theme {
  if (!theme) {
    throw new Error("Theme is required");
  }

  if (!customTheme) {
    return theme as Theme;
  }

  const output = {} as Theme;

  for (const [key, value] of Object.entries(theme)) {
    if (customTheme[key]) {
      if (typeof value === "object") {
        output[key] = mergeTheme(value, customTheme[key]);
      } else {
        output[key] = twMerge(value, customTheme[key]);
      }
    } else {
      output[key] = value;
    }
  }

  return output;
}

export default mergeTheme;
