import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import { twMerge } from "tailwind-merge";

import type { ComponentProps } from "../types";
import useThemeProvider from "../useTheme";

interface BadgeProps extends ComponentProps {
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
}

function Badge(props: NullstackClientContext<BadgeProps>) {
  const {
    children,
    class: klass,
    color = "primary",
    id,
    theme,
    useTheme = useThemeProvider(),
  } = props;
  const { base, variants } = useTheme(theme).badge;

  return (
    <span id={id} class={twMerge(base, variants.color[color], klass)}>
      {children}
    </span>
  );
}

export default Badge as NullstackFunctionalComponent<BadgeProps>;
