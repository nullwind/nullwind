import Label from "./Label";
import Helper from "./Helper";
import Error from "./Error";

interface TextareaProps {
  class?: string;
  disabled?: boolean;
  helper?: string;
  id?: string;
  label?: string;
  name?: string;
  rows?: number;
  error?: string;
  corner?: string;
  bind?: object;
  required?: boolean;
  readonly?: boolean;
}

export default function Textarea(props: TextareaProps) {
  const {
    id,
    class: klass,
    label,
    name,
    rows = 4,
    bind,
    helper,
    corner,
    disabled,
    error,
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
      <div class="mt-1">
        <textarea
          rows={rows}
          id={id}
          name={name}
          class={[
            "shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md",
            error &&
              " border-danger-300 text-danger-900 placeholder-danger-300 focus:ring-danger-500 focus:border-danger-500",
            klass,
          ]}
          disabled={disabled}
          bind={bind}
          required={required}
          readonly={readonly}
        />
      </div>
      {error ? <Error>{error}</Error> : helper && <Helper>{helper}</Helper>}
    </div>
  );
}
