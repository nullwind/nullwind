import Nullstack, { NullstackClientContext } from "nullstack";

interface ToggleProps {
  class?: string;
  disabled?: boolean;
  id?: string;
  label?: string;
  bind?: object;
}

class Toggle extends Nullstack {
  toggle({ onclick, bind }) {
    if (bind) {
      bind.object[bind.property] = !bind.object[bind.property];
    }

    onclick && onclick();
  }

  render({ id, class: klass, label, bind, disabled = false }: NullstackClientContext<ToggleProps>) {
    const value = !!bind?.object?.[bind?.property];

    return (
      <button
        id={id}
        type="button"
        class={[
          "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
          value ? " bg-primary-600" : " bg-gray-200",
          disabled ? " cursor-not-allowed opacity-50" : "",
          klass,
        ]}
        role="switch"
        onclick={() => !disabled && bind && this.toggle({ bind })}
      >
        <span class="sr-only">{label}</span>
        <span
          aria-hidden="true"
          class={[
            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200",
            value ? " translate-x-5" : " translate-x-0",
          ]}
        />
      </button>
    );
  }
}

export default Toggle;
