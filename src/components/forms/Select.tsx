import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import InputBase from "./InputBase";
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
    <InputBase
      id={id}
      label={label}
      error={error}
      helper={helper}
      corner={corner}
      required={required}
    >
      <select
        id={id}
        class={[classes.base, error && classes.error]}
        disabled={disabled}
        required={required}
        {...props}
      >
        {children}
      </select>
    </InputBase>
  );
};

export default Select as NullstackFunctionalComponent<SelectProps>;
