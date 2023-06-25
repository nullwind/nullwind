import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import tc from "../tc";
import { BaseProps } from "../types";

export const baseTab = {
  slots: {
    list: "border-b border-b-slate-100 -mb-px flex items-center gap-4 text-sm font-medium w-auto",
    listItem: {
      base: "inline-flex cursor-pointer items-center gap-2 px-1 py-3 text-primary-600 hover:text-primary-600",
      variants: {
        active: {
          true: "relative text-primary-600 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-primary-600",
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

const Tab = ({ children, class: klass, onchange, theme }: NullstackClientContext<TabProps>) => {
  const { list, listItem, panel } = tc(baseTab, theme?.tab)();

  return (
    <div class={klass}>
      <ul class={list()}>
        {children.map((child, idx) => {
          if (!child.attributes?.title) return false;

          return (
            <li>
              <a
                class={listItem({ active: child.attributes?.active })}
                onclick={() => onchange && onchange(idx)}
              >
                {child.attributes?.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div class={panel()}>{children.filter((child) => child.attributes?.active)}</div>
    </div>
  );
};

Tab.Item = ({ children }) => <div>{children}</div>;

export default Tab as NullstackFunctionalComponent<TabProps>;
