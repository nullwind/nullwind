import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import { twMerge } from "tailwind-merge";

import XIcon from "./icons/XIcon";
import type { ComponentProps } from "../types";

declare function Icon(): NullstackNode;

interface AlertProps extends ComponentProps {
  children?: NullstackNode;
  color?: "info" | "success" | "warning" | "danger";
  icon?: typeof Icon;
  ondismiss?: () => void;
}

const Alert = ({
  children,
  class: klass,
  color = "info",
  customTheme,
  icon: Icon,
  ondismiss,
  useTheme,
}: NullstackClientContext<AlertProps>) => {
  const classes = useTheme(customTheme).alert;

  return (
    <div class={twMerge(classes.base, classes.color[color], klass)} role="alert">
      <div class={classes.wrapper}>
        {Icon && (
          <span class={classes.icon}>
            <Icon />
          </span>
        )}
        <div>{children}</div>
        {typeof ondismiss === "function" && (
          <button
            aria-label="Dismiss"
            class={[classes.close.base, classes.close.color[color]]}
            onclick={ondismiss}
            type="button"
          >
            <XIcon aria-hidden class={classes.close.icon} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert as NullstackFunctionalComponent<AlertProps>;
