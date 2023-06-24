import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import InlineInput from "./InlineInput";
import type { ComponentProps } from "../../types";
import useThemeProvider from "../../useTheme";

interface CheckboxProps extends ComponentProps {
  disabled?: boolean;
  error?: string;
  helper?: string;
  label?: string;
  required?: boolean;
}

const Checkbox = ({
  class: klass,
  error,
  helper,
  id,
  label,
  required,
  theme,
  useTheme = useThemeProvider(),
  ...rest
}: NullstackClientContext<CheckboxProps>) => {
  const { base, variants } = useTheme(theme).checkbox;

  return (
    <InlineInput
      class={klass}
      error={error}
      helper={helper}
      id={id}
      label={label}
      required={required}
      theme={theme}
    >
      <input
        class={[base, variants.error[!!error && "true"]]}
        id={id}
        required={required}
        type="checkbox"
        {...rest}
      />
    </InlineInput>
  );
};

export default Checkbox as NullstackFunctionalComponent<CheckboxProps>;
