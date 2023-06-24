import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import type { ComponentProps } from "../../types";
import useThemeProvider from "../../useTheme";

interface HelperProps extends ComponentProps {
  children?: NullstackNode;
}

function Helper(props: NullstackClientContext<HelperProps>) {
  const { children, class: klass, theme, useTheme = useThemeProvider() } = props;
  const { base } = useTheme(theme).helper;
  return <p class={[base, klass]}>{children}</p>;
}

export default Helper as NullstackFunctionalComponent<HelperProps>;
