import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import { twMerge } from "tailwind-merge";

import type { ComponentProps } from "../types";

interface BadgeProps extends ComponentProps {
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
}

function Badge(props: NullstackClientContext<BadgeProps>) {
  const { children, class: klass, color = "primary", customTheme, id, useTheme } = props;

  const classes = useTheme(customTheme).badge;

  return (
    <span id={id} class={twMerge(classes.base, classes.color[color], klass)}>
      {children}
    </span>
  );
}

export default Badge as NullstackFunctionalComponent<BadgeProps>;
