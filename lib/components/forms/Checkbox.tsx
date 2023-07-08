import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import InlineInputWrapper from "./InlineInputWrapper";
import tc from "../../tc";
import type { BaseProps } from "../../types";

export const baseCheckbox = {
  base: "h-4 w-4 rounded border-slate-300 text-primary-600 shadow-sm disabled:cursor-not-allowed disabled:text-slate-400 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0",
  variants: {
    error: {
      true: "!border-danger-300 text-danger-900 placeholder-danger-300",
    },
  },
};

interface CheckboxProps extends BaseProps {
  disabled?: boolean;
  error?: string;
  helper?: string;
  label?: string;
  required?: boolean;
}

const Checkbox = ({
  class: klass,
  error,
  helper,
  id,
  label,
  required,
  theme,
  ...rest
}: NullstackClientContext<CheckboxProps>) => {
  const checkbox = tc(baseCheckbox, theme?.checkbox);

  return (
    <InlineInputWrapper
      class={klass}
      error={error}
      helper={helper}
      id={id}
      label={label}
      required={required}
      theme={theme}
    >
      <input
        class={checkbox({ error: !!error })}
        id={id}
        required={required}
        type="checkbox"
        {...rest}
      />
    </InlineInputWrapper>
  );
};

export default Checkbox as NullstackFunctionalComponent<CheckboxProps>;
