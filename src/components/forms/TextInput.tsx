import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Corner from "./Corner";
import Error from "./Error";
import Helper from "./Helper";
import Label from "./Label";
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
    <div>
      <div class={classes.labelWrapper}>
        <Label required={required} for={id}>
          {label}
        </Label>
        {corner && <Corner>{corner}</Corner>}
      </div>
      <div>
        <input
          id={id}
          type={type}
          class={[classes.base, error && classes.error]}
          bind={bind}
          disabled={disabled}
          required={required}
          {...props}
        />
      </div>
      {error ? <Error>{error}</Error> : helper && <Helper>{helper}</Helper>}
    </div>
  );
}

export default TextInput as NullstackFunctionalComponent<TextInputProps>;
