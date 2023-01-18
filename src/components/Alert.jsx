import { IconX } from "nullstack-feather-icons";

import theme from "../theme";

const Alert = ({
  children,
  color = "info",
  icon: Icon,
  ondismiss,
  rounded = true,
  withBorderAccent,
  class: klass,
}) => {
  const { alert } = theme;

  return (
    <div
      class={[
        alert.root.base,
        alert.root.color[color],
        rounded && alert.root.rounded,
        withBorderAccent && alert.root.borderAccent,
        klass,
      ]}
      role="alert"
    >
      <div class={alert.root.wrapper}>
        {Icon && (
          <span class={alert.root.icon}>
            <Icon size={20} />
          </span>
        )}
        <div>{children}</div>
        {typeof ondismiss === "function" && (
          <button
            aria-label="Dismiss"
            class={[alert.closeButton.base, alert.closeButton.color[color]]}
            onclick={ondismiss}
            type="button"
          >
            <IconX aria-hidden class={alert.closeButton.icon} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
