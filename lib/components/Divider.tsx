import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import tc from "../tc";
import type { BaseProps } from "../types";

export const baseDivider = {
  base: "border-t border-gray-200 w-full",
  variants: {
    withLabel: {
      true: "border-t-0",
    },
  },
  slots: {
    label: {
      base: "text-sm text-gray-500 flex items-center before:bg-gray-200 after:bg-gray-200 before:h-px before:flex-1 after:h-px after:flex-1 gap-2",
      variants: {
        position: {
          left: "before:hidden",
          center: "",
          right: "after:hidden",
        },
      },
    },
  },
};

interface DividerProps extends BaseProps {
  label?: string;
  labelPosition?: "left" | "center" | "right";
  labelProps?: any;
}

function Divider({
  class: klass,
  label,
  labelPosition,
  labelProps,
  theme,
}: NullstackClientContext<DividerProps>) {
  const divider = tc(baseDivider, theme?.divider);
  const { base, label: labelBase } = divider();
  const withLabel = !!label;

  return (
    <div class={base({ withLabel, class: klass })}>
      {withLabel && (
        <element
          tag="span"
          {...labelProps}
          class={labelBase({ position: labelPosition, class: labelProps?.class })}
        >
          {label}
        </element>
      )}
    </div>
  );
}

export default Divider as NullstackFunctionalComponent<DividerProps>;
