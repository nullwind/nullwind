import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import type { ComponentProps } from "../../types";
import InlineInput from "./InlineInput";

interface CheckboxProps extends ComponentProps {
  disabled?: boolean;
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
    <InlineInput
      class={klass}
      error={error}
      helper={helper}
      id={id}
      label={label}
      required={required}
    >
      <input
        class={[classes.base, error && classes.error]}
        id={id}
        required={required}
        type="checkbox"
        {...props}
      />
    </InlineInput>
  );
};

export default Checkbox as NullstackFunctionalComponent<CheckboxProps>;
