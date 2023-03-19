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
  customTheme,
  error,
  helper,
  id,
  label,
  required,
  useTheme,
}: NullstackClientContext<InputProps>) {
  const { input } = useTheme(customTheme);

  return (
    <div class={[input.wrapper, klass]}>
      <div class={input.labelWrapper}>
        <Label required={required} for={id} customTheme={customTheme}>
          {label}
        </Label>
        {corner && <Corner customTheme={customTheme}>{corner}</Corner>}
      </div>
      {children}
      {error ? (
        <Error customTheme={customTheme}>{error}</Error>
      ) : (
        helper && <Helper customTheme={customTheme}>{helper}</Helper>
      )}
    </div>
  );
}

export default Input as NullstackFunctionalComponent<InputProps>;
