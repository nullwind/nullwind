import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import { twMerge } from "tailwind-merge";

import { ComponentProps } from "../types";
import useThemeProvider from "../useTheme";

type CustomChildren = NullstackNode & {
  attributes?: {
    position?: "start" | "middle" | "end";
  };
};

interface ButtonGroupProps extends ComponentProps {
  children?: CustomChildren[];
}

function ButtonGroup(props: NullstackClientContext<ButtonGroupProps>) {
  const { children, class: klass, theme, useTheme = useThemeProvider() } = props;
  const { base } = useTheme(theme).buttonGroup;

  return (
    <div class={twMerge(base, klass)}>
      {children.map((child, index) => {
        if (!child.attributes) return child;

        const position = index === 0 ? "start" : index === children.length - 1 ? "end" : "middle";

        child.attributes.position = position;

        return child;
      })}
    </div>
  );
}

export default ButtonGroup as NullstackFunctionalComponent<ButtonGroupProps>;
