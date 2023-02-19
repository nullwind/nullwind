import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Error from "./Error";
import Helper from "./Helper";
import Label from "./Label";

import theme from "../../theme";

interface CheckboxProps {
  class?: string;
  helper?: string;
  error?: string;
  required?: boolean;
  id?: string;
  label?: string;
}

const Checkbox = ({
  label,
  helper,
  error,
  required,
  id,
  class: klass,
  ...props
}: NullstackClientContext<CheckboxProps>) => {
  const classes = theme.checkbox;

  return (
    <div class={classes.root}>
      <input id={id} type="checkbox" class={[classes.base, klass]} required={required} {...props} />
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
