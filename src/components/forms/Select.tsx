import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import Error from "./Error";
import Helper from "./Helper";
import Label from "./Label";

import theme from "~/theme";

interface SelectProps {
  children?: NullstackNode;
  class?: string;
  disabled?: boolean;
  helper?: string;
  id?: string;
  label?: string;
  error?: string;
  corner?: string;
  required?: boolean;
}

const Select = ({
  id,
  class: klass,
  label,
  children,
  helper,
  error,
  corner,
  disabled,
  required,
  ...props
}: NullstackClientContext<SelectProps>) => {
  const classes = theme.select;

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
        class={[classes.base, error && classes.error, klass]}
        disabled={disabled}
        required={required}
        {...props}
      >
        {children}
      </select>
      {error ? <Error>{error}</Error> : helper && <Helper>{helper}</Helper>}
    </div>
  );
};

export default Select as NullstackFunctionalComponent<SelectProps>;
