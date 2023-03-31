import { NullstackClientContext, NullstackFunctionalComponent } from "nullstack";

import Corner from "./Corner";
import Error from "./Error";
import Helper from "./Helper";
import Label from "./Label";
import type { ComponentProps } from "../../types";

interface InputProps extends ComponentProps {
  corner?: string;
  error?: string;
  helper?: string;
  label?: string;
  required?: boolean;
}

function Input({
  children,
  class: klass,
  corner,
  error,
  helper,
  id,
  label,
  required,
  theme,
  useTheme,
}: NullstackClientContext<InputProps>) {
  const { input } = useTheme(theme);

  return (
    <div class={[input.base, klass]}>
      <div class={input.labelWrapper}>
        <Label required={required} for={id} theme={theme}>
          {label}
        </Label>
        {corner && <Corner theme={theme}>{corner}</Corner>}
      </div>
      {children}
      {error ? (
        <Error theme={theme}>{error}</Error>
      ) : (
        helper && <Helper theme={theme}>{helper}</Helper>
      )}
    </div>
  );
}

export default Input as NullstackFunctionalComponent<InputProps>;
