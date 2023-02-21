import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import InputBase from "./InputBase";
import theme from "../../theme";

interface TextareaProps {
  disabled?: boolean;
  helper?: string;
  id?: string;
  label?: string;
  rows?: number;
  error?: string;
  corner?: string;
  required?: boolean;
  classes?: typeof theme.textarea;
}

function Textarea({
  id,
  label,
  rows = 4,
  helper,
  corner,
  disabled,
  error,
  required,
  bind,
  classes = theme.textarea,
  ...props
}: NullstackClientContext<TextareaProps>) {
  return (
    <InputBase
      id={id}
      label={label}
      error={error}
      helper={helper}
      corner={corner}
      required={required}
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
