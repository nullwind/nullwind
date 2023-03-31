import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import { twMerge } from "tailwind-merge";

import theme from "../theme";
import { ComponentProps } from "../types";

interface DefaultProps extends ComponentProps {
  children?: NullstackNode;
}

const classes = theme.table;

const Table = ({ children, class: klass, id }: NullstackClientContext<DefaultProps>) => (
  <table id={id} class={twMerge(classes.base, klass)}>
    {children}
  </table>
);

Table.THead = ({ children, class: klass }: NullstackClientContext<DefaultProps>) => (
  <thead class={twMerge(classes.thead, klass)}>{children}</thead>
);

Table.TH = ({ children, class: klass }: NullstackClientContext<DefaultProps>) => (
  <th scope="col" class={twMerge(classes.th, klass)}>
    {children}
  </th>
);

Table.TBody = ({ children, class: klass }: NullstackClientContext<DefaultProps>) => (
  <tbody class={twMerge(classes.tbody, klass)}>{children}</tbody>
);

Table.TR = ({ children, class: klass }: NullstackClientContext<DefaultProps>) => (
  <tr class={twMerge(classes.tr, klass)}>{children}</tr>
);

Table.TD = ({ children, class: klass }: NullstackClientContext<DefaultProps>) => {
  return <td class={twMerge(classes.td, klass)}>{children}</td>;
};

export default Table as NullstackFunctionalComponent<DefaultProps>;
