import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import InputWrapper from "./InputWrapper";
import tc from "../../tc";
import type { BaseProps } from "../../types";

export const baseInput = {
  base: "w-full rounded-md py-1.5 border-slate-300 shadow-sm placeholder:text-gray-400 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0",
  variants: {
    error: {
      true: "!border-danger-300 text-danger-900 placeholder-danger-300",
    },
  },
};

interface InputProps extends BaseProps {
  bind?: object;
  corner?: string;
  disabled?: boolean;
  error?: string;
  helper?: string;
  label?: string;
  name?: string;
  required?: boolean;
  type?: string;
}

function Input({
  bind,
  class: klass,
  corner,
  disabled,
  error,
  helper,
  id,
  label,
  required,
  theme,
  type = "text",
  ...rest
}: NullstackClientContext<InputProps>) {
  const input = tc(baseInput, theme?.input);

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
      <input
        id={id}
        type={type}
        class={input({ error: !!error })}
        bind={bind}
        disabled={disabled}
        required={required}
        {...rest}
      />
    </InputWrapper>
  );
}

export default Input as NullstackFunctionalComponent<InputProps>;
