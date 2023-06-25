import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import InlineInput from "./InlineInput";
import tc from "../../tc";
import type { BaseProps } from "../../types";

export const baseRadio = {
  base: "h-4 w-4 rounded-full border-slate-300 text-primary-600 shadow-sm disabled:cursor-not-allowed disabled:text-slate-400 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0",
  variants: {
    error: {
      true: "!border-danger-300 text-danger-900 placeholder-danger-300",
    },
  },
};

interface RadioProps extends BaseProps {
  disabled?: boolean;
  error?: string;
  helper?: string;
  label?: string;
  required?: boolean;
}

function Radio({
  class: klass,
  disabled = false,
  error,
  helper,
  id,
  label,
  required,
  theme,
  ...rest
}: NullstackClientContext<RadioProps>) {
  const radio = tc(baseRadio, theme?.radio);

  return (
    <InlineInput
      class={klass}
      error={error}
      helper={helper}
      id={id}
      label={label}
      required={required}
      theme={theme}
    >
      <input class={radio({ error: !!error })} disabled={disabled} id={id} type="radio" {...rest} />
    </InlineInput>
  );
}

export default Radio as NullstackFunctionalComponent<RadioProps>;
