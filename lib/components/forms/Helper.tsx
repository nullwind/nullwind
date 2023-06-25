import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import tc from "../../tc";
import type { BaseProps } from "../../types";

export const baseHelper = {
  base: "text-sm text-slate-500 leading-4",
};

interface HelperProps extends BaseProps {
  children?: NullstackNode;
}

function Helper(props: NullstackClientContext<HelperProps>) {
  const { children, class: klass, theme } = props;
  const helper = tc(baseHelper, theme?.helper);
  return <p class={helper({ class: klass })}>{children}</p>;
}

export default Helper as NullstackFunctionalComponent<HelperProps>;
