import Nullstack, { NullstackClientContext } from "nullstack";

import type { ComponentProps } from "../../types";

interface ToggleProps extends ComponentProps {
  disabled?: boolean;
  label?: string;
  onclick?: () => void;
}

class Toggle extends Nullstack {
  toggle({ bind, onclick }: NullstackClientContext<ToggleProps>) {
    bind.object[bind.property] = !bind.object[bind.property];
    onclick?.();
  }

  render({
    bind,
    class: klass,
    customTheme,
    disabled = false,
    id,
    label,
    useTheme,
  }: NullstackClientContext<ToggleProps>) {
    const classes = useTheme(customTheme).toggle;
    const value = !!bind?.object?.[bind?.property];

    return (
      <button
        id={id}
        type="button"
        class={[
          classes.base,
          classes.checked[value ? "on" : "off"],
          disabled && classes.disabled,
          klass,
        ]}
        role="switch"
        disabled={disabled}
        onclick={this.toggle}
      >
        <span class="sr-only">{label}</span>
        <span
          aria-hidden="true"
          class={[classes.switch.base, classes.switch.checked[value ? "on" : "off"]]}
        />
      </button>
    );
  }
}

export default Toggle;
