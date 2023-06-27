import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import InlineInput from "./InlineInput";
import type { ComponentProps } from "../../types";
import useThemeProvider from "../../useTheme";

interface RadioProps extends ComponentProps {
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
  useTheme = useThemeProvider(),
  ...rest
}: NullstackClientContext<RadioProps>) {
  const { base, variants } = useTheme(theme).radio;

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
      <input
        class={[base, error && variants.error[!!error && "true"]]}
        disabled={disabled}
        id={id}
        type="radio"
        {...rest}
      />
    </InlineInput>
  );
}

export default Radio as NullstackFunctionalComponent<RadioProps>;
