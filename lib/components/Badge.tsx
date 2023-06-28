import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import tc from "../tc";
import type { BaseProps } from "../types";

export const baseBadge = {
  base: "rounded-full font-semibold px-2 py-1 text-xs",
  variants: {
    color: {
      primary: "bg-primary-50 text-primary-600",
      secondary: "bg-secondary-50 text-secondary-600",
      info: "bg-info-50 text-info-600",
      success: "bg-success-50 text-success-600",
      warning: "bg-warning-50 text-warning-600",
      danger: "bg-danger-50 text-danger-600",
    },
  },
};

interface BadgeProps extends BaseProps {
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
}

function Badge(props: NullstackClientContext<BadgeProps>) {
  const { children, class: klass, color = "primary", id, theme } = props;
  const badge = tc(baseBadge, theme?.badge);

  return (
    <span id={id} class={badge({ color, class: klass })}>
      {children}
    </span>
  );
}

export default Badge as NullstackFunctionalComponent<BadgeProps>;
