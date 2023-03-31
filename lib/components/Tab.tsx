import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import { ComponentProps } from "../types";

interface TabProps extends ComponentProps {
  children?: NullstackClientContext<TabItemProps>[];
  onchange?: (index: number) => void;
}

const Tab = ({
  children,
  class: klass,
  onchange,
  theme,
  useTheme,
}: NullstackClientContext<TabProps>) => {
  const classes = useTheme(theme).tab;

  return (
    <div class={klass}>
      <ul class={classes.list}>
        {children.map((child, idx) => {
          if (!child.attributes?.title) return false;

          return (
            <li>
              <a
                class={[classes.listItem.base, child.attributes?.active && classes.listItem.active]}
                onclick={() => onchange && onchange(idx)}
              >
                {child.attributes?.title}
              </a>
            </li>
          );
        })}
      </ul>
      <div class={classes.panel}>{children.filter((child) => child.attributes?.active)}</div>
    </div>
  );
};

interface TabItemProps {
  active?: boolean;
  attributes?: TabItemProps;
  title?: string;
}

Tab.Item = ({ children }) => <div>{children}</div>;

export default Tab as NullstackFunctionalComponent<TabProps>;
