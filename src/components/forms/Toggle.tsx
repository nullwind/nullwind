import Nullstack, { NullstackClientContext } from "nullstack";

import theme from "../../theme";

interface ToggleProps {
  disabled?: boolean;
  id?: string;
  label?: string;
  bind?: object;
  classes?: typeof theme.toggle;
}

class Toggle extends Nullstack {
  toggle({ onclick, bind }) {
    if (bind) {
      bind.object[bind.property] = !bind.object[bind.property];
    }

    onclick && onclick();
  }

  render({
    id,
    classes = theme.toggle,
    label,
    bind,
    disabled = false,
  }: NullstackClientContext<ToggleProps>) {
    const value = !!bind?.object?.[bind?.property];

    return (
      <button
        id={id}
        type="button"
        class={[classes.base, classes.checked[value ? "on" : "off"], disabled && classes.disabled]}
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
