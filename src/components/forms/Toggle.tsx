import Nullstack, { NullstackClientContext } from "nullstack";

import type { ComponentProps } from "../../types";

interface ToggleProps extends ComponentProps {
  bind?: object;
  disabled?: boolean;
  label?: string;
}

class Toggle extends Nullstack {
  toggle({ bind, onclick }) {
    if (bind) {
      bind.object[bind.property] = !bind.object[bind.property];
    }

    onclick && onclick();
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
        onclick={() => !disabled && bind && this.toggle({ bind })}
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
