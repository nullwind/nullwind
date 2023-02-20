import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import Corner from "./Corner";
import Error from "./Error";
import Helper from "./Helper";
import Label from "./Label";
import theme from "../../theme";

interface SelectProps {
  children?: NullstackNode;
  disabled?: boolean;
  helper?: string;
  id?: string;
  label?: string;
  error?: string;
  corner?: string;
  required?: boolean;
  classes?: typeof theme.select;
}

const Select = ({
  id,
  label,
  children,
  helper,
  error,
  corner,
  disabled,
  required,
  classes = theme.select,
  ...props
}: NullstackClientContext<SelectProps>) => {
  return (
    <div>
      <div class={classes.root}>
        <Label required={required} for={id}>
          {label}
        </Label>
        {corner && <Corner>{corner}</Corner>}
      </div>
      <select
        id={id}
        class={[classes.base, error && classes.error]}
        disabled={disabled}
        required={required}
        {...props}
      >
        {children}
      </select>
      {error ? <Error>{error}</Error> : helper && <Helper>{helper}</Helper>}
    </div>
  );
};

export default Select as NullstackFunctionalComponent<SelectProps>;
