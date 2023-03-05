import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import InputBase from "./InputBase";
import type { ComponentProps } from "../../types";

interface TextInputProps extends ComponentProps {
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

function TextInput({
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
  type = "text",
  useTheme,
  ...props
}: NullstackClientContext<TextInputProps>) {
  const classes = useTheme(customTheme).textInput;

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
      <input
        id={id}
        type={type}
        class={[classes.base, error && classes.error]}
        bind={bind}
        disabled={disabled}
        required={required}
        {...props}
      />
    </InputBase>
  );
}

export default TextInput as NullstackFunctionalComponent<TextInputProps>;
