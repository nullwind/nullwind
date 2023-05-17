import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import { twMerge } from "tailwind-merge";

import type { ComponentProps } from "../types";
import useThemeProvider from "../useTheme";

interface TitleProps extends ComponentProps {
  children?: NullstackNode;
  h?: 1 | 2 | 3 | 4 | 5 | 6;
}

function Title({
  children,
  class: klass,
  h = 1,
  theme,
  useTheme = useThemeProvider(),
}: NullstackClientContext<TitleProps>) {
  const classes = useTheme(theme).title;
  const tag = `h${h}`;

  return (
    <element tag={tag} class={twMerge(classes[tag], klass)}>
      {children}
    </element>
  );
}

export default Title as NullstackFunctionalComponent<TitleProps>;
