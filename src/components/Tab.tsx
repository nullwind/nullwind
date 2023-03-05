import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import { ComponentProps } from "../types";

interface TabProps extends ComponentProps {
  children?: NullstackClientContext<TabItemProps>[];
  onchange?: (index: number) => void;
}

const Tab = ({
  children,
  class: klass,
  customTheme,
  onchange,
  useTheme,
}: NullstackClientContext<TabProps>) => {
  const classes = useTheme(customTheme).tab;

  return (
    <div class={klass}>
      <div class={classes.wrapper}>
        <ul class={classes.list}>
          {children.map((child, idx) => {
            if (!child.attributes?.title) return false;

            const Icon = child.attributes?.icon;

            return (
              <li>
                <a
                  class={[classes.item.base, child.attributes?.active && classes.item.active]}
                  onclick={() => onchange && onchange(idx)}
                >
                  {Icon && <Icon size={18} />} {child.attributes?.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div class={classes.panel}>{children.filter((child) => child.attributes?.active)}</div>
    </div>
  );
};

interface IconProps {
  size?: number;
}

interface TabItemProps {
  title?: string;
  icon?: NullstackFunctionalComponent<IconProps>;
  active?: boolean;
  attributes?: TabItemProps;
}

Tab.Item = ({ children }) => <div>{children}</div>;

export default Tab as NullstackFunctionalComponent<TabProps>;
