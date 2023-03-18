import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import type { ComponentProps } from "../../types";

interface CornerProps extends ComponentProps {
  children?: NullstackNode;
}

function Corner(props: NullstackClientContext<CornerProps>) {
  const { children, class: klass, customTheme, useTheme } = props;
  const classes = useTheme(customTheme).corner;
  return <span class={[classes, klass]}>{children}</span>;
}

export default Corner as NullstackFunctionalComponent<CornerProps>;
