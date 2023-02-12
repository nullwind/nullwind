import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import theme from "../theme";

interface DefaultProps {
  id?: string;
  class?: string;
  children?: NullstackNode;
}

const classes = theme.table;

const Table = ({ id, children, class: klass }: NullstackClientContext<DefaultProps>) => (
  <table id={id} class={[classes.base, klass]}>
    {children}
  </table>
);

Table.THead = ({ children, class: klass }: NullstackClientContext<DefaultProps>) => (
  <thead class={[classes.thead, klass]}>{children}</thead>
);

Table.TH = ({ children, class: klass }: NullstackClientContext<DefaultProps>) => (
  <th scope="col" class={[classes.th, klass]}>
    {children}
  </th>
);

Table.TBody = ({ children, class: klass }: NullstackClientContext<DefaultProps>) => (
  <tbody class={[classes.tbody, klass]}>{children}</tbody>
);

Table.TR = ({ children, class: klass }: NullstackClientContext<DefaultProps>) => (
  <tr class={[classes.tr, klass]}>{children}</tr>
);

Table.TD = ({ children, class: klass }: NullstackClientContext<DefaultProps>) => {
  return <td class={[classes.td, klass]}>{children}</td>;
};

export default Table as NullstackFunctionalComponent<DefaultProps>;
