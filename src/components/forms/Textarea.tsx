import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

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
      <div class="flex justify-between">
        <>
          {label && (
            <Label required={required} for={id}>
              {label}
            </Label>
          )}
          {corner && (
            <span class="text-sm text-gray-500" id={id}>
              {corner}
            </span>
          )}
        </>
      </div>
      <div class="mt-1">
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
