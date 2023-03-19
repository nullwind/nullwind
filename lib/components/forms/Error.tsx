import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import type { ComponentProps } from "../../types";

interface ErrorProps extends ComponentProps {
  children?: NullstackNode;
}

function Error(props: NullstackClientContext<ErrorProps>) {
  const { children, class: klass, customTheme, useTheme } = props;
  const classes = useTheme(customTheme).error;
  return <p class={[classes, klass]}>{children}</p>;
}

export default Error as NullstackFunctionalComponent<ErrorProps>;
