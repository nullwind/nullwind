import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import tc from "../../tc";
import type { BaseProps } from "../../types";

export const baseLabel = {
  base: 'block text-sm font-medium text-slate-700 leading-4 cursor-pointer data-[required]:after:ml-0.5 data-[required]:after:text-red-500 data-[required]:after:content-["*"]',
};

interface LabelProps extends BaseProps {
  children?: NullstackNode;
  for?: string;
  required?: boolean;
}

function Label(props: NullstackClientContext<LabelProps>) {
  const { children, class: klass, for: receivedFor, required, theme } = props;
  const label = tc(baseLabel, theme?.label);

  return (
    <label data-required={required} for={receivedFor} class={label({ class: klass })}>
      {children}
    </label>
  );
}

export default Label as NullstackFunctionalComponent<LabelProps>;
