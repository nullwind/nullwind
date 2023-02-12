import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import theme from "~/theme";

interface ButtonGroupProps {
  children?: NullstackNode[];
  class?: string;
}

function ButtonGroup(props: NullstackClientContext<ButtonGroupProps>) {
  const { class: klass, children } = props;
  const classes = theme.buttonGroup;

  return (
    <div class={[classes.base, klass]}>
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
