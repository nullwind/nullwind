import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import InputBase from "./InputBase";
import theme from "../../theme";

interface TextInputProps {
  label?: string;
  corner?: string;
  error?: string;
  helper?: string;
  id?: string;
  name?: string;
  bind?: object;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  classes?: typeof theme.textInput;
}

function TextInput({
  label,
  id,
  type = "text",
  bind,
  error,
  helper,
  corner,
  disabled,
  required,
  classes = theme.textInput,
  ...props
}: NullstackClientContext<TextInputProps>) {
  return (
    <InputBase
      id={id}
      label={label}
      error={error}
      helper={helper}
      corner={corner}
      required={required}
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
