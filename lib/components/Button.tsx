import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import { twMerge } from "tailwind-merge";

import type { ComponentProps } from "../types";

export interface ButtonProps extends ComponentProps {
  active?: boolean;
  children?: NullstackNode;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  disabled?: boolean;
  fullSized?: boolean;
  href?: string;
  outline?: boolean;
  positionInGroup?: "none" | "start" | "middle" | "end";
  rounded?: "none" | "sm" | "base" | "lg" | "full";
  size?: "sm" | "base" | "lg";
  type?: "button" | "submit" | "reset";
}

function Button({
  active,
  children,
  class: klass,
  color = "primary",
  customTheme,
  href,
  outline,
  positionInGroup = "none",
  size = "base",
  type,
  useTheme,
  ...rest
}: NullstackClientContext<ButtonProps>) {
  const isLink = typeof href !== "undefined";
  const Component = isLink ? "a" : "button";
  const classes = useTheme(customTheme).button;
  const groupClasses = useTheme(customTheme).buttonGroup;

  return (
    <Component
      class={twMerge(
        classes.base,
        outline ? classes.outline[color] : classes.color[color],
        active && classes.active[color],
        classes.size[size],
        groupClasses.position[positionInGroup],
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
