import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import XIcon from "./icons/XIcon";
import type { ComponentProps } from "../types";

interface AlertProps extends ComponentProps {
  children?: NullstackNode;
  color?: "info" | "success" | "warning" | "danger";
  icon?: typeof XIcon;
  ondismiss?: () => void;
  rounded?: boolean;
  withBorderAccent?: boolean;
}

const Alert = ({
  children,
  class: klass,
  color = "info",
  customTheme,
  icon: Icon,
  ondismiss,
  rounded = true,
  useTheme,
  withBorderAccent,
}: NullstackClientContext<AlertProps>) => {
  const classes = useTheme(customTheme).alert;

  return (
    <div
      class={[
        classes.root.base,
        classes.root.color[color],
        rounded && classes.root.rounded,
        withBorderAccent && classes.root.borderAccent,
        klass,
      ]}
      role="alert"
    >
      <div class={classes.root.wrapper}>
        {Icon && (
          <span class={classes.root.icon}>
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
