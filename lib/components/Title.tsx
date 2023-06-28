import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import tc from "../tc";
import type { BaseProps } from "../types";

export const baseTitle = {
  variants: {
    h: {
      1: "text-4xl font-bold",
      2: "text-3xl font-bold",
      3: "text-2xl font-bold",
      4: "text-xl font-bold",
      5: "text-lg font-bold",
      6: "text-base font-bold",
    },
  },
};

interface TitleProps extends BaseProps {
  children?: NullstackNode;
  h?: 1 | 2 | 3 | 4 | 5 | 6;
}

function Title({ children, class: klass, h = 1, theme }: NullstackClientContext<TitleProps>) {
  const title = tc(baseTitle, theme?.title);

  return (
    <element tag={`h${h}`} class={title({ h, class: klass })}>
      {children}
    </element>
  );
}

export default Title as NullstackFunctionalComponent<TitleProps>;
