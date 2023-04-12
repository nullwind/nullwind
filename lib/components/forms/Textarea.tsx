import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Input from "./Input";
import type { ComponentProps } from "../../types";
import getUseTheme from "../../useTheme";

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
  disabled,
  error,
  helper,
  id,
  label,
  required,
  rows = 4,
  theme,
  useTheme = getUseTheme(),
  ...rest
}: NullstackClientContext<TextareaProps>) {
  const classes = useTheme(theme).textarea;

  return (
    <Input
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
        class={[classes.base, error && classes.error]}
        disabled={disabled}
        required={required}
        bind={bind}
        {...rest}
      />
    </Input>
  );
}

export default Textarea as NullstackFunctionalComponent<TextareaProps>;
