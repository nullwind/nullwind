import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import tc from "../tc";
import { BaseProps } from "../types";

export const baseButtonGroup = {
  base: "inline-flex",
};

type CustomChildren = NullstackNode & {
  attributes?: {
    position?: "start" | "middle" | "end";
  };
};

interface ButtonGroupProps extends BaseProps {
  children?: CustomChildren[];
}

function ButtonGroup(props: NullstackClientContext<ButtonGroupProps>) {
  const { children, class: klass, theme } = props;
  const buttonGroup = tc(baseButtonGroup, theme?.buttonGroup);

  return (
    <div class={buttonGroup({ class: klass })}>
      {children.map((child: CustomChildren, index) => {
        if (!child.attributes) return child;

        const position = index === 0 ? "start" : index === children.length - 1 ? "end" : "middle";

        child.attributes.position = position;

        return child;
      })}
    </div>
  );
}

export default ButtonGroup as NullstackFunctionalComponent<ButtonGroupProps>;
