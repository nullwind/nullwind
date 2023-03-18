import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Corner from "./Corner";
import Error from "./Error";
import Helper from "./Helper";
import Label from "./Label";
import type { ComponentProps } from "../../types";

interface InputProps extends ComponentProps {
  corner?: string;
  error?: string;
  helper?: string;
  label?: string;
  required?: boolean;
}

function Input({
  children,
  class: klass,
  corner,
  customTheme,
  error,
  helper,
  id,
  label,
  required,
  useTheme,
}: NullstackClientContext<InputProps>) {
  const classes = useTheme(customTheme).input;

  return (
    <div class={[classes.wrapper, klass]}>
      <div class={classes.labelWrapper}>
        <Label required={required} for={id}>
          {label}
        </Label>
        {corner && <Corner>{corner}</Corner>}
      </div>
      {children}
      {error ? <Error>{error}</Error> : helper && <Helper>{helper}</Helper>}
    </div>
  );
}

export default Input as NullstackFunctionalComponent<InputProps>;
