import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import theme from "../../theme";

interface CornerProps {
  children?: NullstackNode;
  class?: string;
}

function Corner(props: NullstackClientContext<CornerProps>) {
  const { class: klass, children } = props;
  const classes = theme.corner;

  return <span class={[classes.base, klass]}>{children}</span>;
}

export default Corner as NullstackFunctionalComponent<CornerProps>;
