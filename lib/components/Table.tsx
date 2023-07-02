import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import tc from "../tc";
import { BaseProps } from "../types";

export const baseTable = {
  base: "w-full border-collapse bg-white text-left text-sm text-gray-500",
  slots: {
    thead: "bg-gray-50",
    th: "px-6 py-4 font-medium text-gray-900",
    tbody: "divide-y divide-gray-100 border-t border-gray-100",
    tr: "",
    td: "px-6 py-4",
  },
};

type NullstackNode = {
  attributes?: {
    class?: string;
  };
  children?: NullstackNode | NullstackNode[];
  type: string;
};

interface DefaultProps extends BaseProps {
  children?: NullstackNode[];
}

function applyClassToChildren(slots: any, children: NullstackNode | NullstackNode[]) {
  const applyClassToElement = (element: any) => {
    if (Object.keys(slots).includes(element.type)) {
      element.attributes.class = slots[element.type]({ class: element.attributes?.class });
    }

    if (element.children) {
      element.children = applyClassToChildren(slots, element.children);
    }

    return element;
  };

  if (Array.isArray(children)) {
    return children.map((child) => applyClassToElement(child));
  }

  return applyClassToElement(children);
}

const Table = ({
  children,
  class: klass,
  theme,
  ...rest
}: NullstackClientContext<DefaultProps>) => {
  const table = tc(baseTable, theme?.table);
  const slots = table();

  return (
    <table class={slots.base({ class: klass })} {...rest}>
      {children.map((child) => applyClassToChildren(slots, child))}
    </table>
  );
};

export default Table as NullstackFunctionalComponent<DefaultProps>;
