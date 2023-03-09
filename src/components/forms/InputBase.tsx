import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Corner from "./Corner";
import Error from "./Error";
import Helper from "./Helper";
import Label from "./Label";
import type { ComponentProps } from "../../types";

interface InputBaseProps extends ComponentProps {
  corner?: string;
  error?: string;
  helper?: string;
  label?: string;
  required?: boolean;
}

function InputBase({
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
}: NullstackClientContext<InputBaseProps>) {
  const classes = useTheme(customTheme).inputBase;

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

export default InputBase as NullstackFunctionalComponent<InputBaseProps>;
