import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import type { Theme, UseTheme } from "../types";

interface BadgeProps {
  children?: NullstackNode;
  class?: string;
  id?: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  size?: "base" | "lg";
  customTheme?: Theme["badge"];
  useTheme: UseTheme;
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
