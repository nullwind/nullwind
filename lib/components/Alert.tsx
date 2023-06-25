import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import XIcon from "./icons/XIcon";
import tc from "../tc";
import type { BaseProps } from "../types";

declare function Icon(): NullstackNode;

export const baseAlert = {
  base: "flex gap-4 p-4 text-sm rounded-lg items-start",
  variants: {
    color: {
      primary: "text-primary-500 bg-primary-50",
      secondary: "text-secondary-500 bg-secondary-50",
      info: "text-info-500 bg-info-50",
      success: "text-success-500 bg-success-50",
      warning: "text-warning-500 bg-warning-50",
      danger: "text-danger-500 bg-danger-50",
    },
  },
  slots: {
    icon: "inline h-5 w-5 flex-shrink-0",
    content: "flex-1",
    close: "mx-0.5 mt-0.5",
    closeIcon: "w-4 h-4 text-inherit",
  },
};

interface AlertProps extends BaseProps {
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
}: NullstackClientContext<AlertProps>) => {
  const alert = tc(baseAlert, theme?.alert);
  const { base, close, closeIcon, content, icon } = alert();

  return (
    <div class={base({ color, class: klass })} role="alert">
      {Icon && (
        <span class={icon()}>
          <Icon />
        </span>
      )}
      <div class={content()}>{children}</div>
      {typeof ondismiss === "function" && (
        <button aria-label="Dismiss" class={close()} onclick={ondismiss} type="button">
          <XIcon aria-hidden class={closeIcon()} />
        </button>
      )}
    </div>
  );
};

export default Alert as NullstackFunctionalComponent<AlertProps>;
