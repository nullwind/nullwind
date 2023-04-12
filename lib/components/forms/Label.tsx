import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import type { ComponentProps } from "../../types";
import getUseTheme from "../../useTheme";

interface LabelProps extends ComponentProps {
  children?: NullstackNode;
  for?: string;
  required?: boolean;
}

function Label(props: NullstackClientContext<LabelProps>) {
  const {
    children,
    class: klass,
    for: receivedFor,
    required,
    theme,
    useTheme = getUseTheme(),
  } = props;
  const classes = useTheme(theme).label;

  return (
    <label data-required={required} for={receivedFor} class={[classes, klass]}>
      {children}
    </label>
  );
}

export default Label as NullstackFunctionalComponent<LabelProps>;
