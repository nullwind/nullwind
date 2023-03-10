import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Error from "./Error";
import Helper from "./Helper";
import Label from "./Label";
import type { ComponentProps } from "../../types";

interface InlineInputProps extends ComponentProps {
  error?: string;
  helper?: string;
  label?: string;
  required?: boolean;
}

function InlineInput({
  children,
  class: klass,
  customTheme,
  error,
  helper,
  id,
  label,
  required,
  useTheme,
}: NullstackClientContext<InlineInputProps>) {
  const classes = useTheme(customTheme).inlineInput;

  return (
    <div class={[classes.wrapper, klass]}>
      {children}
      <div class={classes.labelWrapper}>
        {label && (
          <Label for={id} required={required}>
            {label}
          </Label>
        )}
        {error ? <Error>{error}</Error> : helper && <Helper>{helper}</Helper>}
      </div>
    </div>
  );
}

export default InlineInput as NullstackFunctionalComponent<InlineInputProps>;
