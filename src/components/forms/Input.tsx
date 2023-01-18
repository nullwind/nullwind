import Label from "./Label";
import Helper from "./Helper";
import Error from "./Error";

interface InputProps {
  class?: string;
  corner?: string;
  error?: string;
  helper?: string;
  id?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  bind?: object;
  type?: string;
  step?: string;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
}

export default function Input(props: InputProps) {
  const {
    label,
    id,
    class: klass,
    type = "text",
    placeholder,
    name,
    bind,
    error,
    helper,
    corner,
    step = "1",
    disabled,
    required,
    readonly,
  } = props;

  return (
    <div>
      <div class="flex justify-between">
        <Label required={required} for={id}>
          {label}
        </Label>
        {corner && (
          <span class="text-sm text-gray-500" id={id}>
            {corner}
          </span>
        )}
      </div>
      <div class="mt-1 relative rounded-md shadow-sm">
        <input
          type={type}
          name={name}
          id={id}
          class={[
            "focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md focus:outline-none",
            error &&
              " border-danger-300 text-danger-900 placeholder-danger-300 focus:ring-danger-500 focus:border-danger-500",
            klass,
          ]}
          placeholder={placeholder}
          bind={bind}
          disabled={disabled}
          step={step}
          required={required}
          readonly={readonly}
        />
      </div>
      {error ? <Error>{error}</Error> : helper && <Helper>{helper}</Helper>}
    </div>
  );
}
