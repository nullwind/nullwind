import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import type { ComponentProps } from "../../types";

interface LabelProps extends ComponentProps {
  children?: NullstackNode;
  for?: string;
  required?: boolean;
}

function Label(props: NullstackClientContext<LabelProps>) {
  const { children, class: klass, customTheme, for: receivedFor, required, useTheme } = props;
  const classes = useTheme(customTheme).label;

  return (
    <label for={receivedFor} class={[classes.base, required && classes.required, klass]}>
      {children}
    </label>
  );
}

export default Label as NullstackFunctionalComponent<LabelProps>;
