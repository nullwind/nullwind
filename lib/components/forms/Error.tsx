import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import type { ComponentProps } from "../../types";
import useThemeProvider from "../../useTheme";

interface ErrorProps extends ComponentProps {
  children?: NullstackNode;
}

function Error(props: NullstackClientContext<ErrorProps>) {
  const { children, class: klass, theme, useTheme = useThemeProvider() } = props;
  const classes = useTheme(theme).error;
  return <p class={[classes, klass]}>{children}</p>;
}

export default Error as NullstackFunctionalComponent<ErrorProps>;
