import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Error from "./Error";
import Helper from "./Helper";
import Label from "./Label";
import type { ComponentProps } from "../../types";

interface CheckboxProps extends ComponentProps {
  error?: string;
  helper?: string;
  label?: string;
  required?: boolean;
}

const Checkbox = ({
  class: klass,
  customTheme,
  error,
  helper,
  id,
  label,
  required,
  useTheme,
  ...props
}: NullstackClientContext<CheckboxProps>) => {
  const classes = useTheme(customTheme).checkbox;

  return (
    <div class={[classes.root, klass]}>
      <input id={id} type="checkbox" class={classes.base} required={required} {...props} />
      <div class={classes.content}>
        {label && (
          <Label for={id} required={required}>
            {label}
          </Label>
        )}
        {error ? <Error>{error}</Error> : helper && <Helper>{helper}</Helper>}
      </div>
    </div>
  );
};

export default Checkbox as NullstackFunctionalComponent<CheckboxProps>;
