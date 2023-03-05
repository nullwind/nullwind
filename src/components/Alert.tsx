import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import { IconX } from "nullstack-feather-icons";

import type { ComponentProps } from "../types";

interface AlertProps extends ComponentProps {
  children?: NullstackNode;
  color?: "info" | "success" | "warning" | "danger";
  icon?: typeof IconX;
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
            <Icon size={20} />
          </span>
        )}
        <div>{children}</div>
        {typeof ondismiss === "function" && (
          <button
            aria-label="Dismiss"
            class={[classes.closeButton.base, classes.closeButton.color[color]]}
            onclick={ondismiss}
            type="button"
          >
            <IconX aria-hidden class={classes.closeButton.icon} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert as NullstackFunctionalComponent<AlertProps>;
