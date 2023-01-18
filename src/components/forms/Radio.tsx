interface RadioProps {
  class?: string;
  disabled?: boolean;
  helper?: string;
  id?: string;
  label?: string;
  name: string;
  bind: object;
}

const Radio = (props: RadioProps) => {
  const { id, class: klass, label, name, bind, helper, disabled = false } = props;

  return (
    <div class="relative flex items-start">
      <div class="flex items-center h-5">
        <input
          id={id}
          name={name}
          type="radio"
          class={["focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300", klass]}
          disabled={disabled}
          bind={bind}
        />
      </div>
      <div class="ml-3 text-sm">
        <label for="small" class="font-medium text-gray-700">
          {label}
        </label>
        {helper && (
          <p id="small-description" class="text-gray-500">
            {helper}
          </p>
        )}
      </div>
    </div>
  );
};

export default Radio;
