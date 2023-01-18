import { NullstackNode } from "nullstack";

import Label from "./Label";
import Helper from "./Helper";
import Error from "./Error";

interface SelectProps {
  children?: NullstackNode;
  class?: string;
  disabled?: boolean;
  helper?: string;
  id?: string;
  label?: string;
  name?: string;
  error?: string;
  corner?: string;
  bind?: string;
  required?: boolean;
  readonly?: boolean;
}

const Select = (props: SelectProps) => {
  const {
    id,
    class: klass,
    label,
    name,
    bind,
    children,
    helper,
    error,
    corner,
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
      <select
        id={id}
        name={name}
        class={[
          "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md",
          error &&
            "border-danger-300 text-danger-900 placeholder-danger-300 focus:ring-danger-500 focus:border-danger-500",
          klass,
        ]}
        bind={bind}
        disabled={disabled}
        required={required}
        readonly={readonly}
      >
        {children}
      </select>
      {error ? <Error>{error}</Error> : helper && <Helper>{helper}</Helper>}
    </div>
  );
};

export default Select;
