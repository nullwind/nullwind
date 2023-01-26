import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import theme from "~/theme";

interface BadgeProps {
  children?: NullstackNode;
  class?: string;
  id?: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  size?: "base" | "lg";
}

function Badge(props: NullstackClientContext<BadgeProps>) {
  const { id, color = "primary", size = "base", class: klass, children } = props;
  const classes = theme.badge;

  return (
    <span id={id} class={[classes.base, classes.size[size], classes.color[color], klass]}>
      {children}
    </span>
  );
}

export default Badge as NullstackFunctionalComponent<BadgeProps>;
