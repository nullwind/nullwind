import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import type { ComponentProps } from "../../types";
import useThemeProvider from "../../useTheme";

interface CornerProps extends ComponentProps {
  children?: NullstackNode;
}

function Corner(props: NullstackClientContext<CornerProps>) {
  const { children, class: klass, theme, useTheme = useThemeProvider() } = props;
  const { base } = useTheme(theme).corner;
  return <span class={[base, klass]}>{children}</span>;
}

export default Corner as NullstackFunctionalComponent<CornerProps>;
