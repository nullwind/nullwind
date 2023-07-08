import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import InputWrapper from "./InputWrapper";
import tc from "../../tc";
import type { BaseProps } from "../../types";

export const baseTextarea = {
  base: "w-full rounded-md border-slate-300 shadow-sm disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0",
  variants: {
    error: {
      true: "!border-danger-300 text-danger-900 placeholder-danger-300",
    },
  },
};

interface TextareaProps extends BaseProps {
  corner?: string;
  disabled?: boolean;
  error?: string;
  helper?: string;
  label?: string;
  required?: boolean;
  rows?: number;
}

function Textarea({
  bind,
  class: klass,
  corner,
  disabled,
  error,
  helper,
  id,
  label,
  required,
  rows = 4,
  theme,
  ...rest
}: NullstackClientContext<TextareaProps>) {
  const textarea = tc(baseTextarea, theme?.textarea);

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
      <textarea
        id={id}
        rows={rows}
        class={textarea({ error: !!error })}
        disabled={disabled}
        required={required}
        bind={bind}
        {...rest}
      />
    </InputWrapper>
  );
}

export default Textarea as NullstackFunctionalComponent<TextareaProps>;
