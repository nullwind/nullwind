import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import theme from "../../theme";

interface ErrorProps {
  children?: NullstackNode;
  classes?: typeof theme.error;
}

function Error(props: NullstackClientContext<ErrorProps>) {
  const { classes = theme.error, children } = props;
  return <p class={classes.base}>{children}</p>;
}

export default Error as NullstackFunctionalComponent<ErrorProps>;
