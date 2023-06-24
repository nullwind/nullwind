import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import type { ComponentProps } from "../../types";
import useThemeProvider from "../../useTheme";

interface ErrorProps extends ComponentProps {
  children?: NullstackNode;
}

function Error(props: NullstackClientContext<ErrorProps>) {
  const { children, class: klass, theme, useTheme = useThemeProvider() } = props;
  const { base } = useTheme(theme).error;
  return <p class={[base, klass]}>{children}</p>;
}

export default Error as NullstackFunctionalComponent<ErrorProps>;
