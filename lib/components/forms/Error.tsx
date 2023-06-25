import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import tc from "../../tc";
import type { BaseProps } from "../../types";

export const baseError = {
  base: "text-sm text-danger-600 leading-4",
};

interface ErrorProps extends BaseProps {
  children?: NullstackNode;
}

function Error(props: NullstackClientContext<ErrorProps>) {
  const { children, class: klass, theme } = props;
  const error = tc(baseError, theme?.error);
  return <p class={error({ class: klass })}>{children}</p>;
}

export default Error as NullstackFunctionalComponent<ErrorProps>;
