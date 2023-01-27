import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import theme from "~/theme";

interface LabelProps {
  required?: boolean;
  children?: NullstackNode;
  class?: string;
  for?: string;
}

function Label(props: NullstackClientContext<LabelProps>) {
  const { for: receivedFor, class: klass, required, children } = props;
  const classes = theme.label;

  return (
    <label for={receivedFor} class={[classes.base, required && classes.required, klass]}>
      {children}
    </label>
  );
}

export default Label as NullstackFunctionalComponent<LabelProps>;
