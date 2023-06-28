import { NullstackClientContext } from "nullstack";

import InlineInput from "./InlineInput";
import tc from "../../tc";
import type { BaseProps } from "../../types";

export const baseToggle = {
  base: "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 bg-slate-200",
  variants: {
    hasLabel: {
      true: "-mt-1",
    },
    checked: {
      true: "bg-primary-600",
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
    },
  },
  slots: {
    switch: {
      base: "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
      variants: {
        checked: {
          true: "translate-x-5",
        },
      },
    },
  },
};

interface ToggleProps extends BaseProps {
  disabled?: boolean;
  error?: string;
  helper?: string;
  label?: string;
  onclick?: () => void;
  required?: boolean;
}

function Toggle({
  bind,
  class: klass,
  disabled = false,
  error,
  helper,
  id,
  label,
  onclick,
  required,
  theme,
}: NullstackClientContext<ToggleProps>) {
  const toggle = tc(baseToggle, theme?.toggle);
  const { base, switch: switchSlot } = toggle();
  const checked = !!bind?.object?.[bind?.property];

  return (
    <InlineInput
      class={klass}
      error={error}
      helper={helper}
      id={id}
      label={label}
      required={required}
      theme={theme}
    >
      <button
        id={id}
        type="button"
        class={base({
          checked,
          disabled,
          hasLabel: !!label,
          class: klass,
        })}
        role="switch"
        disabled={disabled}
        onclick={() => {
          bind.object[bind.property] = !bind.object[bind.property];
          onclick?.();
        }}
      >
        <span aria-hidden="true" class={switchSlot({ checked })} />
      </button>
    </InlineInput>
  );
}

export default Toggle;
