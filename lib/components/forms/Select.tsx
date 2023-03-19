import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import Input from "./Input";
import type { ComponentProps } from "../../types";

interface SelectProps extends ComponentProps {
  children?: NullstackNode;
  corner?: string;
  disabled?: boolean;
  error?: string;
  helper?: string;
  label?: string;
  required?: boolean;
}

const Select = ({
  children,
  class: klass,
  corner,
  customTheme,
  disabled,
  error,
  helper,
  id,
  label,
  required,
  useTheme,
  ...props
}: NullstackClientContext<SelectProps>) => {
  const classes = useTheme(customTheme).select;

  return (
    <Input
      id={id}
      label={label}
      error={error}
      helper={helper}
      corner={corner}
      required={required}
      class={klass}
      customTheme={customTheme}
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
    </Input>
  );
};

export default Select as NullstackFunctionalComponent<SelectProps>;
