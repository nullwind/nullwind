import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import theme from "~/theme";

interface ButtonProps {
  children: NullstackNode;
  disabled?: boolean;
  href?: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  outline?: boolean;
  rounded?: boolean;
  fullSized?: boolean;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  class?: string;
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
  class: klass,
  ...props
}: NullstackClientContext<ButtonProps>) {
  const isLink = typeof href !== "undefined";
  const Component = isLink ? "a" : "button";
  const classes = theme.button;

  return (
    <Component
      class={[
        classes.base,
        outline ? classes.outline[color || "primary"] : classes.color[color],
        rounded && classes.rounded,
        classes.size[size],
        fullSized && classes.fullSized,
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
