import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import theme from "../../theme";

interface ErrorProps {
  children?: NullstackNode;
  class?: string;
}

function Error(props: NullstackClientContext<ErrorProps>) {
  const { class: klass, children } = props;
  const classes = theme.error;

  return <p class={[classes.base, klass]}>{children}</p>;
}

export default Error as NullstackFunctionalComponent<ErrorProps>;
