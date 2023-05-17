import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import { twMerge } from "tailwind-merge";

import { ComponentProps } from "../types";
import useThemeProvider from "../useTheme";

interface ButtonGroupProps extends ComponentProps {
  children?: Record<string, Record<string, string>>[];
}

function ButtonGroup(props: NullstackClientContext<ButtonGroupProps>) {
  const { children, class: klass, theme, useTheme = useThemeProvider() } = props;
  const classes = useTheme(theme).buttonGroup;

  return (
    <div class={twMerge(classes.base, klass)}>
      {children.map((child, index) => {
        if (!child.attributes) return child;

        const positionInGroup =
          index === 0 ? "start" : index === children.length - 1 ? "end" : "middle";

        child.attributes.positionInGroup = positionInGroup;

        return child;
      })}
    </div>
  );
}

export default ButtonGroup as NullstackFunctionalComponent<ButtonGroupProps>;
