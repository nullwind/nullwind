import { NullstackClientContext, NullstackNode } from "nullstack";

import tc from "../tc";
import { BaseProps } from "../types";

export const baseTable = {
  base: "w-full border-collapse bg-white text-left text-sm text-slate-500",
  slots: {
    thead: "bg-slate-50",
    th: "px-6 py-4 font-medium text-slate-900",
    tbody: "divide-y divide-slate-100 border-t border-slate-100",
    tr: "",
    td: "px-6 py-4",
  },
};

interface DefaultProps extends BaseProps {
  children?: NullstackNode;
}

const Table = ({
  children,
  class: klass,
  id,
  ref,
  theme,
}: NullstackClientContext<DefaultProps>) => {
  const { base } = tc(baseTable, theme?.table)();

  return (
    <table id={id} class={base({ class: klass })} ref={ref}>
      {children}
    </table>
  );
};

Table.THead = ({ children, class: klass, ref, theme }: NullstackClientContext<DefaultProps>) => {
  const { thead } = tc(baseTable, theme?.table)();
  return (
    <thead class={thead({ class: klass })} ref={ref}>
      {children}
    </thead>
  );
};

Table.TH = ({ children, class: klass, ref, theme }: NullstackClientContext<DefaultProps>) => {
  const { th } = tc(baseTable, theme?.table)();
  return (
    <th scope="col" class={th({ class: klass })} ref={ref}>
      {children}
    </th>
  );
};

Table.TBody = ({ children, class: klass, ref, theme }: NullstackClientContext<DefaultProps>) => {
  const { tbody } = tc(baseTable, theme?.table)();
  return (
    <tbody class={tbody({ class: klass })} ref={ref}>
      {children}
    </tbody>
  );
};

Table.TR = ({ children, class: klass, ref, theme }: NullstackClientContext<DefaultProps>) => {
  const { tr } = tc(baseTable, theme?.table)();
  return (
    <tr class={tr({ class: klass })} ref={ref}>
      {children}
    </tr>
  );
};

Table.TD = ({ children, class: klass, ref, theme }: NullstackClientContext<DefaultProps>) => {
  const { td } = tc(baseTable, theme?.table)();
  return (
    <td class={td({ class: klass })} ref={ref}>
      {children}
    </td>
  );
};

export { Table as default };
