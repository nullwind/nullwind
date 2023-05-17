import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import { twMerge } from "tailwind-merge";

import type { ComponentProps } from "../types";
import useThemeProvider from "../useTheme";

export interface ButtonProps extends ComponentProps {
  active?: boolean;
  children?: NullstackNode;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  disabled?: boolean;
  fullSized?: boolean;
  href?: string;
  outline?: boolean;
  positionInGroup?: "start" | "middle" | "end";
  size?: "sm" | "lg";
  type?: "button" | "submit" | "reset";
}

function Button({
  active,
  children,
  class: klass,
  color = "primary",
  href,
  outline,
  positionInGroup,
  size,
  theme,
  type = "button",
  useTheme = useThemeProvider(),
  ...rest
}: NullstackClientContext<ButtonProps>): NullstackNode {
  const isLink = typeof href !== "undefined";
  const classes = useTheme(theme).button;
  const groupClasses = useTheme(theme).buttonGroup;

  return (
    // @ts-ignore
    <element
      tag={isLink ? "a" : type}
      href={href}
      class={twMerge(
        classes.base,
        outline ? classes.outline[color] : classes.color[color],
        active && classes.active[color],
        size && classes.size[size],
        positionInGroup && groupClasses.position[positionInGroup],
        klass
      )}
      {...rest}
    >
      {children}
    </element>
  );
}

export default Button as NullstackFunctionalComponent<ButtonProps>;
