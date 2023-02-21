import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Corner from "./Corner";
import Error from "./Error";
import Helper from "./Helper";
import Label from "./Label";
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
    <div>
      <div class={classes.labelWrapper}>
        <>
          {label && (
            <Label required={required} for={id}>
              {label}
            </Label>
          )}
          {corner && <Corner>{corner}</Corner>}
        </>
      </div>
      <div>
        <textarea
          id={id}
          rows={rows}
          class={[classes.base, error && classes.error]}
          disabled={disabled}
          required={required}
          bind={bind}
          {...props}
        />
      </div>
      {error ? <Error>{error}</Error> : helper && <Helper>{helper}</Helper>}
    </div>
  );
}

export default Textarea as NullstackFunctionalComponent<TextareaProps>;
