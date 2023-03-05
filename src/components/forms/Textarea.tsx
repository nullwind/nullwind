import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import InputBase from "./InputBase";
import type { ComponentProps } from "../../types";

interface TextareaProps extends ComponentProps {
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
  customTheme,
  disabled,
  error,
  helper,
  id,
  label,
  required,
  rows = 4,
  useTheme,
  ...props
}: NullstackClientContext<TextareaProps>) {
  const classes = useTheme(customTheme).textarea;

  return (
    <InputBase
      id={id}
      label={label}
      error={error}
      helper={helper}
      corner={corner}
      required={required}
      class={klass}
    >
      <textarea
        id={id}
        rows={rows}
        class={[classes.base, error && classes.error]}
        disabled={disabled}
        required={required}
        bind={bind}
        {...props}
      />
    </InputBase>
  );
}

export default Textarea as NullstackFunctionalComponent<TextareaProps>;
