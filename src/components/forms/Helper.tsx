import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import theme from "../../theme";

interface HelperProps {
  children?: NullstackNode;
  classes?: typeof theme.helper;
}

function Helper(props: NullstackClientContext<HelperProps>) {
  const { classes = theme.helper, children } = props;
  return <p class={classes.base}>{children}</p>;
}

export default Helper as NullstackFunctionalComponent<HelperProps>;
