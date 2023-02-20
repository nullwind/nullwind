import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import theme from "../../theme";

interface CornerProps {
  children?: NullstackNode;
  classes?: typeof theme.corner;
}

function Corner(props: NullstackClientContext<CornerProps>) {
  const { classes = theme.corner, children } = props;
  return <span class={classes.base}>{children}</span>;
}

export default Corner as NullstackFunctionalComponent<CornerProps>;
