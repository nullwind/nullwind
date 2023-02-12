import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import theme from "../../theme";

interface HelperProps {
  children?: NullstackNode;
  class?: string;
}

function Helper(props: NullstackClientContext<HelperProps>) {
  const { class: klass, children } = props;
  const classes = theme.helper;

  return <p class={[classes.base, klass]}>{children}</p>;
}

export default Helper as NullstackFunctionalComponent<HelperProps>;
