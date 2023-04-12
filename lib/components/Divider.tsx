import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import { twMerge } from "tailwind-merge";

import type { ComponentProps } from "../types";
import getUseTheme from "../useTheme";

interface DividerProps extends ComponentProps {
  label?: string;
}

function Divider({
  class: klass,
  label = "More",
  theme,
  useTheme = getUseTheme(),
}: NullstackClientContext<DividerProps>) {
  const classes = useTheme(theme).divider;

  return <div class={twMerge(classes.base, klass)}>{label}</div>;
}

export default Divider as NullstackFunctionalComponent<DividerProps>;
