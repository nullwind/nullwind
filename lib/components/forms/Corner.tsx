import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import tc from "../../tc";
import type { BaseProps } from "../../types";

export const baseCorner = {
  base: "text-sm text-slate-500 leading-4",
};

interface CornerProps extends BaseProps {
  children?: NullstackNode;
}

function Corner(props: NullstackClientContext<CornerProps>) {
  const { children, class: klass, theme } = props;
  const corner = tc(baseCorner, theme?.corner);
  return <span class={corner({ class: klass })}>{children}</span>;
}

export default Corner as NullstackFunctionalComponent<CornerProps>;
