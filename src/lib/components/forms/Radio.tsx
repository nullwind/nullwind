import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import type { ComponentProps } from "../../types";
import InlineInput from "./InlineInput";
interface RadioProps extends ComponentProps {
  disabled?: boolean;
  error?: string;
  helper?: string;
  label?: string;
  required?: boolean;
}

function Radio({
  class: klass,
  customTheme,
  disabled = false,
  error,
  helper,
  id,
  label,
  required,
  useTheme,
  ...props
}: NullstackClientContext<RadioProps>) {
  const classes = useTheme(customTheme).radio;

  return (
    <InlineInput
      class={klass}
      error={error}
      helper={helper}
      id={id}
      label={label}
      required={required}
    >
      <input
        class={[classes.base, error && classes.error]}
        disabled={disabled}
        id={id}
        type="radio"
        {...props}
      />
    </InlineInput>
  );
}

export default Radio as NullstackFunctionalComponent<RadioProps>;
