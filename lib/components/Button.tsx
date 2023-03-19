import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

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
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
}

function Button({
  active,
  children,
  class: klass,
  color = "primary",
  customTheme,
  fullSized,
  href,
  outline,
  positionInGroup = "none",
  rounded = "md",
  size = "md",
  type,
  useTheme,
  ...props
}: NullstackClientContext<ButtonProps>) {
  const isLink = typeof href !== "undefined";
  const Component = isLink ? "a" : "button";
  const classes = useTheme(customTheme).button;
  const groupClasses = useTheme(customTheme).buttonGroup;

  return (
    <Component
      class={[
        classes.base,
        outline ? classes.outline[color] : classes.color[color],
        active && classes.active[color],
        classes.rounded[rounded],
        classes.size[size],
        fullSized && classes.fullSized,
        groupClasses.position[positionInGroup],
        klass,
      ]}
      href={href}
      type={isLink ? undefined : type}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button as NullstackFunctionalComponent<ButtonProps>;
