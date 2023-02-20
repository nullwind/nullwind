import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import { IconX } from "nullstack-feather-icons";

import theme from "../theme";

interface AlertProps {
  children?: NullstackNode;
  color?: "info" | "success" | "warning" | "danger";
  icon?: typeof IconX;
  ondismiss?: () => void;
  rounded?: boolean;
  withBorderAccent?: boolean;
  classes?: typeof theme.alert;
}

const Alert = ({
  children,
  color = "info",
  icon: Icon,
  ondismiss,
  rounded = true,
  withBorderAccent,
  classes = theme.alert,
}: NullstackClientContext<AlertProps>) => {
  return (
    <div
      class={[
        classes.root.base,
        classes.root.color[color],
        rounded && classes.root.rounded,
        withBorderAccent && classes.root.borderAccent,
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
