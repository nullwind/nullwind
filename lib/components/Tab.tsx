import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import { ComponentProps } from "../types";
import useThemeProvider from "../useTheme";

type CustomChildren = NullstackNode & {
  attributes?: {
    active?: boolean;
    title?: string;
  };
};

interface TabProps extends ComponentProps {
  children?: CustomChildren[];
  onchange?: (index: number) => void;
}

const Tab = ({
  children,
  class: klass,
  onchange,
  theme,
  useTheme = useThemeProvider(),
}: NullstackClientContext<TabProps>) => {
  const { slots } = useTheme(theme).tab;

  return (
    <div class={klass}>
      <ul class={slots.list}>
        {children.map((child: CustomChildren, idx) => {
          if (!child.attributes?.title) return false;

          return (
            <li>
              <a
                class={[
                  slots.listItem.base,
                  slots.listItem.variants.active[child.attributes?.active && "true"],
                ]}
                onclick={() => onchange && onchange(idx)}
              >
                {child.attributes?.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div class={slots.panel}>
        {children.filter((child: CustomChildren) => child.attributes?.active)}
      </div>
    </div>
  );
};

Tab.Item = ({ children }) => <div>{children}</div>;

export default Tab as NullstackFunctionalComponent<TabProps>;
