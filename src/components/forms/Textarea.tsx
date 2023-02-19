import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Corner from "./Corner";
import Error from "./Error";
import Helper from "./Helper";
import Label from "./Label";
import theme from "../../theme";

interface TextareaProps {
  class?: string;
  disabled?: boolean;
  helper?: string;
  id?: string;
  label?: string;
  rows?: number;
  error?: string;
  corner?: string;
  required?: boolean;
}

function Textarea({
  id,
  class: klass,
  label,
  rows = 4,
  helper,
  corner,
  disabled,
  error,
  required,
  bind,
  ...props
}: NullstackClientContext<TextareaProps>) {
  const classes = theme.textarea;

  return (
    <div>
      <div class={classes.root}>
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
          class={[classes.base, error && classes.error, klass]}
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
