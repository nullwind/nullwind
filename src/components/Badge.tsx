import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import type { ComponentProps } from "../types";

interface BadgeProps extends ComponentProps {
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  size?: "base" | "lg";
}

function Badge(props: NullstackClientContext<BadgeProps>) {
  const {
    useTheme,
    id,
    color = "primary",
    size = "base",
    customTheme,
    children,
    class: klass,
  } = props;

  const classes = useTheme(customTheme).badge;

  return (
    <span id={id} class={[classes.base, classes.size[size], classes.color[color], klass]}>
      {children}
    </span>
  );
}

export default Badge as NullstackFunctionalComponent<BadgeProps>;
