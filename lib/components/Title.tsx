import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import { twMerge } from "tailwind-merge";

import type { ComponentProps } from "../types";

interface TitleProps extends ComponentProps {
  children?: NullstackNode;
  h?: 1 | 2 | 3 | 4 | 5 | 6;
}

function Title({
  children,
  class: klass,
  h = 1,
  theme,
  useTheme,
}: NullstackClientContext<TitleProps>) {
  const classes = useTheme(theme).title;

  return (
    <element tag={`h${h}`} class={twMerge(classes[h], klass)}>
      {children}
    </element>
  );
}

export default Title as NullstackFunctionalComponent<TitleProps>;
