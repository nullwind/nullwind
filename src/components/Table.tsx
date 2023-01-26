import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

interface DefaultProps {
  id?: string;
  class?: string;
  children?: NullstackNode;
}

const Table = ({ id, children, class: klass }: NullstackClientContext<DefaultProps>) => (
  <table id={id} class={["w-full border-collapse bg-white text-left text-sm text-gray-500", klass]}>
    {children}
  </table>
);

Table.THead = ({ children, class: klass }: NullstackClientContext<DefaultProps>) => (
  <thead class={["bg-gray-50", klass]}>{children}</thead>
);

Table.TH = ({ children, class: klass }: NullstackClientContext<DefaultProps>) => (
  <th scope="col" class={["px-6 py-4 font-medium text-gray-900", klass]}>
    {children}
  </th>
);

Table.TBody = ({ children, class: klass }: NullstackClientContext<DefaultProps>) => (
  <tbody class={["divide-y divide-gray-100 border-t border-gray-100", klass]}>{children}</tbody>
);

Table.TR = ({ children, class: klass }: NullstackClientContext<DefaultProps>) => (
  <tr class={klass}>{children}</tr>
);

Table.TD = ({ children, class: klass }: NullstackClientContext<DefaultProps>) => {
  return <td class={["px-6 py-4", klass]}>{children}</td>;
};

export default Table as NullstackFunctionalComponent<DefaultProps>;
