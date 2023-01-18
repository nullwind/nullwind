const Table = ({ id, children, class: klass }) => (
  <table id={id} class={["min-w-full divide-y divide-gray-300 align-middle", klass]}>
    {children}
  </table>
);

Table.THead = ({ children, class: klass }) => (
  <thead class={["bg-gray-50", klass]}>{children}</thead>
);

Table.TH = ({ children, class: klass }) => (
  <th scope="col" class={["px-3 py-3.5 text-left text-sm font-semibold text-gray-900", klass]}>
    {children}
  </th>
);

Table.TBody = ({ children, class: klass }) => (
  <tbody class={["divide-y divide-gray-200 bg-white", klass]}>{children}</tbody>
);

Table.TR = ({ children, class: klass }) => <tr class={[klass]}>{children}</tr>;

Table.TD = ({ children, class: klass }) => (
  <td class={["whitespace-nowrap px-3 py-4 text-sm text-gray-500"]}>{children}</td>
);

export default Table;
