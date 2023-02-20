import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Error from "./Error";
import Helper from "./Helper";
import Label from "./Label";
import theme from "../../theme";

interface CheckboxProps {
  helper?: string;
  error?: string;
  required?: boolean;
  id?: string;
  label?: string;
  classes?: typeof theme.checkbox;
}

const Checkbox = ({
  label,
  helper,
  error,
  required,
  id,
  classes = theme.checkbox,
  ...props
}: NullstackClientContext<CheckboxProps>) => {
  return (
    <div class={classes.root}>
      <input id={id} type="checkbox" class={classes.base} required={required} {...props} />
      <div>
        {label && (
          <Label class="cursor-pointer" for={id} required={required}>
            {label}
          </Label>
        )}
        {error ? <Error>{error}</Error> : helper && <Helper>{helper}</Helper>}
      </div>
    </div>
  );
};

export default Checkbox as NullstackFunctionalComponent<CheckboxProps>;
