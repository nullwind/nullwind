import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import tc from "../tc";
import type { BaseProps } from "../types";

export const baseDivider = {
  base: "my-8 text-sm flex items-center gap-4 before:h-px before:flex-1 before:bg-slate-300 before:content-[''] after:h-px after:flex-1 after:bg-slate-300 after:content-[''] text-slate-500",
};

interface DividerProps extends BaseProps {
  label?: string;
}

function Divider({ class: klass, label = "More", theme }: NullstackClientContext<DividerProps>) {
  const divider = tc(baseDivider, theme?.divider);

  return <div class={divider({ class: klass })}>{label}</div>;
}

export default Divider as NullstackFunctionalComponent<DividerProps>;
