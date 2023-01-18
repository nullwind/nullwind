import Helper from "./Helper";
import Label from "./Label";

interface CheckboxProps {
  class?: string;
  description?: string;
  disabled?: boolean;
  id?: string;
  label: string;
  name: string;
  onclick?: () => void;
  bind: object;
}

const Checkbox = (props: CheckboxProps) => {
  const { label, description, bind, disabled, id, class: klass } = props;

  return (
    <div class="relative flex items-start">
      <div class="flex items-center h-5">
        <input
          id={id}
          aria-describedby={id}
          type="checkbox"
          class={["focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded", klass]}
          disabled={disabled}
          bind={bind}
        />
      </div>
      <div class="ml-3 text-sm">
        <Label for={id}>{label}</Label>
        {description && <Helper>{description}</Helper>}
      </div>
    </div>
  );
};

export default Checkbox;
