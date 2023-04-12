import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import { twMerge } from "tailwind-merge";

import type { ComponentProps } from "../types";
import getUseTheme from "../useTheme";

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
  type,
  useTheme = getUseTheme(),
  ...rest
}: NullstackClientContext<ButtonProps>): NullstackNode {
  const isLink = typeof href !== "undefined";
  const Component = isLink ? "a" : "button";
  const classes = useTheme(theme).button;
  const groupClasses = useTheme(theme).buttonGroup;

  return (
    <Component
      class={twMerge(
        classes.base,
        outline ? classes.outline[color] : classes.color[color],
        active && classes.active[color],
        size && classes.size[size],
        positionInGroup && groupClasses.position[positionInGroup],
        klass
      )}
      href={href}
      type={isLink ? undefined : type}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Button as NullstackFunctionalComponent<ButtonProps>;
