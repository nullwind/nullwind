import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import theme from "../theme";

export interface ButtonProps {
  children?: NullstackNode;
  disabled?: boolean;
  href?: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  outline?: boolean;
  rounded?: boolean;
  fullSized?: boolean;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  positionInGroup?: "none" | "start" | "middle" | "end";
  active?: boolean;
  class?: string | string[];
}

function Button({
  children,
  href,
  color = "primary",
  outline,
  rounded = true,
  fullSized,
  size = "md",
  type,
  positionInGroup = "none",
  active,
  class: klass,
  ...props
}: NullstackClientContext<ButtonProps>) {
  const isLink = typeof href !== "undefined";
  const Component = isLink ? "a" : "button";
  const classes = theme.button;
  const groupClasses = theme.buttonGroup;

  return (
    <Component
      class={[
        classes.base,
        outline ? classes.outline[color || "primary"] : classes.color[color],
        active && classes.active[color || "primary"],
        rounded && classes.rounded,
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
