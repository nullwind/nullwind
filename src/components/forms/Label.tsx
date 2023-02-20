import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import theme from "../../theme";

interface LabelProps {
  required?: boolean;
  children?: NullstackNode;
  for?: string;
  classes?: typeof theme.label;
}

function Label(props: NullstackClientContext<LabelProps>) {
  const { for: receivedFor, classes = theme.label, required, children } = props;

  return (
    <label for={receivedFor} class={[classes.base, required && classes.required]}>
      {children}
    </label>
  );
}

export default Label as NullstackFunctionalComponent<LabelProps>;
