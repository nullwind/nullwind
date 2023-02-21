import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Corner from "./Corner";
import Error from "./Error";
import Helper from "./Helper";
import Label from "./Label";
import theme from "../../theme";

interface InputBaseProps {
  label?: string;
  corner?: string;
  error?: string;
  helper?: string;
  id?: string;
  required?: boolean;
  classes?: typeof theme.inputBase;
}

function TextInput({
  label,
  id,
  error,
  helper,
  corner,
  required,
  classes = theme.inputBase,
  children,
}: NullstackClientContext<InputBaseProps>) {
  return (
    <div>
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

export default TextInput as NullstackFunctionalComponent<InputBaseProps>;
