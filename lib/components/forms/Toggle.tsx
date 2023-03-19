import { NullstackClientContext } from "nullstack";

import InlineInput from "./InlineInput";
import type { ComponentProps } from "../../types";

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
  customTheme,
  disabled = false,
  error,
  helper,
  id,
  label,
  onclick,
  required,
  useTheme,
}: NullstackClientContext<ToggleProps>) {
  const classes = useTheme(customTheme).toggle;
  const value = !!bind?.object?.[bind?.property];

  return (
    <InlineInput
      class={klass}
      error={error}
      helper={helper}
      id={id}
      label={label}
      required={required}
      customTheme={customTheme}
    >
      <button
        id={id}
        type="button"
        class={[
          classes.base,
          label && classes.hasLabel,
          classes.checked[value ? "on" : "off"],
          disabled && classes.disabled,
          klass,
        ]}
        role="switch"
        disabled={disabled}
        onclick={() => {
          bind.object[bind.property] = !bind.object[bind.property];
          onclick?.();
        }}
      >
        <span class="sr-only">{label}</span>
        <span
          aria-hidden="true"
          class={[classes.switch.base, classes.switch.checked[value ? "on" : "off"]]}
        />
      </button>
    </InlineInput>
  );
}

export default Toggle;
