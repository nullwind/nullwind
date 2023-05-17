import { NullstackClientContext, NullstackFunctionalComponent, NullstackNode } from "nullstack";

import Input from "./Input";
import type { ComponentProps } from "../../types";
import useThemeProvider from "../../useTheme";

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
  disabled,
  error,
  helper,
  id,
  label,
  required,
  theme,
  useTheme = useThemeProvider(),
  ...rest
}: NullstackClientContext<SelectProps>) => {
  const classes = useTheme(theme).select;

  return (
    <Input
      id={id}
      label={label}
      error={error}
      helper={helper}
      corner={corner}
      required={required}
      class={klass}
      theme={theme}
    >
      <select
        id={id}
        class={[classes.base, error && classes.error]}
        disabled={disabled}
        required={required}
        {...rest}
      >
        {children}
      </select>
    </Input>
  );
};

export default Select as NullstackFunctionalComponent<SelectProps>;
