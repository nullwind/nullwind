import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import { twMerge } from "tailwind-merge";

import XIcon from "./icons/XIcon";
import type { ComponentProps } from "../types";
import useThemeProvider from "../useTheme";

declare function Icon(): NullstackNode;

interface AlertProps extends ComponentProps {
  children?: NullstackNode;
  color?: "primary" | "secondary" | "info" | "success" | "warning" | "danger";
  icon?: typeof Icon;
  ondismiss?: () => void;
}

const Alert = ({
  children,
  class: klass,
  color = "info",
  icon: Icon,
  ondismiss,
  theme,
  useTheme = useThemeProvider(),
}: NullstackClientContext<AlertProps>) => {
  const { base, slots, variants } = useTheme(theme).alert;

  return (
    <div class={twMerge(base, variants.color[color], klass)} role="alert">
      {Icon && (
        <span class={slots.icon}>
          <Icon />
        </span>
      )}
      <div class={slots.content}>{children}</div>
      {typeof ondismiss === "function" && (
        <button aria-label="Dismiss" class={slots.close} onclick={ondismiss} type="button">
          <XIcon aria-hidden class={slots.closeIcon} />
        </button>
      )}
    </div>
  );
};

export default Alert as NullstackFunctionalComponent<AlertProps>;
