import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import theme from "../theme";

interface BadgeProps {
  children?: NullstackNode;
  class?: string;
  id?: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  size?: "base" | "lg";
  classes?: typeof theme.badge;
}

function Badge(props: NullstackClientContext<BadgeProps>) {
  const { id, color = "primary", size = "base", classes = theme.badge, children } = props;

  return (
    <span id={id} class={[classes.base, classes.size[size], classes.color[color]]}>
      {children}
    </span>
  );
}

export default Badge as NullstackFunctionalComponent<BadgeProps>;
