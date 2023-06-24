import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import { twMerge } from "tailwind-merge";

import type { ComponentProps } from "../types";
import useThemeProvider from "../useTheme";

export interface ButtonProps extends ComponentProps {
  children?: NullstackNode;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  disabled?: boolean;
  fullSized?: boolean;
  href?: string;
  outline?: boolean;
  position?: "start" | "middle" | "end";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
}

function Button({
  children,
  class: klass,
  color = "primary",
  disabled,
  fullSized,
  href,
  outline,
  position,
  size = "md",
  theme,
  type = "button",
  useTheme = useThemeProvider(),
  ...rest
}: NullstackClientContext<ButtonProps>): NullstackNode {
  const isLink = typeof href !== "undefined";
  const { base, variants } = useTheme(theme).button;

  return (
    // @ts-ignore
    <element
      tag={isLink ? "a" : "button"}
      type={isLink ? undefined : type}
      href={href}
      class={twMerge(
        base,
        variants.color[color],
        outline && variants.outline[color],
        size && variants.size[size],
        fullSized && variants.fullSized,
        disabled && variants.disabled,
        variants.position[position],
        klass
      )}
      {...rest}
    >
      {children}
    </element>
  );
}

export default Button as NullstackFunctionalComponent<ButtonProps>;
