import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import InputWrapper from "./InputWrapper";
import tc from "../../tc";
import type { BaseProps } from "../../types";

export const baseSelect = {
  base: "w-full rounded-md border-slate-300 shadow-sm disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0",
  variants: {
    error: {
      true: "!border-danger-300 text-danger-900 placeholder-danger-300",
    },
  },
};

interface SelectProps extends BaseProps {
  children?: NullstackNode;
  corner?: string;
  disabled?: boolean;
  error?: string;
  helper?: string;
  label?: string;
  required?: boolean;
}

const Select = ({
  children,
  class: klass,
  corner,
  disabled,
  error,
  helper,
  id,
  label,
  required,
  theme,
  ...rest
}: NullstackClientContext<SelectProps>) => {
  const select = tc(baseSelect, theme?.select);

  return (
    <InputWrapper
      id={id}
      label={label}
      error={error}
      helper={helper}
      corner={corner}
      required={required}
      class={klass}
      theme={theme}
    >
      <select
        id={id}
        class={select({ error: !!error })}
        disabled={disabled}
        required={required}
        {...rest}
      >
        {children}
      </select>
    </InputWrapper>
  );
};

export default Select as NullstackFunctionalComponent<SelectProps>;
