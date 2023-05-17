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
  const classes = useTheme(theme).alert;

  return (
    <div class={twMerge(classes.base, classes.color[color], klass)} role="alert">
      {Icon && (
        <span class={classes.icon}>
          <Icon />
        </span>
      )}
      <div class={classes.content}>{children}</div>
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
  );
};

export default Alert as NullstackFunctionalComponent<AlertProps>;
