import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import theme from "../theme";

interface ButtonGroupProps {
  children?: NullstackNode[];
  classes?: typeof theme.buttonGroup;
}

function ButtonGroup(props: NullstackClientContext<ButtonGroupProps>) {
  const { classes = theme.buttonGroup, children } = props;

  return (
    <div class={classes.base}>
      {children.map((child, index) => {
        if (!child.attributes) return child;

        console.log(child);

        const positionInGroup =
          index === 0 ? "start" : index === children.length - 1 ? "end" : "middle";

        child.attributes.positionInGroup = positionInGroup;

        return child;
      })}
    </div>
  );
}

export default ButtonGroup as NullstackFunctionalComponent<ButtonGroupProps>;
