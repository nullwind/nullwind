import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Input from "./Input";
import type { ComponentProps } from "../../types";
import useThemeProvider from "../../useTheme";

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
  disabled,
  error,
  helper,
  id,
  label,
  required,
  theme,
  type = "text",
  useTheme = useThemeProvider(),
  ...rest
}: NullstackClientContext<TextInputProps>) {
  const { base, variants } = useTheme(theme).textInput;

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
      <input
        id={id}
        type={type}
        class={[base, variants.error[!!error && "true"]]}
        bind={bind}
        disabled={disabled}
        required={required}
        {...rest}
      />
    </Input>
  );
}

export default TextInput as NullstackFunctionalComponent<TextInputProps>;
