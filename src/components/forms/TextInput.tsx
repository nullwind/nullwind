import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Corner from "./Corner";
import Error from "./Error";
import Helper from "./Helper";
import Label from "./Label";
import theme from "../../theme";

interface InputProps {
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
  classes?: typeof theme.input;
}

function Input({
  label,
  id,
  type = "text",
  bind,
  error,
  helper,
  corner,
  disabled,
  required,
  classes = theme.input,
  ...props
}: NullstackClientContext<InputProps>) {
  return (
    <div>
      <div class={classes.root}>
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

export default Input as NullstackFunctionalComponent<InputProps>;
