import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import tc from "../tc";
import { BaseProps } from "../types";

export const baseTabs = {
  slots: {
    list: "border-b border-gray-200 -mb-px flex space-x-8",
    tab: {
      base: "whitespace-nowrap cursor-pointer border-b-2 py-4 px-1 text-sm font-medium border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
      variants: {
        active: {
          true: "border-primary-500 text-primary-600",
        },
      },
    },
    panel: "py-3",
  },
};

type CustomChildren = NullstackNode & {
  attributes?: {
    active?: boolean;
    title?: string;
  };
};

interface TabProps extends BaseProps {
  children?: CustomChildren[];
  onchange?: (index: number) => void;
}

const Tabs = ({ children, class: klass, onchange, theme }: NullstackClientContext<TabProps>) => {
  const { list, panel, tab } = tc(baseTabs, theme?.tabs)();

  return (
    <div class={klass}>
      <nav class={list()}>
        {children.map((child: CustomChildren, idx) => {
          if (!child.attributes?.title) return false;

          return (
            <a
              class={tab({ active: child.attributes?.active })}
              onclick={() => onchange && onchange(idx)}
            >
              {child.attributes?.title}
            </a>
          );
        })}
      </nav>
      <div class={panel()}>
        {children.filter((child: CustomChildren) => child.attributes?.active)}
      </div>
    </div>
  );
};

Tabs.Item = ({ children }) => <div>{children}</div>;

export default Tabs as NullstackFunctionalComponent<TabProps>;
