import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import { ComponentProps } from "~/types";

interface ButtonGroupProps extends ComponentProps {
  children?: NullstackNode[];
}

function ButtonGroup(props: NullstackClientContext<ButtonGroupProps>) {
  const { children, class: klass, customTheme, useTheme } = props;
  const classes = useTheme(customTheme).buttonGroup;

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
