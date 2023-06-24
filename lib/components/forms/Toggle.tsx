import { NullstackClientContext } from "nullstack";

import { twMerge } from "tailwind-merge";

import InlineInput from "./InlineInput";
import type { ComponentProps } from "../../types";
import useThemeProvider from "../../useTheme";

interface ToggleProps extends ComponentProps {
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
  useTheme = useThemeProvider(),
}: NullstackClientContext<ToggleProps>) {
  const { base, slots, variants } = useTheme(theme).toggle;
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
        class={twMerge(
          base,
          variants.checked[checked && "true"],
          variants.hasLabel[!!label && "true"],
          variants.disabled[disabled && "true"],
          klass
        )}
        role="switch"
        disabled={disabled}
        onclick={() => {
          bind.object[bind.property] = !bind.object[bind.property];
          onclick?.();
        }}
      >
        <span
          aria-hidden="true"
          class={[slots.switch.base, slots.switch.variants.checked[checked && "true"]]}
        />
      </button>
    </InlineInput>
  );
}

export default Toggle;
