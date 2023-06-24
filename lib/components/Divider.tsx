import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import { twMerge } from "tailwind-merge";

import type { ComponentProps } from "../types";
import useThemeProvider from "../useTheme";

interface DividerProps extends ComponentProps {
  label?: string;
}

function Divider({
  class: klass,
  label = "More",
  theme,
  useTheme = useThemeProvider(),
}: NullstackClientContext<DividerProps>) {
  const { base } = useTheme(theme).divider;

  return <div class={twMerge(base, klass)}>{label}</div>;
}

export default Divider as NullstackFunctionalComponent<DividerProps>;
