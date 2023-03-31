import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import type { ComponentProps } from "../../types";

interface CornerProps extends ComponentProps {
  children?: NullstackNode;
}

function Corner(props: NullstackClientContext<CornerProps>) {
  const { children, class: klass, theme, useTheme } = props;
  const classes = useTheme(theme).corner;
  return <span class={[classes, klass]}>{children}</span>;
}

export default Corner as NullstackFunctionalComponent<CornerProps>;
