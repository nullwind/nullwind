import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import tc from "../tc";
import type { BaseProps } from "../types";

export const baseButton = {
  base: "font-medium flex h-min items-center justify-center text-center rounded-md focus:outline-none",
  variants: {
    color: {
      primary:
        "text-white bg-primary-500 border border-transparent hover:bg-primary-800 disabled:hover:bg-primary-500",
      secondary:
        "text-white bg-secondary-500 border border-transparent hover:bg-secondary-800 disabled:hover:bg-secondary-500",
      info: "text-white bg-info-500 border border-transparent hover:bg-info-800 disabled:hover:bg-info-500",
      success:
        "text-white bg-success-500 border border-transparent hover:bg-success-800 disabled:hover:bg-success-500",
      warning:
        "text-white bg-warning-500 border border-transparent hover:bg-warning-800 disabled:hover:bg-warning-500",
      danger:
        "text-white bg-danger-500 border border-transparent hover:bg-danger-800 disabled:hover:bg-danger-500",
    },
    outline: {
      true: "",
    },
    size: {
      sm: "text-xs px-3 py-1.5",
      md: "text-sm px-4 py-2",
      lg: "text-base px-5 py-2.5",
    },
    fullSized: {
      true: "w-full",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed pointer-events-none",
    },
    position: {
      start: "rounded-r-none border-r-0",
      middle: "rounded-none border-l-0",
      end: "rounded-l-none border-l-0",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
  },
  compoundVariants: [
    {
      color: "primary",
      outline: true,
      class:
        "text-primary-500 bg-white border-primary-500 hover:bg-primary-50 disabled:hover:bg-white",
    },
    {
      color: "secondary",
      outline: true,
      class:
        "text-secondary-500 bg-white border-secondary-500 hover:bg-secondary-50 disabled:hover:bg-white",
    },
    {
      color: "info",
      outline: true,
      class: "text-info-500 bg-white border-info-500 hover:bg-info-50 disabled:hover:bg-white",
    },
    {
      color: "success",
      outline: true,
      class:
        "text-success-500 bg-white border-success-500 hover:bg-success-50 disabled:hover:bg-white",
    },
    {
      color: "warning",
      outline: true,
      class:
        "text-warning-500 bg-white border-warning-500 hover:bg-warning-50 disabled:hover:bg-white",
    },
    {
      color: "danger",
      outline: true,
      class:
        "text-danger-500 bg-white border-danger-500 hover:bg-danger-50 disabled:hover:bg-white",
    },
  ],
};

export interface ButtonProps extends BaseProps {
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
  color,
  disabled,
  fullSized,
  href,
  outline,
  position,
  size,
  theme,
  type = "button",
  ...rest
}: NullstackClientContext<ButtonProps>): NullstackNode {
  const isLink = typeof href !== "undefined";
  const button = tc(baseButton, theme?.button);

  return (
    // @ts-ignore
    <element
      tag={isLink ? "a" : "button"}
      type={isLink ? undefined : type}
      href={href}
      class={button({
        color,
        outline,
        disabled,
        fullSized,
        position,
        size,
        class: klass,
      })}
      {...rest}
    >
      {children}
    </element>
  );
}

export default Button as NullstackFunctionalComponent<ButtonProps>;
